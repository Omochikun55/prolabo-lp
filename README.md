# ぷろらぼ研究所 紹介LP

学習を「研究」に変えて、自分の成長を実感しながら、新しい可能性を見つける学習支援プログラムの紹介ランディングページです。

## 技術スタック

- **フレームワーク**: React 18 + Vite 7
- **ルーティング**: Wouter
- **UI**: Radix UI + Tailwind CSS 4
- **言語**: TypeScript
- **パッケージマネージャー**: pnpm
- **サーバー**: Express.js

## 開発環境のセットアップ

### 必要な環境
- Node.js 18以上
- pnpm 10以上

### インストール

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

開発サーバーは `http://localhost:3000` で起動します。

## ビルド

```bash
# プロダクションビルド
pnpm build

# ビルドの確認
pnpm start
```

## 環境変数

`.env.example` をコピーして `.env` ファイルを作成してください。

```bash
cp .env.example .env
```

### 必須の環境変数

- `VITE_APP_TITLE`: サイトのタイトル（デフォルト: "ぷろらぼ研究所"）
- `VITE_APP_LOGO`: ロゴ画像のパス（デフォルト: "/logo.png"）

### オプションの環境変数

- `VITE_OAUTH_PORTAL_URL`: OAuth認証のポータルURL（マイページ連携時）
- `VITE_APP_ID`: アプリケーションID（OAuth使用時）
- `VITE_ANALYTICS_ENDPOINT`: アナリティクスのエンドポイント
- `VITE_ANALYTICS_WEBSITE_ID`: アナリティクスのWebサイトID

## Vercelへのデプロイ

### 1. Vercel CLIを使用する場合

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### 2. GitHubと連携する場合

1. GitHubリポジトリをVercelに接続
2. 環境変数を設定
3. 自動デプロイが開始されます

### Vercel環境変数の設定

Vercelダッシュボードの「Settings」→「Environment Variables」で以下を設定：

- `VITE_APP_TITLE`
- `VITE_APP_LOGO`
- その他必要な環境変数

## プロジェクト構造

```
prolabo-lp/
├── client/              # フロントエンドコード
│   ├── public/          # 静的アセット
│   │   ├── images/      # キャラクター画像
│   │   └── logo.png     # ロゴ
│   └── src/
│       ├── components/  # Reactコンポーネント
│       ├── pages/       # ページコンポーネント
│       │   └── Home.tsx # メインLP
│       ├── App.tsx      # アプリケーションルート
│       └── main.tsx     # エントリーポイント
├── server/              # バックエンドコード
│   └── index.ts         # Expressサーバー
├── shared/              # 共有コード
└── dist/                # ビルド出力
    ├── public/          # フロントエンドビルド
    └── index.js         # サーバービルド
```

## 実装済みセクション

- ✅ ヘッダー（ロゴ、マイページログインボタン）
- ✅ ヒーローセクション
- ✅ ぷろらぼ研究所とは
- ✅ 研究員になると何ができる？
- ✅ なぜ学習するのか？
- ✅ どんな研究ができるの？（5教科 + IT教育）
- ✅ マイページで成長を可視化
- ✅ バッジシステム
- ✅ 活動情報（時間・場所）
- ✅ 研究員になるには（3ステップ）
- ✅ CTA（行動喚起）
- ✅ フッター

## TODO

詳細は `todo.md` を参照してください。

## ライセンス

MIT
