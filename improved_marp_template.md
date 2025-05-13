---
marp: true
theme: improved-custom
paginate: true
header: "AI活用研修"
footer: "© 2025 SoEasy社"
size: 16:9
style: |
  /* スライドサイズのデバッグ表示 */
  section::before {
    content: "スライドサイズ: 16:9 (" attr(data-width) "x" attr(data-height) "px)";
    position: fixed;
    top: 5px;
    right: 5px;
    background: rgba(0,0,0,0.5);
    color: white;
    font-size: 12px;
    padding: 3px 6px;
    border-radius: 3px;
    z-index: 1000;
  }
  
  /* コンテンツオーバーフロー検出 */
  section {
    position: relative;
    overflow: visible !important; /* オーバーフローを見えるようにする */
  }
  
  section.overflow-detected::after {
    content: "⚠️ コンテンツオーバーフロー";
    position: fixed;
    bottom: 5px;
    right: 5px;
    background: rgba(255,0,0,0.7);
    color: white;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 3px;
    z-index: 1000;
  }
  
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

  /*=============================================
   * 1. 基本設定
   *=============================================*/
  
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
    --gradient-sunset: linear-gradient(135deg, #f59e0b, #ef4444);
    --gradient-mint: linear-gradient(135deg, #10b981, #0891b2);
    
    /* シャドウ */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* アニメーション時間 */
    --transition-fast: 0.2s;
    --transition-normal: 0.3s;
    --transition-slow: 0.5s;
    
    /* 角丸 */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
  }

  /* 基本スタイル */
  section {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 24px;
    padding: 40px;
    background-color: var(--color-background-light);
    color: var(--color-text-dark);
    line-height: 1.6;
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
  
  section.gradient-sunset {
    background: var(--gradient-sunset);
    color: var(--color-text-light);
  }
  
  section.gradient-mint {
    background: var(--gradient-mint);
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
    border-radius: var(--radius-md);
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

  /* アイコンスタイル */
  .fa-solid, .fa-regular, .fa-brands {
    color: var(--color-primary);
    margin-right: 0.2em;
  }

  /* 中央揃えのスライド */
  section.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
    border-radius: var(--radius-md);
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

  /*=============================================
   * 2. レイアウトテンプレート
   *=============================================*/
  
  /* 2カラムレイアウト */
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

  /* 3カラムレイアウト（新規追加） */
  .columns-3 {
    display: flex;
    gap: 1.2rem;
    margin: 0.8em 0;
  }
  
  .columns-3 .column {
    flex: 1;
    min-width: 0;
  }
  
  /* 不均等な3カラム（新規追加） */
  .columns-3.ratio-1-2-1 .column:nth-child(1) {
    flex: 1;
  }
  
  .columns-3.ratio-1-2-1 .column:nth-child(2) {
    flex: 2;
  }
  
  .columns-3.ratio-1-2-1 .column:nth-child(3) {
    flex: 1;
  }
  
  .columns-3.ratio-2-1-1 .column:nth-child(1) {
    flex: 2;
  }
  
  .columns-3.ratio-2-1-1 .column:nth-child(2),
  .columns-3.ratio-2-1-1 .column:nth-child(3) {
    flex: 1;
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

  /* カード式レイアウト（新規追加） */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 1.2em 0;
  }
  
  .card-grid.grid-3 {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }
  
  .card-grid.grid-4 {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  /* ヒーローセクションレイアウト（新規追加） */
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80%;
    text-align: center;
    padding: 2em;
  }
  
  .hero-section h1 {
    font-size: 2.8rem;
    margin-bottom: 0.3em;
    border: none;
  }
  
  .hero-section p {
    font-size: 1.3rem;
    max-width: 80%;
    margin: 0 auto;
  }

  /* 特徴紹介レイアウト（新規追加） */
  .feature-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1em 0;
  }
  
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.8em;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal);
  }
  
  .feature-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .feature-item i {
    font-size: 2rem;
    margin-bottom: 0.3em;
  }
  
  .feature-item h3 {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
  
  .feature-item p {
    margin: 0;
    font-size: 0.9em;
  }

  /* ジグザグレイアウト（新規追加） */
  .zigzag-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1em 0;
  }
  
  .zigzag-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
  }
  
  .zigzag-item:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    direction: rtl;
  }
  
  .zigzag-item:nth-child(even) .zigzag-content {
    direction: ltr;
  }
  
  .zigzag-content {
    padding: 0.5em;
  }
  
  .zigzag-image img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }

  /*=============================================
   * 3. コンポーネント
   *=============================================*/
  
  /* カード要素 */
  .card {
    background-color: white;
    border-radius: var(--radius-md);
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

  /* 専門用語解説スタイル */
  .term-definition {
    background-color: var(--color-background-alt);
    border-radius: var(--radius-md);
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
    border-radius: var(--radius-sm);
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
    border-radius: var(--radius-lg);
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
    border-radius: var(--radius-sm);
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
    border-radius: var(--radius-sm);
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
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1em;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -2em;
    top: 1.2em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--color-primary);
    z-index: 1;
  }
  
  .timeline-item h4 {
    margin: 0 0 0.5em 0;
    color: var(--color-primary);
    font-weight: 600;
  }
  
  /* ダークモードでのタイムライン */
  .dark .timeline-item {
    background-color: rgba(30, 41, 59, 0.9);
  }
  
  /* 背景画像スライド用のタイムライン調整 */
  .image-bg .timeline-item {
    background-color: rgba(255, 255, 255, 0.85);
    color: var(--color-text-dark);
  }
  
  .image-bg .timeline-item h4 {
    color: var(--color-primary);
  }

  /* 実例・ケーススタディ用スタイル */
  .case-study {
    background-color: white;
    border-radius: var(--radius-md);
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
    border-radius: var(--radius-sm);
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
    border-radius: var(--radius-md);
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

  /* プライスカード（新規追加） */
  .price-card {
    background-color: white;
    border-radius: var(--radius-md);
    padding: 1.5em;
    margin: 1em 0;
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    border-top: 4px solid var(--color-primary);
  }
  
  .price-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .price-card .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0.5em 0;
  }
  
  .price-card .period {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    margin-bottom: 1em;
  }
  
  .price-card .features {
    list-style: none;
    padding: 0;
    margin: 1.5em 0;
    text-align: left;
  }
  
  .price-card .features li {
    padding: 0.5em 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  
  .price-card .features li:last-child {
    border-bottom: none;
  }
  
  /* テスティモニアルカード（新規追加） */
  .testimonial {
    background-color: white;
    border-radius: var(--radius-md);
    padding: 1.5em;
    margin: 1em 0;
    box-shadow: var(--shadow-md);
    position: relative;
  }
  
  .testimonial::before {
    content: '\f10d'; /* 引用符アイコン */
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    top: -0.5em;
    left: 0.5em;
    font-size: 2em;
    color: rgba(0,0,0,0.05);
  }
  
  .testimonial .quote {
    font-style: italic;
    margin-bottom: 1em;
  }
  
  .testimonial .author {
    display: flex;
    align-items: center;
  }
  
  .testimonial .author img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    margin-right: 1em;
  }
  
  .testimonial .author-info {
    display: flex;
    flex-direction: column;
  }
  
  .testimonial .author-name {
    font-weight: 700;
    color: var(--color-primary);
  }
  
  .testimonial .author-title {
    font-size: 0.9em;
    color: var(--color-text-muted);
  }

  /*=============================================
   * 4. ユーティリティ
   *=============================================*/
  
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
---

<!--
==============================================
テンプレートの使用方法
==============================================

このテンプレートには、様々なレイアウトとスタイルが含まれています。
以下に、主要な要素の使用方法を示します。

1. スライドタイプ
   - 通常スライド: <!-- _class: -->
   - 中央揃えスライド: <!-- _class: lead -->
   - 画像右配置: <!-- _class: image-right -->
   - 画像左配置: <!-- _class: image-left -->
   - 背景画像: <!-- _class: image-bg -->
   - ダークモード: <!-- _class: dark -->
   - グラデーション背景: <!-- _class: gradient-blue --> または <!-- _class: gradient-purple -->
   - 新規追加: <!-- _class: gradient-sunset --> または <!-- _class: gradient-mint -->

2. 背景画像の設定
   ![bg brightness:0.6](画像URL)
   
3. アニメーション要素
   <div class="animate fadeIn">アニメーションするコンテンツ</div>
   
   アニメーションクラス例:
   - fadeIn: フェードイン
   - slideInLeft: 左からスライドイン
   - slideInRight: 右からスライドイン
   - zoomIn: ズームイン
   
   遅延を追加するには:
   <div class="animate fadeIn delay-1">少し遅れて表示</div>
   <div class="animate fadeIn delay-2">さらに遅れて表示</div>
   <div class="animate fadeIn delay-3">最も遅れて表示</div>

4. 専門用語の解説
   <div class="term-definition">
     <h4>用語名</h4>
     <p>用語の詳細な説明...</p>
   </div>

5. ワークショップセクション
   <div class="workshop">
     <h3>ワークのタイトル</h3>
     <p>ワークの説明...</p>
     <ol class="workshop-steps">
       <li>ステップ1の説明</li>
       <li>ステップ2の説明</li>
       <li>ステップ3の説明</li>
     </ol>
   </div>

6. ケーススタディ
   <div class="case-study">
     <h3>ケーススタディのタイトル</h3>
     <p>ケーススタディの詳細...</p>
   </div>

7. アイコン付きリスト
   <ul class="icon-list check">
     <li>チェックマーク付きの項目</li>
     <li>別のチェックマーク付き項目</li>
   </ul>

8. 注意喚起ボックス
   <div class="alert info">
     <p>情報メッセージ</p>
   </div>
   <div class="alert warning">
     <p>警告メッセージ</p>
   </div>
   <div class="alert success">
     <p>成功メッセージ</p>
   </div>

9. カード要素
   <div class="card">
     <h3>カードタイトル</h3>
     <p>カードの内容...</p>
   </div>

10. タイムライン
    <div class="timeline">
      <div class="timeline-item">
        <h4>ステップ1</h4>
        <p>ステップ1の詳細...</p>
      </div>
      <div class="timeline-item">
        <h4>ステップ2</h4>
        <p>ステップ2の詳細...</p>
      </div>
    </div>

11. 画像サイズと配置
    <div class="img-center">
      <img src="画像URL" class="medium" alt="画像の説明">
    </div>

12. テキスト強調
    <span class="highlight">強調テキスト</span>
    <span class="highlight-success">成功強調</span>
    <span class="highlight-danger">警告強調</span>

13. インタラクティブ要素
    <div class="interactive">クリックできる要素</div>

14. 新規追加: 3カラムレイアウト
    <div class="columns-3">
      <div class="column">カラム1の内容</div>
      <div class="column">カラム2の内容</div>
      <div class="column">カラム3の内容</div>
    </div>

15. 新規追加: カード式グリッドレイアウト
    <div class="card-grid">
      <div class="card">カード1</div>
      <div class="card">カード2</div>
      <div class="card">カード3</div>
      <div class="card">カード4</div>
    </div>

16. 新規追加: ヒーローセクション
    <div class="hero-section">
      <h1>大きな見出し</h1>
      <p>説明テキスト</p>
    </div>

17. 新規追加: 特徴紹介レイアウト
    <div class="feature-section">
      <div class="feature-item">
        <i class="fa-solid fa-rocket"></i>
        <h3>特徴1</h3>
        <p>特徴1の説明</p>
      </div>
      <div class="feature-item">
        <i class="fa-solid fa-gear"></i>
        <h3>特徴2</h3>
        <p>特徴2の説明</p>
      </div>
    </div>

18. 新規追加: ジグザグレイアウト
    <div class="zigzag-section">
      <div class="zigzag-item">
        <div class="zigzag-content">
          <h3>セクション1</h3>
          <p>セクション1の説明</p>
        </div>
        <div class="zigzag-image">
          <img src="画像URL" alt="画像の説明">
        </div>
      </div>
      <div class="zigzag-item">
        <div class="zigzag-content">
          <h3>セクション2</h3>
          <p>セクション2の説明</p>
        </div>
        <div class="zigzag-image">
          <img src="画像URL" alt="画像の説明">
        </div>
      </div>
    </div>

19. 新規追加: プライスカード
    <div class="price-card">
      <h3>スタンダードプラン</h3>
      <div class="price">¥5,000</div>
      <div class="period">月額</div>
      <ul class="features">
        <li>機能1</li>
        <li>機能2</li>
        <li>機能3</li>
      </ul>
    </div>

20. 新規追加: テスティモニアル
    <div class="testimonial">
      <div class="quote">素晴らしいサービスでした。</div>
      <div class="author">
        <img src="画像URL" alt="ユーザーアイコン">
        <div class="author-info">
          <div class="author-name">山田太郎</div>
          <div class="author-title">株式会社〇〇 CEO</div>
        </div>
      </div>
    </div>
-->

<!-- テンプレート1: 表紙スライド -->
<!-- _class: lead image-bg -->
![bg brightness:0.4](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)

<div class="animate fadeIn">
  # <i class="fa-solid fa-robot"></i> AI活用研修
  ## チームメンバーとしてのAIをマネジメントする <i class="fa-solid fa-users-gear"></i>
</div>

<div class="animate fadeIn delay-1">
  ### 2025年5月12日
</div>

<div class="animate fadeIn delay-2">
  <p>SoEasy社 人材開発部</p>
</div>

---

<!-- テンプレート2: 3カラムレイアウト（新規追加） -->
<!-- _class: -->

# <i class="fa-solid fa-layer-group"></i> AIの3つの活用レベル

<div class="columns-3">
  <div class="column">
    <div class="card">
      <h3><i class="fa-solid fa-baby"></i> 初級レベル</h3>
      <p>単純な質問応答や情報検索</p>
      <ul>
        <li>質問に対する回答を得る</li>
        <li>簡単な文章の作成</li>
        <li>アイデアのブレインストーミング</li>
      </ul>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3><i class="fa-solid fa-user"></i> 中級レベル</h3>
      <p>特定の業務タスクの効率化</p>
      <ul>
        <li>データ分析と要約</li>
        <li>コンテンツ作成の補助</li>
        <li>プロセスの自動化</li>
      </ul>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3><i class="fa-solid fa-crown"></i> 上級レベル</h3>
      <p>戦略的な意思決定支援</p>
      <ul>
        <li>複雑な問題解決</li>
        <li>業務フロー全体の最適化</li>
        <li>創造的なコラボレーション</li>
      </ul>
    </div>
  </div>
</div>

<div class="footnote">
  ※ 各レベルは段階的に習得することをお勧めします
</div>

---

<!-- テンプレート3: カード式グリッドレイアウト（新規追加） -->
<!-- _class: -->

# <i class="fa-solid fa-puzzle-piece"></i> AIとの効果的な協業パターン

<div class="card-grid grid-4">
  <div class="card">
    <h3><i class="fa-solid fa-comments"></i> 対話型</h3>
    <p>AIとの会話を通じてアイデアを発展させる</p>
  </div>
  
  <div class="card">
    <h3><i class="fa-solid fa-pen"></i> 編集型</h3>
    <p>AIが生成した内容を人間が編集・改善する</p>
  </div>
  
  <div class="card">
    <h3><i class="fa-solid fa-code-branch"></i> 分岐型</h3>
    <p>複数の選択肢をAIに生成させて比較検討する</p>
  </div>
  
  <div class="card">
    <h3><i class="fa-solid fa-rotate"></i> 反復型</h3>
    <p>AIの出力を繰り返し改善していく</p>
  </div>
</div>

<div class="alert info">
  <p>これらのパターンを状況に応じて組み合わせることで、より効果的な結果が得られます。</p>
</div>

---

<!-- テンプレート4: ヒーローセクション（新規追加） -->
<!-- _class: gradient-sunset -->

<div class="hero-section">
  <h1><i class="fa-solid fa-lightbulb"></i> AIの可能性を解き放つ</h1>
  <p>テクノロジーと人間の創造性が融合する未来へ</p>
</div>

---

<!-- テンプレート5: 特徴紹介レイアウト（新規追加） -->
<!-- _class: -->

# <i class="fa-solid fa-star"></i> AIがもたらす4つのビジネスメリット

<div class="feature-section">
  <div class="feature-item">
    <i class="fa-solid fa-gauge-high"></i>
    <h3>生産性向上</h3>
    <p>ルーティンタスクの自動化で高価値業務に集中</p>
  </div>
  
  <div class="feature-item">
    <i class="fa-solid fa-lightbulb"></i>
    <h3>創造性の拡張</h3>
    <p>新しいアイデアと視点でイノベーションを促進</p>
  </div>
  
  <div class="feature-item">
    <i class="fa-solid fa-chart-line"></i>
    <h3>意思決定の質向上</h3>
    <p>データ分析と洞察で情報に基づく判断を実現</p>
  </div>
  
  <div class="feature-item">
    <i class="fa-solid fa-users"></i>
    <h3>顧客体験の向上</h3>
    <p>パーソナライズと迅速対応で満足度アップ</p>
  </div>
</div>

---

<!-- テンプレート6: ジグザグレイアウト（新規追加） -->
<!-- _class: -->

# <i class="fa-solid fa-road"></i> AI導入のロードマップ

<div class="zigzag-section">
  <div class="zigzag-item">
    <div class="zigzag-content">
      <h3><i class="fa-solid fa-1"></i> ニーズの特定</h3>
      <p>組織内の課題を洗い出し、AIの適用可能性を評価します。</p>
    </div>
    <div class="zigzag-image">
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="ニーズの特定">
    </div>
  </div>
  
  <div class="zigzag-item">
    <div class="zigzag-content">
      <h3><i class="fa-solid fa-2"></i> パイロットプロジェクト</h3>
      <p>小規模な取り組みからスタートし、効果を検証します。</p>
    </div>
    <div class="zigzag-image">
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="パイロットプロジェクト">
    </div>
  </div>
  
  <div class="zigzag-item">
    <div class="zigzag-content">
      <h3><i class="fa-solid fa-3"></i> 全社展開</h3>
      <p>AIリテラシーを高め、継続的な改善サイクルを確立します。</p>
    </div>
    <div class="zigzag-image">
      <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="全社展開">
    </div>
  </div>
</div>

---

<!-- テンプレート7: プライスカードとテスティモニアル（新規追加） -->
<!-- _class: -->

# <i class="fa-solid fa-hand-holding-dollar"></i> AI活用支援プログラム

<div class="columns">
  <div class="column">
    <div class="price-card">
      <h3>スタンダードプラン</h3>
      <div class="price">¥50,000</div>
      <div class="period">月額</div>
      <ul class="features">
        <li>基本的なAIツール導入支援</li>
        <li>月1回のコンサルティング</li>
        <li>オンライントレーニング（5名まで）</li>
        <li>メールサポート</li>
      </ul>
    </div>
  </div>
  
  <div class="column">
    <div class="testimonial">
      <div class="quote">AI活用支援プログラムを導入してから、社内のルーティン業務が大幅に効率化され、創造的な業務に時間を割けるようになりました。特にマーケティング部門では、コンテンツ制作の時間が半減しました。</div>
      <div class="author">
        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="ユーザーアイコン">
        <div class="author-info">
          <div class="author-name">佐藤美咲</div>
          <div class="author-title">株式会社クリエイト CMO</div>
        </div>
      </div>
    </div>
  </div>
</div>

---

<!-- テンプレート8: まとめスライド -->
<!-- _class: lead gradient-mint -->

# <i class="fa-solid fa-check-double"></i> 本日のまとめ

<div class="animate fadeIn">
  <ul class="icon-list check">
    <li>AIは「高学歴だが現場経験ゼロの新人」と捉えると理解しやすい</li>
    <li>プロンプト設計は「新人マネジメント」と同じ構造を持つ</li>
    <li>AIの記憶の仕組み（コンテクストウィンドウ）を理解することが重要</li>
    <li>複雑なタスクはAPI思考で分解すると効率的</li>
    <li>AIに「あなたらしさ」を与えることで差別化が可能</li>
  </ul>
</div>

<div class="animate fadeIn delay-1">
  <p class="highlight-success">AIは「代替する」ものではなく「拡張する」ツールです</p>
</div>

---

<!-- テンプレート9: Q&Aスライド -->
<!-- _class: lead -->

# <i class="fa-solid fa-question-circle"></i> ご質問・ディスカッション

<div class="card">
  <p>本日の内容について、ご質問やご意見をお聞かせください。</p>
  <p>また、明日からの業務でどのようにAIを活用していきたいか、ぜひシェアしてください。</p>
</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" class="medium" alt="質問する人々">
</div>
