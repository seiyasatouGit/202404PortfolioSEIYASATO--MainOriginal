import json
import numpy as np
import random

# パラメータ設定
num_customers = 500  # 1日の総来店客数
store_open_time = 8 * 60  # 開店時間（分）
store_close_time = 22 * 60  # 閉店時間（分）
store_areas = ['Entrance', 'Produce', 'Dairy', 'Bakery', 'Frozen', 'Checkout']  # 店内エリア

# 客の動きデータ生成
data = []

for customer_id in range(1, num_customers + 1):
    num_movements = random.randint(5, 15)  # 客が店内を移動する回数
    time = np.random.randint(store_open_time, store_close_time)  # 開店から閉店までの間のランダムな時刻
    for _ in range(num_movements):
        area = random.choice(store_areas)
        duration = np.random.randint(1, 15)  # 各エリアに滞在する時間（分）
        data.append({
            "customer_id": customer_id,
            "time": time,
            "area": area,
            "duration": duration
        })
        time += duration

# JSONとして保存
with open('customer_movements.json', 'w') as f:
    json.dump(data, f)
