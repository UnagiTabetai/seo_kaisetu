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
---

<!-- _class: lead dark -->

## <i class="fa-solid fa-memory"></i> セクション③
## コンテクストウィンドウ／API思考

<div class="animate fadeIn delay-1">
  <p>AIの記憶の仕組みと複雑タスクの分解方法</p>
</div>

---

<!-- _class: lead -->

## <i class="fa-solid fa-memory"></i> AIの記憶とタスク分解術
## 長い会話も複雑な仕事も上手に進めるコツ

<div class="card info">
  <h3>AIの記憶と効率的なタスク管理</h3>
  <ul class="icon-list check">
    <li>コンテクストウィンドウの理解</li>
    <li>複雑なタスクの分解方法</li>
    <li>効率的な会話設計</li>
  </ul>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-brain"></i> AIはどうやって会話を「覚えている」の？

<div>

## コンテクストウィンドウの概念

- AIが直近のやり取りを一時的に保持する「作業机の広さ」
- この「広さ（トークン数）」には限界がある
- チャットの際、AIはこの範囲内の過去のやり取りを参照

## 限界を超えるとどうなる？
- 古い情報から順番に「忘れられて」いく
- 「あれ、さっき言ったことと違う…？」の原因に

</div>

<!-- インフォグラフィック要素 -->
<div class="card warning">
  <h3>コンテクストウィンドウの限界</h3>
  <ul class="icon-list arrow">
    <li>トークン数の制限（モデルによる）</li>
    <li>古い情報の忘却</li>
    <li>長い会話での一貫性低下</li>
  </ul>
</div>

---

## <i class="fa-solid fa-book"></i> AIの記憶を理解するための例え話

<div>

## 例え話で理解する

- コンテクストウィンドウは「その日1日の出来事を書いた日記」
- 翌日には新しい日記になる（古い内容は参照されにくい）
- 限られたページ数の日記帳（情報量の制限）

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card primary">
  <h3>コンテクストウィンドウの仕組み</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4>入力制限</h4>
      <p>一度に処理できるトークン数に上限がある</p>
    </div>
    <div class="timeline-item">
      <h4>FIFO方式</h4>
      <p>新しい情報が入ると古い情報から忘れられる</p>
    </div>
    <div class="timeline-item">
      <h4>重要度の偏り</h4>
      <p>最新の情報ほど参照されやすい</p>
    </div>
  </div>
</div>

---

<!-- _class: image-left -->

## <i class="fa-solid fa-tools"></i> 「作業机」を上手に使うには？

<div>

## なぜ意識する必要があるのか？
- 長い会話や複雑な指示の場合、重要な前提条件が「忘れられる」
- 一貫性のない回答や、指示の誤解に繋がる
- 効率的な対話のためには記憶の限界を理解する必要がある

</div>

<!-- インフォグラフィック要素 -->
<div class="card danger">
  <h3>コンテクスト管理の失敗例</h3>
  <ul class="icon-list arrow">
    <li>前提条件の忘却</li>
    <li>矛盾した回答</li>
    <li>指示の誤解</li>
    <li>会話の一貫性喪失</li>
  </ul>
</div>

---

## <i class="fa-solid fa-wrench"></i> コンテクスト管理の対策

<div>

## 対策の基本

### ① 定期的な要約・再確認
「ここまでの話のポイントは〇〇ですよね？」とAIに確認

### ② 重要な情報の繰り返し
特に重要な前提や指示は、必要に応じて再度伝える

### ③ スレッドの分割（後述）
長いタスクは、小さなタスクに分けて新しい「作業机」で始める

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card success">
  <h3>コンテクスト管理の3つの戦略</h3>
  <div class="columns">
    <div class="column">
      <h4>①要約・再確認</h4>
      <ul class="icon-list arrow">
        <li>定期的な中間まとめ</li>
        <li>重要ポイントの確認</li>
      </ul>
    </div>
    <div class="column">
      <h4>②重要情報の繰り返し</h4>
      <ul class="icon-list arrow">
        <li>キー情報の再提示</li>
        <li>前提条件の再確認</li>
      </ul>
    </div>
    <div class="column">
      <h4>③スレッド分割</h4>
      <ul class="icon-list arrow">
        <li>タスク単位での分離</li>
        <li>新しい文脈の作成</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-puzzle-piece"></i> 複雑な仕事は「分解」して頼む：API思考のすすめ

<div>

## API思考とは？
- システム開発で使われる考え方
- 大きな機能を、独立した小さな機能（API）の組み合わせで実現
- AIとの対話への応用：複雑な依頼を小さな指示に分解

</div>

<!-- インフォグラフィック要素 -->
<div class="card info">
  <h3>API思考の基本概念</h3>
  <ul class="icon-list check">
    <li>モジュール化：機能の分割</li>
    <li>独立性：各部分が自己完結</li>
    <li>組み合わせ：部品の連携</li>
    <li>再利用性：共通部分の活用</li>
  </ul>
</div>

---

## <i class="fa-solid fa-chart-line"></i> API思考の効果と活用法

<div>

## なぜAPI思考が有効なのか？
- 各指示が短く明確になり、コンテクストウィンドウの制限を受けにくい
- AIが各ステップに集中でき、精度が向上
- 途中で間違いがあっても、修正が容易
  （どの部品に問題があったか特定しやすい）

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card warning">
  <h3>API思考のメリット</h3>
  <ul class="icon-list star">
    <li><strong>精度向上</strong>：各ステップに集中できるため出力の質が向上</li>
    <li><strong>デバッグ容易性</strong>：問題の切り分けと特定が容易</li>
    <li><strong>再利用性</strong>：成功したプロンプトパターンの再活用</li>
    <li><strong>コンテクスト効率化</strong>：限られた記憶容量の有効活用</li>
  </ul>
</div>

---

<!-- _class: image-left -->

## <i class="fa-solid fa-comments"></i> 実践！「スレッド設計」で会話を整理する

<div>

## スレッドとは？
- ChatGPTなどのチャットAIにおける、一連の会話のまとまり
- 独立した会話の単位として管理される

## スレッドを分けるメリット
- **コンテクストの明確化**：各スレッドが独立した「作業机」
- **AIの集中力維持**：特定のタスクにAIの「意識」を向ける
- **過去の参照の容易さ**：後から特定の話題を見返しやすい
- **エラーの局所化**：あるスレッドでの混乱が他に影響しにくい

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>スレッド分割のメリット</h3>
  <ul class="icon-list star">
    <li>タスクごとの文脈整理</li>
    <li>会話の混乱防止</li>
    <li>過去の対話の参照性向上</li>
    <li>複数の並行タスク管理</li>
  </ul>
</div>

---

## <i class="fa-solid fa-sitemap"></i> スレッド設計の実践ポイント

<div>

## どんな時に分ける？
- 話題が大きく変わるとき
- API思考で分解した各タスクを実行するとき
- 異なる役割をAIに期待するとき（例：ブレスト→添削）
- 長期的なプロジェクトの段階ごと

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card info">
  <h3>効果的なスレッド設計</h3>
  <div class="columns">
    <div class="column">
      <h4>分割タイミング</h4>
      <ul class="icon-list check">
        <li>話題の大きな転換時</li>
        <li>新しいタスク開始時</li>
        <li>役割の切り替え時</li>
      </ul>
    </div>
    <div class="column">
      <h4>スレッド管理のコツ</h4>
      <ul class="icon-list check">
        <li>明確な命名</li>
        <li>目的の明示</li>
        <li>関連スレッドの参照</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- _class: lead -->

## <i class="fa-solid fa-check-double"></i> まとめ：記憶とタスク分解

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

<!-- 背景画像を削除 -->

---

<!-- _class: -->

## <i class="fa-solid fa-book"></i> 専門用語の解説

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