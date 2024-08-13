const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

class Vehicle {
    constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.width = 40;
        this.height = 20;
    }

    // 車両を描画
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // 車両の位置を更新
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    // 衝突検知
    isCollidingWith(otherVehicle) {
        return (
            this.x < otherVehicle.x + otherVehicle.width &&
            this.x + this.width > otherVehicle.x &&
            this.y < otherVehicle.y + otherVehicle.height &&
            this.y + this.height > otherVehicle.y
        );
    }
}

// 車両の作成
const car1 = new Vehicle(0, 180, 2, 0, 'blue');
const car2 = new Vehicle(760, 180, -2, 0, 'red');

// シミュレーションループ
function simulate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    car1.update();
    car2.update();

    car1.draw();
    car2.draw();

    if (car1.isCollidingWith(car2)) {
        alert('衝突が発生しました!');
        return; // シミュレーションを停止
    }

    requestAnimationFrame(simulate);
}

// シミュレーション開始
simulate();
