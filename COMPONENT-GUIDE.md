# コンポーネントガイド

## 概要
このプロジェクトでは、再利用可能なCSSコンポーネントとJavaScriptコンポーネントを用意しています。
統一感のあるデザインを維持しながら、効率的に開発を進めることができます。

## セットアップ

### 必要なファイル
```html
<!-- CSS -->
<link rel="stylesheet" href="styles/design-system.css">

<!-- JavaScript (オプション) -->
<script src="js/components.js"></script>
```

## CSSコンポーネント

### 1. カード
```html
<!-- 基本カード -->
<div class="card">
  <h3>タイトル</h3>
  <p>内容</p>
</div>

<!-- バリエーション -->
<div class="card card-primary">プライマリカード</div>
<div class="card card-dark">ダークカード</div>
<div class="card card-bordered">ボーダー付きカード</div>
```

### 2. ボタン
```html
<!-- 基本ボタン -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>

<!-- サイズバリエーション -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- アイコン付き -->
<button class="btn btn-primary">
  <i class="fas fa-save"></i> 保存
</button>
```

### 3. バッジ
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
```

### 4. アラート
```html
<div class="alert-info">情報メッセージ</div>
<div class="alert-success">成功メッセージ</div>
<div class="alert-warning">警告メッセージ</div>
<div class="alert-danger">エラーメッセージ</div>
```

### 5. グリッドレイアウト
```html
<!-- 2列グリッド -->
<div class="grid grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3列グリッド -->
<div class="grid grid-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 自動調整グリッド -->
<div class="grid grid-auto">
  <div>Auto 1</div>
  <div>Auto 2</div>
  <div>Auto 3</div>
</div>
```

### 6. メトリックカード
```html
<div class="metric-card">
  <div class="metric-icon">
    <i class="fas fa-users"></i>
  </div>
  <div class="metric-value">1,234</div>
  <div class="metric-label">ユーザー数</div>
</div>
```

### 7. チェックリスト
```html
<div class="checklist">
  <div class="checklist-item">
    <input type="checkbox" id="check1">
    <label for="check1">タスク1</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check2">
    <label for="check2">タスク2</label>
  </div>
</div>
```

### 8. 著者情報
```html
<div class="author-box">
  <div class="author-avatar">
    <i class="fas fa-user"></i>
  </div>
  <div class="author-details">
    <h4>著者名</h4>
    <p>説明文</p>
  </div>
</div>
```

## ユーティリティクラス

### スペーシング
- マージン: `m-0`, `m-1`, `m-2`, `m-3`, `m-4`, `m-5`
- マージン方向指定: `mt-3` (上), `mb-3` (下), `ml-3` (左), `mr-3` (右)
- パディング: `p-0`, `p-1`, `p-2`, `p-3`, `p-4`, `p-5`

### テキスト
- 色: `text-primary`, `text-dark`, `text-light`, `text-muted`
- 配置: `text-center`, `text-left`, `text-right`

### 背景
- `bg-primary`, `bg-dark`, `bg-light`, `bg-gray`

### 表示
- `d-flex`, `d-grid`, `d-block`, `d-inline`, `d-none`

### Flexbox
- `align-items-center`, `align-items-start`, `align-items-end`
- `justify-content-center`, `justify-content-between`
- `gap-1`, `gap-2`, `gap-3`, `gap-4`, `gap-5`

### その他
- `rounded`, `rounded-sm`, `rounded-lg`, `rounded-full`
- `shadow-sm`, `shadow-md`, `shadow-none`
- `w-100`, `w-75`, `w-50`, `w-25`

## JavaScriptコンポーネント

### アコーディオン
```html
<div class="accordion">
  <div class="accordion-header">
    <span>クリックして開く</span>
    <i class="fas fa-chevron-right accordion-icon"></i>
  </div>
  <div class="accordion-content">
    <p>隠れているコンテンツ</p>
  </div>
</div>
```

### タブ
```html
<div class="tabs">
  <div class="tab-buttons">
    <button class="tab-button active">タブ1</button>
    <button class="tab-button">タブ2</button>
  </div>
  <div class="tab-content active">
    <p>タブ1の内容</p>
  </div>
  <div class="tab-content">
    <p>タブ2の内容</p>
  </div>
</div>
```

### ツールチップ
```html
<span data-tooltip="ヒントテキスト">
  ホバーしてください
</span>
```

### モーダル
```html
<!-- トリガー -->
<button data-modal="modal1">モーダルを開く</button>

<!-- モーダル本体 -->
<div id="modal1" class="modal">
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <h2>モーダルタイトル</h2>
    <p>モーダルの内容</p>
  </div>
</div>
```

### コピーボタン
```html
<pre id="code1">
  <code>コピーするコード</code>
</pre>
<button data-copy="code1">コピー</button>
```

## 使用例

### ページテンプレート
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ページタイトル</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="styles/design-system.css">
</head>
<body>
  <!-- ヘッダー -->
  <header class="header">
    <h1>タイトル</h1>
    <p>説明文</p>
  </header>

  <!-- コンテンツ -->
  <div class="container">
    <section class="card mb-4">
      <h2>セクションタイトル</h2>
      <p>内容</p>
    </section>
  </div>

  <!-- フッター -->
  <footer class="footer">
    <p>&copy; 2025 サイト名. All rights reserved.</p>
  </footer>

  <!-- JavaScript -->
  <script src="js/components.js"></script>
</body>
</html>
```

## 既存ページへの適用方法

1. **design-system.css を読み込む**
   ```html
   <link rel="stylesheet" href="styles/design-system.css">
   ```

2. **既存の要素にクラスを適用**
   - `<div>` → `<div class="card">`
   - `<button>` → `<button class="btn btn-primary">`
   - グリッドレイアウトを使用: `<div class="grid grid-3">`

3. **ユーティリティクラスで微調整**
   ```html
   <div class="card mt-4 mb-4">
     <h2 class="text-center text-primary">見出し</h2>
     <p class="text-muted">説明文</p>
   </div>
   ```

4. **JavaScriptコンポーネントを活用**
   ```html
   <script src="js/components.js"></script>
   ```

## デザイン原則

- **シンプル**: 過度な装飾を避け、必要最小限のスタイルに留める
- **統一性**: 全ページで同じコンポーネントを使用し、一貫性を保つ
- **再利用性**: コンポーネントは様々な場面で使えるよう汎用的に設計
- **アクセシビリティ**: WCAG AA準拠のコントラスト比を維持
- **レスポンシブ**: モバイルファーストで設計

## 更新履歴

- v1.0 (2025-08-20): 初版リリース
  - 基本コンポーネントの実装
  - ユーティリティクラスの追加
  - JavaScriptインタラクティブコンポーネント