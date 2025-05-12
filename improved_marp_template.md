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
    font-size: 28px;
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
  
  /* 見出しスタイル */
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.5em;
    border-bottom: 3px solid var(--color-primary);
/* リストスタイル */
  ul, ol {
    padding-left: 1.2em;
    margin-top: 0.8em;
    margin-bottom: 0.8em;
  }
  
  li {
    margin-bottom: 0.5em;
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
    gap: 2rem;
    margin: 1em 0;
  }
  
  .column {
    flex: 1;
    min-width: 0; /* テキストオーバーフローを防止 */
  }
  
  /* 不均等なカラム */
  .columns.ratio-1-2 .column:first-child {
    flex: 1;
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

-->
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
    line-height: 1.4;
  }
  
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    background-color: rgba(0,0,0,0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
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
    gap: 2rem;
    align-items: center;
  }
  
  .image-left {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
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
    padding-bottom: 0.2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-secondary);
    margin-top: 0.2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-tertiary);
    margin-top: 0.8em;
    margin-bottom: 0.5em;
  }
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

<!-- テンプレート2: 見出し1（グラデーション背景） -->
<!-- _class: lead gradient-blue -->

<div class="animate fadeIn">
  # <i class="fa-solid fa-rocket"></i> セクション1
  ## AIとはどんな"人"か？
</div>

<div class="animate fadeIn delay-1">
  <p>AIの知識の深さと人間とは異なる「クセ」を理解する</p>
</div>

---

<!-- テンプレート3: 見出し2（ダークモード） -->
<!-- _class: lead dark -->

<div class="animate slideInLeft">
  # <i class="fa-solid fa-comment-dots"></i> セクション2
  ## プロンプト設計＝マネジメント
</div>

<div class="animate fadeIn delay-1">
  <p>AIへの指示出しは「新人マネジメント」と同じ構造</p>
</div>

---

<!-- テンプレート4: 見出し3（画像背景） -->
<!-- _class: lead image-bg -->
![bg brightness:0.3](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)

<div class="animate zoomIn">
  # <i class="fa-solid fa-memory"></i> セクション3
  ## コンテクストウィンドウ／API思考
</div>

<div class="animate fadeIn delay-1">
  <p>AIの記憶の仕組みと複雑タスクの分解方法を理解する</p>
</div>

---

<!-- テンプレート5: 比較スライド -->
<!-- _class: -->

# <i class="fa-solid fa-scale-balanced"></i> AIと人間の比較

<table>
  <thead>
    <tr>
      <th>特性</th>
      <th>AI</th>
      <th>人間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>知識量</td>
      <td>膨大（インターネット上の情報）</td>
      <td>限定的（個人の経験に基づく）</td>
    </tr>
    <tr>
      <td>処理速度</td>
      <td>非常に高速</td>
      <td>比較的遅い</td>
    </tr>
    <tr>
      <td>記憶の持続性</td>
      <td>セッション内のみ（短期的）</td>
      <td>長期的（ただし忘却あり）</td>
    </tr>
    <tr>
      <td>創造性</td>
      <td>既存データの組み合わせ</td>
      <td>真の創造性と直感</td>
    </tr>
    <tr>
      <td>文脈理解</td>
      <td>限定的（明示的な情報のみ）</td>
      <td>暗黙的な理解も可能</td>
    </tr>
  </tbody>
</table>

<div class="footnote">
  ※ AIの特性は使用するモデルやバージョンによって異なります
</div>

---

<!-- テンプレート6: コンテンツスライド（画像右） -->
<!-- _class: image-right -->

# <i class="fa-solid fa-graduation-cap"></i> AIは"超高学歴の天才"

<div>

## 圧倒的な知識量
- インターネット上の膨大な文章を読破
  - 書籍・論文・ブログ・マニュアル等
- 世界トップレベルの頭脳集団による開発・学習
- あらゆる知識を瞬時に引き出せる能力
  - 古典から最新技術まで幅広くカバー

<div class="alert info">
  <p>AIの知識は学習データの時点で止まっています。最新情報は人間が補完する必要があります。</p>
</div>

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" class="large" alt="積み上げられた大量の本">
</div>

---

<!-- テンプレート7: コンテンツスライド（画像左） -->
<!-- _class: image-left -->

# <i class="fa-solid fa-exclamation-triangle"></i> AIの「大きなクセ」

<div>

## AIの3つの特徴的なクセ
- <span class="highlight">記憶がない</span>：
  「あれ、さっきの話なんだっけ？」
  （チャットが終わると忘却）
- <span class="highlight">空気は読まない</span>：
  「え、そういう意味じゃない？」
  （行間・顔色・雰囲気はスルー）
- <span class="highlight">曖昧さに弱い</span>：
  「具体的に言ってくれないと…」
  （文面が全て）

</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="large" alt="困った表情のロボット">
</div>

---

<!-- テンプレート8: 専門用語解説スライド -->
<!-- _class: -->

# <i class="fa-solid fa-book"></i> 専門用語の解説

<div class="columns">
  <div class="column">
    <div class="term-definition">
      <h4>コンテクストウィンドウ</h4>
      <p>AIが会話中に参照できる「文脈の窓」のこと。過去のやり取りをどれだけ覚えているかを決める要素。トークン数（単語や記号の数）に制限があり、制限を超えると古い情報から忘れていく。</p>
    </div>
    
    <div class="term-definition">
      <h4>トークン</h4>
      <p>AIが文章を処理する際の最小単位。英語では単語に近いが、日本語では文字や短い単語のまとまりになる。「こんにちは」は複数のトークンに分割される。</p>
    </div>
  </div>
  
  <div class="column">
    <div class="term-definition">
      <h4>プロンプトエンジニアリング</h4>
      <p>AIに最適な指示を出すための技術や方法論。効果的な指示の書き方、構造化、テンプレート化などを含む。AIの能力を最大限に引き出すための重要なスキル。</p>
    </div>
    
    <div class="term-definition">
      <h4>ハルシネーション</h4>
      <p>AIが実際には存在しない情報を「事実」として提示してしまう現象。自信を持って間違った情報を述べることがあるため、重要な情報は必ず検証が必要。</p>
    </div>
  </div>
</div>

---

<!-- テンプレート9: ワークショップスライド -->
<!-- _class: -->

# <i class="fa-solid fa-hands-helping"></i> ワークショップ：プロンプトをブラッシュアップしよう

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
    <li>改善したプロンプトを書き出す</li>
  </ol>
  
  <p>グループで話し合い、最も効果的だと思うプロンプトを選んでください。</p>
</div>

<div class="alert warning">
  <p>時間は10分です。終了5分前にアナウンスします。</p>
</div>

---

<!-- テンプレート10: ケーススタディスライド -->
<!-- _class: -->

# <i class="fa-solid fa-microscope"></i> ケーススタディ：AI活用成功事例

<div class="case-study">
  <h3>マーケティング部門でのAI活用事例</h3>
  
  <div class="timeline">
    <div class="timeline-item">
      <h4>課題の特定</h4>
      <p>ターゲット顧客ごとにパーソナライズされたメールマーケティングの文面作成に多大な時間がかかっていた。</p>
    </div>
    
    <div class="timeline-item">
      <h4>AI活用アプローチ</h4>
      <p>顧客データと過去の成功事例をAIに学習させ、顧客セグメントごとのテンプレートを生成。人間がレビューと微調整を行う体制を構築。</p>
    </div>
    
    <div class="timeline-item">
      <h4>結果</h4>
      <p>文面作成時間が80%削減。オープン率が15%向上。クリック率が23%向上。マーケターは戦略立案により多くの時間を割けるようになった。</p>
    </div>
  </div>
  
  <div class="alert success">
    <p>成功の鍵：AIと人間の役割分担を明確にし、AIの出力を常に人間がレビューする体制を整えたこと。</p>
  </div>
</div>

---

<!-- テンプレート11: まとめスライド -->
<!-- _class: lead gradient-purple -->

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

<!-- テンプレート12: Q&Aスライド -->
<!-- _class: lead -->

# <i class="fa-solid fa-question-circle"></i> ご質問・ディスカッション

<div class="card">
  <p>本日の内容について、ご質問やご意見をお聞かせください。</p>
  <p>また、明日からの業務でどのようにAIを活用していきたいか、ぜひシェアしてください。</p>
</div>

<div class="img-center">
  <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" class="medium" alt="質問する人々">
</div>