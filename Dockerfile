# ベースイメージを指定
FROM python:3.9

# 作業ディレクトリを設定
WORKDIR /app

# 必要なファイルをコピー
COPY . .

# アプリケーションの依存関係をインストール
RUN pip install -r requirements.txt

# アプリケーションの実行コマンド
CMD ["python", "app.py"]
