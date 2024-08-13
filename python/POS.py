
import sys


from flask import Flask, request, jsonify

app = Flask(__name__)




# 簡易データベースとしての辞書
inventory = {
    "item1": {"name": "Product 1", "price": 100, "quantity": 10},
    "item2": {"name": "Product 2", "price": 200, "quantity": 5},
}

@app.route('/inventory', methods=['GET'])
def get_inventory():
    return jsonify(inventory)

@app.route('/sell', methods=['POST'])
def sell_item():
    item_id = request.json.get('item_id')
    if item_id in inventory and inventory[item_id]['quantity'] > 0:
        inventory[item_id]['quantity'] -= 1
        return jsonify({"message": "Item sold!", "item": inventory[item_id]})
    else:
        return jsonify({"message": "Item not available!"}), 400

# if __name__ == '__main__':
#     app.run(debug=True)


if __name__ == '__main__':
    print("sys.path:", sys.path)  # sys.pathを出力して確認する
    app.run(debug=True)