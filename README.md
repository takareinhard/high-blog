# High-Blog: フルスタックブログアプリケーション

High-Blogは、FastAPIバックエンドとReactフロントエンドで構築されたフルスタックのブログアプリケーションです。ユーザーはブログ投稿の作成、読み取り、更新、削除を行うことができます。

## 機能

*   **バックエンド (FastAPI):**
    *   ユーザー認証（登録、ログイン）
    *   ブログ投稿のCRUD操作
    *   データベース統合（SQLAlchemyを使用したSQLite）
*   **フロントエンド (React):**
    *   ブログ投稿のリスト表示
    *   新しい投稿を作成するためのフォーム
    *   （今後：投稿の編集と削除、ユーザープロファイル）

## 使用技術

### バックエンド

*   Python 3.x
*   FastAPI
*   SQLAlchemy (ORM)
*   SQLite (データベース)
*   Bcrypt (パスワードハッシュ化)
*   Python-Jose (認証用JWT)

### フロントエンド

*   React.js
*   TypeScript
*   CSS

## セットアップ

プロジェクトをローカルでセットアップして実行するには、以下の手順に従ってください。

### 前提条件

*   Python 3.8+
*   Node.js (LTS推奨)
*   npm または Yarn

### 1. リポジトリのクローン

```bash
git clone <repository_url>
cd high-blog
```

### 2. バックエンドのセットアップ

`backend` ディレクトリに移動し、Python仮想環境をセットアップします。

```bash
cd backend
python -m venv venv
```

**Windowsの場合:**

```bash
.\venv\Scripts\activate
```

**macOS/Linuxの場合:**

```bash
source venv/bin/activate
```

必要なPythonパッケージをインストールします。

```bash
pip install -r requirements.txt # このファイルが存在しない場合は、まず作成する必要があるかもしれません
```

*（注意：`requirements.txt` が見つからない場合は、`fastapi`、`uvicorn`、`sqlalchemy`、`python-jose`、`bcrypt` などの依存関係をインストールした後、`pip freeze > requirements.txt` を使用して生成できます）*

### 3. フロントエンドのセットアップ

新しいターミナルを開き、`frontend` ディレクトリに移動して、Node.jsの依存関係をインストールします。

```bash
cd ../frontend
npm install
# または yarn install
```

## アプリケーションの実行

### 1. バックエンドサーバーの起動

`backend` ディレクトリから（仮想環境がアクティブな状態で）：

```bash
uvicorn main:app --reload
```

バックエンドAPIは `http://127.0.0.1:8000` で利用可能になります。

### 2. フロントエンド開発サーバーの起動

`frontend` ディレクトリから：

```bash
npm start
# または yarn start
```

Reactアプリケーションはブラウザで `http://localhost:3000` で開きます。

## APIエンドポイント (バックエンド)

*   `/docs`: FastAPIインタラクティブAPIドキュメント (Swagger UI)
*   `/redoc`: FastAPI ReDocドキュメント
*   `/users/`: ユーザー登録と管理
*   `/token`: ユーザーログインとトークン生成
*   `/posts/`: ブログ投稿のCRUD操作

## 貢献

貢献を歓迎します！リポジトリをフォークし、変更を加えてプルリクエストを作成してください。

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細については `LICENSE` ファイルを参照してください。（該当する場合、ルートディレクトリにLICENSEファイルを作成してください）