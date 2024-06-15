import time
import random
import os


from flask import Flask, jsonify

app = Flask(__name__)



# 株価指数データを模倣
indices = {
    "日経平均": [28500.0, 200],
    "S&P 500": [4300.0, 30],
    "ダウ平均": [34000.0, 100]
}

def update_indices():
    for index in indices:
        current_value, change = indices[index]
        change = random.uniform(-50.0, 50.0)  # 変動値をランダムに設定
        new_value = current_value + change
        indices[index] = [new_value, change]

# def display_indices():
    # os.system('cls' if os.name == 'nt' else 'clear')  # 画面をクリア
    # print(f"{'指数':<10} {'現在値':>10} {'変動':>10}")
    # print("-" * 30)
    # for index, (value, change) in indices.items():
    #     print(f"{index:<10} {value:>10.2f} {change:>+10.2f}")


def display_indices():
    os.system('cls')  # Windowsでは 'cls' を使います
    print(f"{'指数':<10} {'現在値':>10} {'変動':>10}")
    print("-" * 30)
    for index, (value, change) in indices.items():
        print(f"{index:<10} {value:>10.2f} {change:>+10.2f}")


# while True:
#     update_indices()
#     display_indices()
#     time.sleep(1)







@app.route('/data')
def get_data():
    update_indices()  # データ更新
    return jsonify(indices)

if __name__ == '__main__':
    app.run(debug=True)

### 実行手順
# 1. 上記のコードをPythonスクリプト（例：`stock_indices.py`）として保存します。
# 2. ターミナルまたはコマンドプロンプトを開きます。
# 3. スクリプトを実行します。
#    ```sh
#    python stock_indices.py
#    ```


# #
# このスクリプトは以下のように動作します：
# 1. `update_indices` 関数が株価指数の値をランダムに更新します。
# 2. `display_indices` 関数がコンソールに最新の株価指数を表示します。
# 3. 1秒ごとに値を更新し、画面をクリアして新しい値を表示します。

# これにより、APIを使用せずに株価指数が動的に変動する様子をコンソールで視覚的に確認できます。




