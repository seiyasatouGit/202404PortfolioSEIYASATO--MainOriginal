import pygame
import random
import sys

# Pygameの初期化
pygame.init()

# ウィンドウサイズの設定
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("3D Shooting Game")

# プレイヤークラスの作成
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill((255, 0, 0))
        self.rect = self.image.get_rect()
        self.rect.center = (400, 300)
        self.speed = 3  # 移動速度を遅くする

    def update(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and self.rect.left > 0:
            self.rect.x -= self.speed
        if keys[pygame.K_RIGHT] and self.rect.right < 800:
            self.rect.x += self.speed
        if keys[pygame.K_UP] and self.rect.top > 0:
            self.rect.y -= self.speed
        if keys[pygame.K_DOWN] and self.rect.bottom < 600:
            self.rect.y += self.speed

# 弾クラスの作成
class Bullet(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((10, 20))
        self.image.fill((255, 255, 0))
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        self.speed = 5  # 弾の速度を遅くする

    def update(self):
        self.rect.y -= self.speed
        if self.rect.y < 0:
            self.kill()

# 敵クラスの作成
class Enemy(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill((0, 0, 255))
        self.rect = self.image.get_rect()
        self.rect.x = random.randint(0, 750)  # 敵のX座標の範囲を修正
        self.rect.y = random.randint(-100, -40)
        self.speed = random.uniform(0.2, 0.75)  # 敵の速度を遅くする

    def update(self):
        self.rect.y += self.speed
        if self.rect.y > 600:
            self.rect.y = random.randint(-100, -40)
            self.rect.x = random.randint(0, 750)  # 敵のX座標の範囲を修正

# プレイヤーのインスタンス作成
player = Player()

# スプライトグループの作成
all_sprites = pygame.sprite.Group()
all_sprites.add(player)

# 弾のスプライトグループ
bullets = pygame.sprite.Group()

# 敵のスプライトグループ
enemies = pygame.sprite.Group()

# 敵の生成（8から4に変更）
for i in range(4):
    enemy = Enemy()
    all_sprites.add(enemy)
    enemies.add(enemy)

# メインループ
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                print("Bullet fired")  # デバッグメッセージ
                bullet = Bullet(player.rect.centerx, player.rect.top)
                all_sprites.add(bullet)
                bullets.add(bullet)

    # プレイヤー、弾、敵の更新
    all_sprites.update()

    # 弾と敵の衝突判定
    hits = pygame.sprite.groupcollide(enemies, bullets, True, True)
    if hits:
        print("Collision detected")  # デバッグメッセージ
    for hit in hits:
        enemy = Enemy()
        enemy.rect.x = random.randint(0, 750)  # 新しい敵のX座標を適切に設定
        enemy.rect.y = random.randint(-100, -40)  # 新しい敵のY座標を適切に設定
        all_sprites.add(enemy)
        enemies.add(enemy)

    # 背景を黒にする
    screen.fill((0, 0, 0))

    # スプライトの描画
    all_sprites.draw(screen)

    # 画面を更新する
    pygame.display.flip()

pygame.quit()
sys.exit()
