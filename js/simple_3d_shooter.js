const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


// 星クラス
class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 2;
        this.color = Math.random() > 0.5 ? 'yellow' : 'orange';
        this.speed = 0.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.radius;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

// プレイヤークラス
class Player {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 10;
        this.speed = 3;
        this.dx = 0;
        this.dy = 0;
    }

    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width / 2, this.y - this.height);
        ctx.lineTo(this.x + this.width, this.y);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // 画面端の制約
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;

        this.draw();
    }

    move(direction) {
        if (direction === 'left') this.dx = -this.speed;
        if (direction === 'right') this.dx = this.speed;
        if (direction === 'up') this.dy = -this.speed;
        if (direction === 'down') this.dy = this.speed;
    }

    stop() {
        this.dx = 0;
        this.dy = 0;
    }
}

// 弾クラス
class Bullet {
    constructor(x, y) {
        this.width = 10;
        this.height = 20;
        this.x = x;
        this.y = y;
        this.speed = 5;
    }

    draw() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y -= this.speed;
        this.draw();
    }
}

// 敵クラス
class Enemy {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * -canvas.height / 2;
        this.speed = Math.random() * 0.75 + 0.2;

        this.color = color;
    }

    draw() {
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(this.x + this.width / 2, this.y + this.height / 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = Math.random() * -canvas.height / 2;
            this.x = Math.random() * (canvas.width - this.width);
        }
        this.draw();
    }
}

const player = new Player();
const bullets = [];
const enemies = [];
// for (let i = 0; i < 4; i++) {
//     enemies.push(new Enemy());
// }

const stars = [];
for (let i = 0; i < 20; i++) {
    stars.push(new Star());
}

for (let i = 0; i < 4; i++) {
    enemies.push(new Enemy(i % 2 === 0 ? 'yellow' : 'blue'));
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => star.update());

    player.update();
    bullets.forEach((bullet, index) => {
        bullet.update();
        // 弾が画面外に出たら削除
        if (bullet.y + bullet.height < 0) {
            bullets.splice(index, 1);
        }
    });

    enemies.forEach((enemy, index) => {
        enemy.update();
        // 敵と弾の衝突判定
        bullets.forEach((bullet, bulletIndex) => {
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {
                enemies.splice(index, 1);
                bullets.splice(bulletIndex, 1);
                // enemies.push(new Enemy());

                enemies.push(new Enemy(Math.random() > 0.5 ? 'yellow' : 'blue'));
            }
        });
    });

    requestAnimationFrame(update);
}


// スペースキーや十字キー動く
// function keyDownHandler(e) {
//     if (e.key === 'ArrowLeft') player.move('left');
//     if (e.key === 'ArrowRight') player.move('right');
//     if (e.key === 'ArrowUp') player.move('up');
//     if (e.key === 'ArrowDown') player.move('down');
//     if (e.key === ' ') {
//         bullets.push(new Bullet(player.x + player.width / 2 - 5, player.y));
//     }
// }
// スペースキーや十字キー動かない
function keyDownHandler(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();  // ブラウザのデフォルト動作を防ぐ
    }


    if (e.key === 'ArrowLeft') player.move('left');
    if (e.key === 'ArrowRight') player.move('right');
    if (e.key === 'ArrowUp') player.move('up');
    if (e.key === 'ArrowDown') player.move('down');
    if (e.key === ' ') {
        bullets.push(new Bullet(player.x + player.width / 2 - 5, player.y));
    }
}

// スペースキーや十字キー動く
// function keyUpHandler(e) {
//     if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.stop();
//     if (e.key === 'ArrowUp' || e.key === 'ArrowDown') player.stop();
// }
// スペースキーや十字キー動かない
function keyUpHandler(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        player.stop();
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

update();























