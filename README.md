# ダンススクールqD - Webサイト

ダンススクールqDの公式Webサイトです。

## 機能

- レスポンシブデザイン（PC・タブレット・スマートフォン対応）
- スクール情報の紹介
- レッスン内容の紹介
- 連絡先情報の掲載
- Googleフォームによるお問い合わせフォーム

## プロジェクト構造

```
qd_dance_school/
├── images/
│   ├── instructor/          # 講師の画像
│   │   └── instructor-main.jpg
│   ├── events/             # イベント画像
│   │   ├── summer/         # 夏イベント（海）
│   │   ├── halloween/      # ハロウィンイベント
│   │   └── christmas/      # クリスマスイベント
│   └── hero/               # ヒーローセクション背景画像
│       └── hero-background.jpg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## セットアップ

1. このリポジトリをクローンまたはダウンロードします
2. `index.html`をブラウザで開きます

## Googleフォームの設定

1. Googleフォームを作成します
2. フォームの「送信」ボタンの横にある「⋮」（三点リーダー）をクリック
3. 「埋め込みコードを取得」を選択
4. 表示されたiframeコードの`src`属性のURLをコピー
5. `index.html`の以下の2箇所を更新してください：
   - 埋め込み用iframeの`src`属性（`YOUR_FORM_ID`の部分）
   - 別ウィンドウで開くリンクの`href`属性（`YOUR_FORM_ID`の部分）

## カスタマイズ

### 連絡先情報の変更

`index.html`の連絡先セクション（`#contact`内）の情報を編集してください。

### 画像の追加・変更

画像は以下のフォルダ構造で管理されています：
- `images/instructor/` - 講師の画像
- `images/events/summer/` - 夏イベントの画像
- `images/events/halloween/` - ハロウィンイベントの画像
- `images/events/christmas/` - クリスマスイベントの画像
- `images/hero/` - ヒーローセクションの背景画像

新しい画像を追加する場合は、適切なフォルダに配置し、`index.html`または`styles.css`でパスを更新してください。

### 色の変更

`styles.css`の以下の変数を変更することで、サイト全体のカラースキームを変更できます：
- `#667eea` - プライマリカラー
- `#764ba2` - セカンダリカラー

## ブラウザサポート

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

あいうえお。github actionsのためのテストコミットのための一行。