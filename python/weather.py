import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# 過去の気温データ（例: 日付、気温）
days = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).reshape(-1, 1)
temperatures = np.array([30, 32, 34, 33, 35, 36, 38, 37, 39, 40])

# 線形回帰モデルを訓練
model = LinearRegression()
model.fit(days, temperatures)

# 未来の予測
future_days = np.array([11, 12, 13, 14, 15]).reshape(-1, 1)
predicted_temperatures = model.predict(future_days)

# 結果のプロット
plt.scatter(days, temperatures, color='blue', label='Observed')
plt.plot(future_days, predicted_temperatures, color='red', linestyle='--', label='Predicted')
plt.xlabel('Days')
plt.ylabel('Temperature')
plt.legend()
plt.show()