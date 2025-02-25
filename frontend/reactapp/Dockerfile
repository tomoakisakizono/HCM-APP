# ベースイメージとして Node.js を使用
FROM node:18

# 作業ディレクトリの設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# npmの依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# Reactアプリの開発サーバーを起動
CMD ["npm", "start"]
