---
marp: true
theme: custom
paginate: true
header: "AI活用研修"
footer: "© 2025 SoEasy社"
size: 16:9
style: |
  /*
  ======================================
  改善されたMarpデザインテンプレート
  ======================================
  
  このテンプレートは以下の課題を解決するために設計されています：
  
  【デザイン面】
  - プレースホルダー画像の使用 → 実際の画像に置き換えるための指示を含む
  - レスポンシブ対応の不足 → 様々な画面サイズに対応するレイアウト
  - 視認性の課題 → コントラスト向上、読みやすいフォントサイズ
  - アニメーション・トランジションの欠如 → スライド遷移効果の追加
  
  【コンテンツ面】
  - ワークセクションの詳細不足 → 専用レイアウトの追加
  - 専門用語の解説不足 → 用語解説用のスタイル追加
  - インタラクティブ要素の不足 → 参加者の注目を集める要素
  - 実例・ケーススタディの不足 → 事例表示用のレイアウト
  */

  /* 基本的なフォントとCDNのインポート */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
  
  /* カラースキームの定義 - アクセシビリティを考慮した配色 */
  :root {
    /* メインカラー */
    --color-primary: #2563eb;        /* 青：主要な見出しやアクセント */
    --color-secondary: #7c3aed;      /* 紫：セカンダリーアクセント */
    --color-tertiary: #0891b2;       /* 水色：補助的なアクセント */
    
    /* 背景色 */
    --color-background-light: #f8fafc; /* 明るい背景 */
    --color-background-dark: #1e293b;  /* 暗い背景 */
    --color-background-alt: #f0f9ff;   /* 代替背景色（薄い青） */
    
    /* テキスト色 */
    --color-text-dark: #1e293b;      /* 暗いテキスト（明るい背景用） */
    --color-text-light: #f8fafc;     /* 明るいテキスト（暗い背景用） */
    --color-text-muted: #64748b;     /* 控えめなテキスト */
    
    /* アクセント色 */
    --color-accent-success: #10b981; /* 成功/ポジティブ */
    --color-accent-warning: #f59e0b; /* 警告/注意 */
    --color-accent-danger: #ef4444;  /* 危険/エラー */
    
    /* グラデーション用 */
    --gradient-blue: linear-gradient(135deg, #2563eb, #0891b2);
    --gradient-purple: linear-gradient(135deg, #7c3aed, #c026d3);
    
    /* シャドウ */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* アニメーション時間 */
    --transition-fast: 0.2s;
    --transition-normal: 0.3s;
    --transition-slow: 0.5s;
  }

  /* 基本スタイル */
  section {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 24px;
    padding: 46px; /* 全周囲（上下左右）に16px追加 */
    background-color: var(--color-background-light);
    color: var(--color-text-dark);
    line-height: 1.5;
    transition: background-color var(--transition-normal);
    overflow: hidden; /* アニメーション要素がはみ出ないように */
  }
  
  /* ダークモードのスライド */
  section.dark {
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
  }
  
  section.dark h1,
  section.dark h2,
  section.dark h3 {
    color: var(--color-text-light);
  }
  
  /* グラデーション背景のスライド */
  section.gradient-blue {
    background: var(--gradient-blue);
    color: var(--color-text-light);
  }
  
  section.gradient-purple {
    background: var(--gradient-purple);
    color: var(--color-text-light);
  }
  
  /* 見出しスタイル */
  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.4em;
    border-bottom: 3px solid var(--color-primary);
    padding-bottom: 0.2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--color-secondary);
    margin-top: 0.2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-tertiary);
    margin-top: 0.6em;
    margin-bottom: 0.4em;
  }

  /* リストスタイル */
  ul, ol {
    padding-left: 1em;
    margin-top: 0.6em;
    margin-bottom: 0.6em;
  }
  
  li {
    margin-bottom: 0.4em;
    position: relative;
  }
  
  /* アイコン付きリスト */
  ul.icon-list {
    list-style: none;
    padding-left: 0.5em;
  }
  
  ul.icon-list li {
    padding-left: 2em;
    position: relative;
    margin-bottom: 0.8em;
  }
  
  ul.icon-list li::before {
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }
  
  ul.icon-list.check li::before {
    content: '\f00c'; /* チェックマーク */
  }
  
  ul.icon-list.arrow li::before {
    content: '\f061'; /* 矢印 */
  }
  
  ul.icon-list.star li::before {
    content: '\f005'; /* 星 */
  }
  
  /* 画像スタイル - レスポンシブ対応 */
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  }
  
  /* 画像ホバーエフェクト */
  img:hover:not([alt*="bg"]) {
    transform: scale(1.02);
    box-shadow: var(--shadow-lg);
  }
  
  /* 画像サイズバリエーション */
  img.small {
    max-width: 30%;
    max-height: 200px;
  }
  
  img.medium {
    max-width: 50%;
    max-height: 300px;
  }
  
  img.large {
    max-width: 80%;
    max-height: 400px;
  }
  
  /* 画像位置調整 */
  .img-center {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  
  /* カラムレイアウト */
  .columns {
    display: flex;
    gap: 1.5rem;
    margin: 0.8em 0;
  }
  
  .column {
    flex: 1;
    min-width: 0; /* テキストオーバーフローを防止 */
  }
  
  /* 不均等なカラム */
  .columns.ratio-1-2 .column:first-child {
    flex: 1;
  }
  
  .columns.ratio-1-2 .column:last-child {
    flex: 2;
  }
  
  .columns.ratio-2-1 .column:first-child {
    flex: 2;
  }
  
  .columns.ratio-2-1 .column:last-child {
    flex: 1;
  }
  
  /* アイコンスタイル */
  .fa-solid, .fa-regular, .fa-brands {
    color: var(--color-primary);
    margin-right: 0.2em;
  }
  
  /* 画像とテキストのグリッドレイアウト */
  .image-right {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 1.5rem;
    align-items: center;
  }
  
  .image-left {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1.5rem;
    align-items: center;
  }
  
  /* 背景画像付きスライド */
  .image-bg {
    background-size: cover;
    background-position: center;
    color: var(--color-text-light);
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    position: relative;
  }
  
  /* 背景画像の上に半透明のオーバーレイを追加 */
  .image-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4); /* 暗めのオーバーレイ */
    z-index: -1;
  }
  
  .image-bg h1, .image-bg h2, .image-bg h3 {
    color: var(--color-text-light);
    border-color: var(--color-text-light);
  }

  /* テキスト強調 */
  .highlight {
    color: var(--color-accent-warning);
    font-weight: 700;
  }
  
  .highlight-success {
    color: var(--color-accent-success);
    font-weight: 700;
  }
  
  .highlight-danger {
    color: var(--color-accent-danger);
    font-weight: 700;
  }
  
  /* 中央揃えのスライド */
  section.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  /* カード要素 */
  .card {
    background-color: white;
    border-radius: 8px;
    padding: 1.5em;
    margin: 1em 0;
    box-shadow: var(--shadow-md);
    border-left: 4px solid var(--color-primary);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .card.success {
    border-left-color: var(--color-accent-success);
  }
  
  .card.warning {
    border-left-color: var(--color-accent-warning);
  }
  
  .card.danger {
    border-left-color: var(--color-accent-danger);
  }
  
  /* 引用スタイル */
  blockquote {
    font-style: italic;
    border-left: 4px solid var(--color-secondary);
    padding-left: 1em;
    margin-left: 0;
    color: var(--color-text-muted);
  }
  
  /* コードブロック */
  pre {
    background-color: #282c34;
    color: #abb2bf;
    padding: 1em;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.9em;
    line-height: 1.4;
  }
  
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    background-color: rgba(0,0,0,0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  /* 専門用語解説スタイル */
  .term-definition {
    background-color: var(--color-background-alt);
    border-radius: 8px;
    padding: 1em 1.5em;
    margin: 1em 0;
    border-left: 4px solid var(--color-tertiary);
    position: relative;
  }
  
  .term-definition::before {
    content: '用語解説';
    position: absolute;
    top: -0.8em;
    left: 1em;
    background-color: var(--color-tertiary);
    color: white;
    padding: 0.2em 0.8em;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: bold;
  }
  
  .term-definition h4 {
    margin-top: 0.5em;
    color: var(--color-tertiary);
    font-size: 1.2em;
  }
  
  /* ワークショップセクション用スタイル */
  .workshop {
    background-color: var(--color-background-alt);
    border-radius: 12px;
    padding: 1.5em;
    margin: 1.5em 0;
    border: 2px dashed var(--color-primary);
    position: relative;
  }
  
  .workshop::before {
    content: 'ワーク';
    position: absolute;
    top: -1em;
    left: 2em;
    background-color: var(--color-primary);
    color: white;
    padding: 0.3em 1em;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .workshop h3 {
    margin-top: 0.2em;
    color: var(--color-primary);
  }
  
  .workshop-steps {
    counter-reset: step;
    list-style-type: none;
    padding-left: 0;
  }
  
  .workshop-steps li {
    position: relative;
    padding-left: 3em;
    margin-bottom: 1em;
    counter-increment: step;
  }
  
  .workshop-steps li::before {
    content: 'STEP ' counter(step);
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--color-primary);
    color: white;
    padding: 0.2em 0.6em;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: bold;
  }

  /* タイムライン */
  .timeline {
    position: relative;
    padding-left: 2em;
    margin: 2em 0;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.5em;
    width: 2px;
    background-color: var(--color-primary);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 2em;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -2em;
    top: 0.5em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--color-primary);
  }
  
  .timeline-item h4 {
    margin: 0 0 0.5em 0;
    color: var(--color-primary);
  }
  
  /* 実例・ケーススタディ用スタイル */
  .case-study {
    background-color: white;
    border-radius: 8px;
    padding: 1.5em;
    margin: 1.5em 0;
    box-shadow: var(--shadow-md);
    border-top: 4px solid var(--color-secondary);
    position: relative;
  }
  
  .case-study::before {
    content: 'ケーススタディ';
    position: absolute;
    top: -0.8em;
    left: 1em;
    background-color: var(--color-secondary);
    color: white;
    padding: 0.2em 0.8em;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: bold;
  }
  
  .case-study h3 {
    margin-top: 0.2em;
    color: var(--color-secondary);
  }
  
  /* 注意喚起ボックス */
  .alert {
    padding: 1em 1.5em;
    margin: 1em 0;
    border-radius: 8px;
    position: relative;
    padding-left: 3em;
  }
  
  .alert::before {
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    left: 1em;
    top: 1em;
  }
  
  .alert.info {
    background-color: rgba(37, 99, 235, 0.1);
    border-left: 4px solid var(--color-primary);
  }
  
  .alert.info::before {
    content: '\f05a'; /* 情報アイコン */
    color: var(--color-primary);
  }
  
  .alert.warning {
    background-color: rgba(245, 158, 11, 0.1);
    border-left: 4px solid var(--color-accent-warning);
  }
  
  .alert.warning::before {
    content: '\f071'; /* 警告アイコン */
    color: var(--color-accent-warning);
  }
  
  .alert.success {
    background-color: rgba(16, 185, 129, 0.1);
    border-left: 4px solid var(--color-accent-success);
  }
  
  .alert.success::before {
    content: '\f058'; /* 成功アイコン */
    color: var(--color-accent-success);
  }

  /* アニメーション要素 */
  .animate {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  
  .animate.delay-1 {
    animation-delay: 0.2s;
  }
  
  .animate.delay-2 {
    animation-delay: 0.4s;
  }
  
  .animate.delay-3 {
    animation-delay: 0.6s;
  }
  
  /* インタラクティブ要素 */
  .interactive {
    cursor: pointer;
    transition: all var(--transition-normal);
    position: relative;
  }
  
  .interactive::after {
    content: '\f0a6'; /* 指差しアイコン */
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    right: -1.5em;
    color: var(--color-primary);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }
  
  .interactive:hover {
    color: var(--color-primary);
    transform: translateX(5px);
  }
  
  .interactive:hover::after {
    opacity: 1;
  }
  
  /* 比較表 */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5em 0;
  }
  
  th, td {
    padding: 0.75em 1em;
    border: 1px solid #e2e8f0;
  }
  
  th {
    background-color: var(--color-primary);
    color: white;
    font-weight: 500;
  }
  
  tr:nth-child(even) {
    background-color: rgba(0,0,0,0.02);
  }
  
  /* フッターノート */
  .footnote {
    font-size: 0.8em;
    color: var(--color-text-muted);
    margin-top: 2em;
    padding-top: 0.5em;
    border-top: 1px solid #e2e8f0;
  }
  
  /* ページ番号スタイル */
  section::after {
    font-size: 0.8em;
    color: var(--color-text-muted);
  }
  
  /* ヘッダーとフッターのスタイル */
  header, footer {
    font-size: 0.7em;
    color: var(--color-text-muted);
  }
  
  /* 印刷用スタイル - ページブレイク防止など */
  @media print {
    section {
      page-break-inside: avoid;
    }
    
    h1, h2, h3 {
      page-break-after: avoid;
    }
    
    .columns, .image-left, .image-right {
      page-break-inside: avoid;
    }
  }
---

<!-- _class: lead image-bg -->
![bg brightness:0.4](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)

<div class="animate fadeIn">
  ## <i class="fa-solid fa-robot"></i> AI活用研修
  ## チームメンバーとしてのAIをマネジメントする <i class="fa-solid fa-users-gear"></i>
</div>

<div class="animate fadeIn delay-1">
  ### 2025年5月12日
</div>

<div class="animate fadeIn delay-2">
  <p>SoEasy社 人材開発部</p>
</div>

---

<!-- _class: lead -->
# **進め方の設計 (1/2)**

### <i class="fa-solid fa-sitemap"></i> 論点とサブ論点の整理
- **論点1:** カリキュラムCSVと既存情報を照合し、スライド案とスクリプト概要を作成
  - サブ論点1-1: カリキュラムCSVの各セクションの意図を理解
  - サブ論点1-2: 既存情報をカリキュラムの各セクションにマッピング
  - サブ論点1-3: マッピング結果に基づき、スライド構成案とスクリプトの骨子を作成

---

<!-- _class: lead -->
# **進め方の設計 (2/2)**

### <i class="fa-solid fa-magnifying-glass"></i> 不足要素の特定
- **論点2:** 不足しているスクリプト要素を特定
  - サブ論点2-1: カリキュラムの目的・手法・目標と照らし合わせ、カバーしきれない要素を洗い出す
  - サブ論点2-2: ワークショップ形式であることを考慮し、インタラクティブ性や理解を深めるための追加要素を検討

---

<!-- _class: image-right -->
# <i class="fa-solid fa-table"></i> **データフォーマットの設計**

<div>

## スライド案・スクリプト概要
- カリキュラムの各項目に対応
  - 「時間（分）」「種別」「概要」「メモ」
  - 「想定されるユーザーの反応」
- スライドのタイトル案とキーメッセージ
- スクリプトの主要な流れ
- 既存情報の活用度と配置

## 不足スクリプト要素
- カリキュラムの該当セクション
- 不足している要素の内容
- 必要性の理由・目的

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="データ構造を表現した図表">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-diagram-project"></i> **業務フロー設計 (1/2)**

<div>

### 初期分析と構成
1. カリキュラムCSVの解析
   - 各時間枠の目的と内容を把握
2. 資料の各セクションへの割り当て
   - オープニング
   - セクション①：AIとはどんな"人"か？
   - セクション②：プロンプト設計
   - セクション③：コンテクストウィンドウ
   - セクション④：AI活用の個人化

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="業務フロー図">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-diagram-project"></i> **業務フロー設計 (2/2)**

<div>

### 詳細設計と調整
1. 不足要素の洗い出し
   - インタラクティブ要素
   - 具体的な指示
   - ファシリテーション文言

2. 研修目的達成の要素確認
   - エンゲージメント向上策
   - 行動を促す問いかけ

3. ターゲット調整
   - 専門用語の解説
   - 初心者向け言葉遣い

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="ワークショップの様子">
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-play"></i> **実行プロセス (1/4)**

## カリキュラムと既存情報のマッピング（前半）

<div class="columns">
<div class="column">

### オープニング (10分)
- 既存情報: 特になし
- 講師自己紹介
- 目的と構成共有

</div>
<div class="column">

### リビジット (5分)
- 「みんな、AIってどう使ってる？」
- 既存情報: 特になし
- 参加者同士の共有

</div>
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-play"></i> **実行プロセス (2/4)**

## カリキュラムと既存情報のマッピング（後半）

### セクション①：AIとはどんな"人"か？ (10分)
- 既存情報: スライドA、B、C
- AIの高学歴、実力、記憶喪失の比喩
- 「AIと人間の根本的な違い」
- 「AIの大きなクセ」

---

<!-- _class: lead -->
# <i class="fa-solid fa-play"></i> **実行プロセス (3/4)**

## セクション②関連

<div class="columns">
<div class="column">

### プロンプト設計＝マネジメント (10分)
- 既存情報: 「曖昧さに弱い」「タイミーの例え」
- 「高学歴を活かすために」
- 「厳密な指示が競争力」
- 構造は明示的でない

</div>
<div class="column">

### ワーク②：プロンプト改善 (10分)
- 既存情報: 特になし
- 具体的なワーク指示が必要
- グループワーク形式

</div>
</div>

### 休憩 (10分)
- 既存情報: 特になし

---

<!-- _class: -->
# <i class="fa-solid fa-hands-helping"></i> ワークショップ：プロンプト改善

<div class="workshop">
  <h3>効果的なプロンプト作成演習</h3>
  <p>以下の曖昧なプロンプトを、より具体的で効果的なものに改善してください。</p>
  
  <div class="card">
    <h4>改善前のプロンプト</h4>
    <p>「マーケティング資料を作って」</p>
  </div>
  
  <ol class="workshop-steps">
    <li>目的を明確にする（誰に向けた、何のための資料か）</li>
    <li>必要な要素を列挙する（含めるべき情報、データ、主張など）</li>
    <li>形式や長さを指定する（スライド、文書、文字数など）</li>
    <li>トーンや表現スタイルを決める（フォーマル、カジュアル、専門的など）</li>
  </ol>
</div>

<div class="alert warning">
  <p>時間は10分です。終了5分前にアナウンスします。</p>
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-play"></i> **実行プロセス (4/4)**

## セクション③関連

<div class="columns">
<div class="column">

### コンテクストウィンドウ／API思考 (10分)
- 既存情報: 「記憶がない」
- 「チャット履歴の送信構造」
- 「短期記憶」「日記」の比喩
- 専門用語での説明は薄い

</div>
<div class="column">

### ワーク③：スレッド設計 (10分)
- 既存情報: 特になし
- 具体的なワーク指示が必要
- 実践的な演習

</div>
</div>

---

<!-- _class: -->
# <i class="fa-solid fa-diagram-project"></i> ワークショップ：スレッド設計

<div class="workshop">
  <h3>効率的なAI会話設計演習</h3>
  <p>以下の複雑なタスクを、複数のスレッドに分解して設計してみましょう。</p>
  
  <div class="card">
    <h4>複雑なタスク例</h4>
    <p>「新製品のマーケティング戦略を立案し、SNS投稿文を作成して、競合分析も行いたい」</p>
  </div>
  
  <ol class="workshop-steps">
    <li>タスクを独立した小さな部分に分解する</li>
    <li>各部分をどのようなスレッドに分けるか決める</li>
    <li>各スレッドで最初に与えるべき情報・指示を考える</li>
    <li>スレッド間でどのように情報を引き継ぐか検討する</li>
  </ol>
</div>

<div class="alert info">
  <p>API思考を活かし、各スレッドの目的を明確にしましょう。</p>
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-play"></i> **実行プロセス（セクション④）**

## AI活用の個人化

<div class="columns">
<div class="column">

### AI活用に"あなたらしさ"をのせるには (10分)
- 既存情報: 「曖昧さに弱い」の後半
- AI活用の3つの型
  - 壁打ち（思考パートナー型）
  - 代行（業務アシスタント型）
  - 教えてもらう（専属リサーチャー型）
- 個人の強みを活かす方法

</div>
<div class="column">

### ワーク④：自分なりのAI活用法 (10分)
- 既存情報: 特になし
- 具体的なワーク指示が必要
- 個人ワークとグループ共有

</div>
</div>

---

<!-- _class: -->
# <i class="fa-solid fa-user-gear"></i> ワークショップ：AI活用法の設計

<div class="workshop">
  <h3>パーソナルAI活用計画</h3>
  <p>あなたの強みや専門性を活かした、独自のAI活用法を考えてみましょう。</p>
  
  <div class="columns">
    <div class="column">
      <div class="card">
        <h4>あなたの強み・専門性</h4>
        <ul class="icon-list star">
          <li>業界知識・経験</li>
          <li>特定分野の専門スキル</li>
          <li>独自の人脈・情報源</li>
        </ul>
      </div>
    </div>
    
    <div class="column">
      <div class="card">
        <h4>活用パターン</h4>
        <ul class="icon-list check">
          <li>壁打ち（思考パートナー型）</li>
          <li>代行（業務アシスタント型）</li>
          <li>教えてもらう（専属リサーチャー型）</li>
        </ul>
      </div>
    </div>
  </div>
  
  <ol class="workshop-steps">
    <li>あなたの強み・専門性を3つ書き出す</li>
    <li>それらを活かせる業務や課題を特定する</li>
    <li>どの活用パターンが最適か検討する</li>
  </ol>
</div>

<div class="alert success">
  <p>明日から実践できる具体的な活用法を考えましょう！</p>
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-play"></i> **実行プロセス（まとめ）**

## まとめと振り返り

### まとめ・Q&A・アンケート (25分)
- 既存情報: 散文的説明の最後の部分
- 重要ポイント
  - AIを使う上での目的意識
  - 悩みからスタート
  - 仕事以外でも使う
  - 壁打ちの重要性
- 質疑応答と振り返り
- アンケート記入

---

<!-- _class: image-right -->
# <i class="fa-solid fa-clipboard-check"></i> **改善ポイント (1/2)**

<div>

## ワークショップ要素の強化
- **指示と進行の明確化**
  - 参加者への具体的な指示
  - ファシリテーション方法の詳細化
- **専門用語の解説追加**
  - 「コンテクストウィンドウ」
  - 「API思考」などの平易な説明
- **インタラクション促進**
  - グループワークの活性化
  - 質問を引き出す仕掛け

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="チェックリストとワークショップの様子">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-clipboard-check"></i> **改善ポイント (2/2)**

<div>

## 構造と多様性への配慮
- **構造的アプローチの強化**
  - 「目的・背景・方針・前提条件」の明示
  - セクション②での構造提示
  - ワーク②での実践
- **実演の計画**
  - 具体的なデモンストレーション
  - タイミングと内容の明確化
- **多様なレベルへの対応**
  - 初心者向け補足説明
  - 経験者向け発展ヒント

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="多様な参加者のイメージ">
</div>
---

<!-- _class: lead gradient-blue -->

<div class="animate fadeIn">
  # <i class="fa-solid fa-rocket"></i> セクション①
  ## AIとはどんな"人"か？
</div>

<div class="animate fadeIn delay-1">
  <p>AIの知識の深さと人間とは異なる「クセ」を理解する</p>
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-robot"></i> AIって、どんな"人"？
## その能力と独特の個性

<div>

AIをチームメンバーとして考えると...

- 膨大な知識を持つ「新人」
- 驚くべき能力を持つ一方で
- 独特の「クセ」がある
- 上手な付き合い方が重要

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" class="large" alt="疑問符を持ったロボット">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-graduation-cap"></i> AIは"超高学歴の天才"

<div>

## 圧倒的な知識量
- インターネット上の膨大な文章を読破
  - 書籍・論文・ブログ・マニュアル等
- 世界トップレベルの頭脳集団による開発・学習
- あらゆる知識を瞬時に引き出せる能力
  - 古典から最新技術まで幅広くカバー

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" class="large" alt="積み上げられた大量の本と、それを吸収しているAIのイメージ">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-graduation-cap"></i> 「例えるなら…東大主席＆MITダブル修了の新人」

<div>

## 実証された能力
- 🎓 東大入試問題（英・倫・数）→ 正答率◎
- 🩺 医師国家試験 → GPT-4で8割前後（2023年）
- ⚖️ 法務文書の要約・作成 → 弁護士業務の一部をカバー
- 💻 プログラム生成 → フルスタックでアプリ開発可能

<span class="highlight">使いこなせば、強力な戦力に</span>

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" class="large" alt="スーパー新人のイメージ">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-exclamation-triangle"></i> でも…この新人、ちょっと「大きなクセ」があります

<div>

## AIの3つの特徴的なクセ
- **記憶がない**：
  「あれ、さっきの話なんだっけ？」
  （チャットが終わると忘却）
- **空気は読まない**：
  「え、そういう意味じゃない？」
  （行間・顔色・雰囲気はスルー）
- **曖昧さに弱い**：
  「具体的に言ってくれないと…」
  （文面が全て）

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="large" alt="困った顔の優秀そうな新入社員のキャラクター">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-memory"></i> 特に注意！クセ①：「昨日のことは覚えていません」

<div>

## AIの記憶の特性
- チャットセッションが終わると、それまでのやり取りは基本的にリセット
- 昨日依頼したことを今日は覚えていない

## わかりやすい例え話
- 記憶が1日でリセットされるドラマの登場人物と毎日会話するイメージ
- AI自身が日記（ログ）を書いても、翌日にはその内容を忘れている
  （都度読み込ませる必要あり）

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="日めくりカレンダーが毎日「1日」に戻っているイメージ">
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-check-circle"></i> まとめ：AIの特性

<div class="columns">
<div class="column">

### 得意なこと
- 膨大な知識
- 複雑な問題解決
- 高速処理

</div>
<div class="column">

### 苦手なこと
- 記憶の維持
- 空気を読む
- 曖昧な指示の理解

</div>
</div>

<div class="alert info">
  <p>「超優秀だけど、現場感ゼロの新人」をどう育てれば最高のチームメンバーになるでしょうか？</p>
</div>

![bg right:30%](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)
---

<!-- _class: lead dark -->

<div class="animate slideInLeft">
  # <i class="fa-solid fa-comment-dots"></i> セクション②
  ## プロンプト設計＝マネジメント
</div>

<div class="animate fadeIn delay-1">
  <p>AIへの指示出しは「新人マネジメント」と同じ構造</p>
</div>

---

<!-- _class: image-bg -->
![bg brightness:0.4](https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)

# <i class="fa-solid fa-comment-dots"></i> AIへの指示は「マネジメント」
## 優秀な新人を活かす「伝え方」の技術

---

<!-- _class: image-right -->
# <i class="fa-solid fa-user-tie"></i> もし「今日初めて来たアルバイトさん」に仕事を頼むなら？

<div>

## タイミーさんの例え

問いかけ：「皆さんの職場に、今日初めてタイミーでアルバイトさんが来たとします。その人に重要な仕事をいきなり丸投げしますか？」

- 業務の流れもわからない
- どこに何があるかもわからない
- その中で仕事をしてもらうには？

### 大事なこと
- 情報を整理しておく
- 使う道具を整理しておく
- 何をすればいいのか丁寧に教える

<span class="highlight">AIも同じ。彼らは「高学歴なタイミーさん」</span>

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="初めての職場で少し戸惑っているアルバイトさん">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-list-check"></i> AIへの指示出し（プロンプト）3つの心得

<div>

## 効果的なプロンプトの原則

- **原則①：プロンプトは「厳密」であればあるほど良い** <i class="fa-solid fa-ruler"></i>
  - 曖昧さを嫌うAIには、具体的で明確な指示が不可欠

- **原則②：1回で完璧を目指さない。「ブラッシュアップ」が前提** <i class="fa-solid fa-arrows-spin"></i>
  - 人間同士でも一発で伝わらないことはある
  - 対話しながら改善していく姿勢が大切

- **原則③：プロンプトは「短い」ほど良い（場合がある）** <i class="fa-solid fa-scissors"></i>
  - ただし、必要な情報はしっかり含める
  - 余計な情報は混乱のもと

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" class="large" alt="研ぎ澄まされた指示書のイメージ">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-anchor"></i> 良い指示の構造①：「アンカリング」で共通認識を作る

<div>

## AIとの認識合わせが重要

### A. 参照範囲の定義
- AIに「どの範囲の話か」を教える
- 前提条件、具体例、役割、概要など

### B. 思考プロセスの付与
- AIに「どう考えてほしいか」を伝える
- CoT（ステップバイステップ思考）
- ゴールシーク（目標から逆算）
- 方針（「顧客満足度を最優先で」）

### C. アウトプットの指定
- AIに「何を出してほしいか」を明確にする
- 出力形式、例文、文字数、スタイルなど

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="共通認識を作るイメージ">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-sitemap"></i> 良い指示の構造②：「コンテクストマネジメント」で誤解を防ぐ

<div>

## 情報の整理と伝達方法の工夫

### A. プロンプトフォーマット
- AIに「論理の形」を伝える
- マークダウン（見出しやリスト）
- 数式や論理記号
- プログラミングコード形式
- 専門用語の統一

### B. ステートレスという前提
- AIは「前の文脈」をすぐ忘れる
- 「毎日新しいSESに優秀なエンジニアが来る」
- チャットのやり取りでも、重要な前提は都度伝える

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80" class="large" alt="情報整理のイメージ">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-bullseye"></i> プロンプト作成の第一歩：「何のために？」を明確にする

<div>

## 目的の明確化が最重要

### なぜ目的が重要か？
- 目的が定まっていないと「なんか違うけどこれでいいか…」となりがち（人間側の認知バイアス）
- AIは優秀でも、私たちの「真の目的」までは察してくれない

### 目的を明確にする要素（依頼の5W1H）
- **背景**：どういう経緯でそのタスクを依頼するのか
- **前提**：必要な用語の定義、共有認識
- **理想像（ゴール）**：何を実現したいのか

<span class="highlight">最初から完璧な目的は難しい → AIと対話しながら明確化するのも一手</span>

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1560414239-dcdf7d8d0226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" class="large" alt="目標設定のイメージ">
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-handshake"></i> まとめ：効果的な指示

<div class="columns">
<div class="column">

### プロンプトの心得
- AIは「高学歴なタイミーさん」
- 3つの原則
  - 厳密に
  - ブラッシュアップ前提
  - 簡潔に（必要情報は確保）

</div>
<div class="column">

### 構造化のポイント
- アンカリング（認識合わせ）
- コンテクストマネジメント
- 「目的の明確化」が最重要

</div>
</div>

<div class="alert info">
  <p>普段の「人への指示」でも見直せるポイントはありましたか？</p>
</div>

![bg right:30%](https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
---

<!-- _class: lead image-bg -->
![bg brightness:0.3](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)

<div class="animate zoomIn">
  # <i class="fa-solid fa-memory"></i> セクション③
  ## コンテクストウィンドウ／API思考
</div>

<div class="animate fadeIn delay-1">
  <p>AIの記憶の仕組みと複雑タスクの分解方法</p>
</div>

---

<!-- _class: image-bg -->
![bg brightness:0.4](https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

# <i class="fa-solid fa-memory"></i> AIの記憶とタスク分解術
## 長い会話も複雑な仕事も上手に進めるコツ

---

<!-- _class: image-right -->
# <i class="fa-solid fa-brain"></i> AIはどうやって会話を「覚えている」の？

<div>

## コンテクストウィンドウの概念

- AIが直近のやり取りを一時的に保持する「作業机の広さ」
- この「広さ（トークン数）」には限界がある
- チャットの際、AIはこの範囲内の過去のやり取りを参照

## 限界を超えるとどうなる？
- 古い情報から順番に「忘れられて」いく
- 「あれ、さっき言ったことと違う…？」の原因に

## 例え話の再訪
- コンテクストウィンドウは「その日1日の出来事を書いた日記」
- 翌日には新しい日記になる（古い内容は参照されにくい）

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="作業机の上に書類が積まれていくイメージ">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-tools"></i> 「作業机」を上手に使うには？

<div>

## なぜ意識する必要があるのか？
- 長い会話や複雑な指示の場合、重要な前提条件が「忘れられる」
- 一貫性のない回答や、指示の誤解に繋がる

## 対策の基本

### ① 定期的な要約・再確認
「ここまでの話のポイントは〇〇ですよね？」とAIに確認

### ② 重要な情報の繰り返し
特に重要な前提や指示は、必要に応じて再度伝える

### ③ スレッドの分割（後述）
長いタスクは、小さなタスクに分けて新しい「作業机」で始める

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="整理された作業環境のイメージ">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-puzzle-piece"></i> 複雑な仕事は「分解」して頼む：API思考のすすめ

<div>

## API思考とは？
- システム開発で使われる考え方
- 大きな機能を、独立した小さな機能（API）の組み合わせで実現
- AIとの対話への応用：複雑な依頼を小さな指示に分解

## なぜAPI思考が有効なのか？
- 各指示が短く明確になり、コンテクストウィンドウの制限を受けにくい
- AIが各ステップに集中でき、精度が向上
- 途中で間違いがあっても、修正が容易
  （どの部品に問題があったか特定しやすい）

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="パズルのピースが組み合わさっていくイメージ">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-comments"></i> 実践！「スレッド設計」で会話を整理する

<div>

## スレッドとは？
- ChatGPTなどのチャットAIにおける、一連の会話のまとまり

## スレッドを分けるメリット
- **コンテクストの明確化**：各スレッドが独立した「作業机」
- **AIの集中力維持**：特定のタスクにAIの「意識」を向ける
- **過去の参照の容易さ**：後から特定の話題を見返しやすい
- **エラーの局所化**：あるスレッドでの混乱が他に影響しにくい

## どんな時に分ける？
- 話題が大きく変わるとき
- API思考で分解した各タスクを実行するとき
- 異なる役割をAIに期待するとき（例：ブレスト→添削）

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="整理された会話のイメージ">
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-check-double"></i> まとめ：記憶とタスク分解

<div class="columns">
<div class="column">

### AIの記憶の特性
- 短期記憶＝コンテクストウィンドウ
- 「作業机の広さ」の概念
- 情報の忘却パターン

</div>
<div class="column">

### 効率化のテクニック
- API思考でタスクを小分解
- スレッド設計で会話を整理
- 人間の仕事にも応用可能

</div>
</div>

<div class="alert info">
  <p>普段の業務をAIに頼むとしたら、どのように分解できそうですか？</p>
</div>

![bg right:30%](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)
---

<!-- _class: -->
# <i class="fa-solid fa-book"></i> 専門用語の解説

<div class="columns">
  <div class="column">
    <div class="term-definition">
      <h4>コンテクストウィンドウ</h4>
      <p>AIが会話中に参照できる「文脈の窓」。過去のやり取りをどれだけ覚えているかを決める要素。トークン数に制限があり、制限を超えると古い情報から忘れていく。</p>
    </div>
    
    <div class="term-definition">
      <h4>トークン</h4>
      <p>AIが文章を処理する最小単位。英語では単語に近いが、日本語では文字や短い単語のまとまりになる。「こんにちは」は複数のトークンに分割される。</p>
    </div>
  </div>
  
  <div class="column">
    <div class="term-definition">
      <h4>API思考</h4>
      <p>複雑な問題を小さな独立した部品に分解して解決する考え方。AIとの対話では、大きなタスクを小さな指示に分けることで、理解度と出力精度を高める手法。</p>
    </div>
    
    <div class="term-definition">
      <h4>スレッド設計</h4>
      <p>AIとの会話を目的別に整理する方法。各スレッドが独立した「作業机」となり、AIが特定のタスクに集中できる環境を作る。API思考の実装方法。</p>
    </div>
  </div>
</div>

---

<!-- _class: lead gradient-purple -->

<div class="animate fadeIn">
  # <i class="fa-solid fa-fingerprint"></i> セクション④
  ## AI活用に"あなたらしさ"をのせる
</div>

<div class="animate fadeIn delay-1">
  <p>自分の専門知識や経験をAIに与える重要性</p>
</div>

---

<!-- _class: image-bg -->
![bg brightness:0.4](https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

# <i class="fa-solid fa-fingerprint"></i> AI活用に「あなたらしさ」をのせる
## AIを"自分だけの"最強パートナーにする方法

---

<!-- _class: image-right -->
# <i class="fa-solid fa-equals"></i> AIはすごい！でも、みんなが同じ道具を持ったら…？

<div>

## 差別化の必要性

問いかけ：「最新のAIツールは誰でもアクセス可能です。もし、競合他社も全く同じようにAIを使っていたら、どうなるでしょうか？」

- 曖昧な指示を出すと、どこも同じAIを使っているため、出てくる結果も同じに
- 今の時点ではAIを使えば効率化できるが、その先は？

<span class="highlight">AIによる効率化は「当たり前」の時代へ。その先で差を生むのは何か？</span>

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="全員が同じハンマーを持っているイメージ">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-wand-magic-sparkles"></i> AIに「魂」を吹き込む：あなただけの"専門知識"と"現場感"

<div>

## AIが持っていないもの

- **あなたの長年の経験、専門知識、独自の視点** <i class="fa-solid fa-brain"></i>
  - 業界特有の暗黙知
  - 実務経験から得た直感
  - 独自の問題解決アプローチ

- **SoEasy社独自の文化、情報、プロセス** <i class="fa-solid fa-building"></i>
  - 社内の独自用語や文化
  - 顧客情報や過去の事例
  - 成功・失敗から学んだ教訓

## 「あなたらしさ」をAIに与えるとは
- 独自の情報をプロンプトを通じてAIに「教え込む」
- 汎用的な知識に、専門性と文脈を「掛け合わせる」

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="AIの頭脳に独自データをインストールするイメージ">
</div>

---

<!-- _class: image-right -->
# <i class="fa-solid fa-puzzle-piece"></i> 実践！「あなたらしさ」を活かすAI活用 3つの型

<div>

## ① <i class="fa-solid fa-comments"></i> 壁打ち（思考パートナー型）
- **基本**：AIに相談し、アイデアを深める
- **あなたらしさ**：自分の専門分野の課題、会社の戦略に関する悩みをAIにぶつけ、独自の視点や過去の経験を交えながら議論

## ② <i class="fa-solid fa-robot"></i> 代行（業務アシスタント型）
- **基本**：定型業務や資料作成をAIに任せる
- **あなたらしさ**：会社独自のフォーマット、業界特有の言い回し、ターゲット顧客に合わせたトーン＆マナーを指示

## ③ <i class="fa-solid fa-graduation-cap"></i> 教えてもらう（専属リサーチャー型）
- **基本**：AIに新しい情報や知識を教えてもらう
- **あなたらしさ**：業務関連のニッチな情報、競合他社の動き、課題解決に繋がる新技術について深掘り

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" class="large" alt="3つの異なるAI活用パターン">
</div>

---

<!-- _class: image-left -->
# <i class="fa-solid fa-lightbulb"></i> AIが「？」な時こそチャンス！あなたの"独自性"が光る瞬間

<div>

## 違和感は強みのサイン

AIとの対話で「何か違うな…」と感じるとき：
- それはAIの限界であると同時に、あなたの専門性や経験がAIを超えている証拠
- 「AIがピンとこないポイントは、その人の強みだったりする」

## 違和感を深掘りする価値
- なぜAIは理解できないのか？ <i class="fa-solid fa-magnifying-glass"></i>
- その部分に、あなたや会社の競争力の源泉が隠れている可能性
- AIにその「違い」を教え込むことで、よりパーソナルなAI活用へ

<span class="highlight">AIが理解できない領域こそ、あなたの価値が輝く場所</span>

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="large" alt="AIが首をかしげ、人間がひらめくイメージ">
</div>

---

<!-- _class: lead -->
# <i class="fa-solid fa-trophy"></i> まとめ：個性を活かすAI活用

![bg right:30%](https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

<div class="columns">
<div class="column">

### 差別化のポイント
- 汎用AIだけでは差がつかない
- 「あなたらしさ」が重要
  - 専門知識
  - 会社固有の文脈
  - 独自の視点

</div>
<div class="column">

### 活用パターン
- 3つの型に独自性を加える
  - 壁打ち（思考パートナー）
  - 代行（業務アシスタント）
  - 教えてもらう（リサーチャー）
- 「違和感」は強みのサイン

</div>
</div>

<div class="alert success">
  <p>あなたの「得意」や「経験」、AIとどう組み合わせますか？</p>
</div>

![bg right:30%](https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)