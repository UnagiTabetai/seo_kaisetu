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

<!-- _class: lead gradient-purple -->

## <i class="fa-solid fa-fingerprint"></i> セクション④
## AI活用に"あなたらしさ"をのせる

<div class="animate fadeIn delay-1">
  <p>自分の専門知識や経験をAIに与える重要性</p>
</div>

---

<!-- _class: lead gradient-purple -->

## <i class="fa-solid fa-fingerprint"></i> AI活用に「あなたらしさ」をのせる
## AIを"自分だけの"最強パートナーにする方法

<div class="card info">
  <h3>AIパーソナライズの重要性</h3>
  <ul class="icon-list star">
    <li>汎用AIだけでは差別化できない時代</li>
    <li>個人の専門知識と経験が価値を生む</li>
    <li>独自の視点がAIの出力を差別化する</li>
  </ul>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-equals"></i> AIはすごい！でも、みんなが同じ道具を持ったら…？

<div>

## 差別化の必要性

問いかけ：「最新のAIツールは誰でもアクセス可能です。もし、競合他社も全く同じようにAIを使っていたら、どうなるでしょうか？」

- 曖昧な指示を出すと、どこも同じAIを使っているため、出てくる結果も同じに
- 今の時点ではAIを使えば効率化できるが、その先は？

<span class="highlight">AIによる効率化は「当たり前」の時代へ。その先で差を生むのは何か？</span>

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card warning">
  <h3>AI活用の差別化要因</h3>
  <div class="columns">
    <div class="column">
      <h4>汎用的な活用</h4>
      <ul class="icon-list arrow">
        <li>一般的な質問</li>
        <li>基本的な文書作成</li>
        <li>標準的な情報検索</li>
      </ul>
    </div>
    <div class="column">
      <h4>差別化された活用</h4>
      <ul class="icon-list check">
        <li>専門知識の注入</li>
        <li>独自データの活用</li>
        <li>業界特化のプロンプト</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- _class: image-left -->

## <i class="fa-solid fa-wand-magic-sparkles"></i> AIに「魂」を吹き込む：あなただけの"専門知識"と"現場感"

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

</div>

<!-- インフォグラフィック要素 -->
<div class="card warning">
  <h3>AIの知識の限界</h3>
  <ul class="icon-list arrow">
    <li>学習データの期限（カットオフ）</li>
    <li>非公開情報へのアクセス不可</li>
    <li>組織固有の知識の欠如</li>
    <li>実務経験からの学習不足</li>
  </ul>
</div>

---

## <i class="fa-solid fa-fingerprint"></i> 「あなたらしさ」をAIに与える方法

<div>

## 「あなたらしさ」をAIに与えるとは
- 独自の情報をプロンプトを通じてAIに「教え込む」
- 汎用的な知識に、専門性と文脈を「掛け合わせる」
- あなたの視点や価値観をAIの出力に反映させる

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card success">
  <h3>AIに与えるべき独自価値</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4>専門知識</h4>
      <p>業界特有の暗黙知、専門用語、ノウハウ</p>
    </div>
    <div class="timeline-item">
      <h4>経験則</h4>
      <p>実務から得た直感、成功パターン、失敗教訓</p>
    </div>
    <div class="timeline-item">
      <h4>組織文化</h4>
      <p>社内の独自用語、価値観、コミュニケーションスタイル</p>
    </div>
    <div class="timeline-item">
      <h4>顧客理解</h4>
      <p>特定顧客層の嗜好、ニーズ、行動パターン</p>
    </div>
  </div>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-puzzle-piece"></i> 実践！「あなたらしさ」を活かすAI活用パターン

<div>

## AI活用の3つの型

- それぞれの型に「あなたらしさ」を加えることで差別化
- 複数の型を組み合わせることも効果的
- 自分の強みを活かせる型を選ぶ

</div>

<!-- インフォグラフィック要素 -->
<div class="card primary">
  <h3>AI活用の3つのパターン比較</h3>
  <div class="columns">
    <div class="column">
      <h4>①壁打ち型</h4>
      <ul class="icon-list star">
        <li>アイデア発想</li>
        <li>思考整理</li>
        <li>仮説検証</li>
      </ul>
    </div>
    <div class="column">
      <h4>②代行型</h4>
      <ul class="icon-list star">
        <li>文書作成</li>
        <li>データ処理</li>
        <li>定型業務</li>
      </ul>
    </div>
    <div class="column">
      <h4>③リサーチャー型</h4>
      <ul class="icon-list star">
        <li>情報収集</li>
        <li>知識拡張</li>
        <li>学習支援</li>
      </ul>
    </div>
  </div>
</div>

---

## <i class="fa-solid fa-comments"></i> 活用パターン①：壁打ち（思考パートナー型）

<div>

## 壁打ち型の特徴と活用法

- **基本**：AIに相談し、アイデアを深める
- **あなたらしさ**：自分の専門分野の課題、会社の戦略に関する悩みをAIにぶつけ、独自の視点や過去の経験を交えながら議論

</div>

<!-- インフォグラフィック要素 -->
<div class="card info">
  <h3>壁打ち型の活用例</h3>
  <ul class="icon-list check">
    <li>新規プロジェクトのアイデア出し</li>
    <li>問題解決のための思考整理</li>
    <li>プレゼン資料の構成検討</li>
    <li>戦略立案のブレインストーミング</li>
  </ul>
</div>

---

## <i class="fa-solid fa-robot"></i> 活用パターン②：代行（業務アシスタント型）

<div>

## 代行型の特徴と活用法

- **基本**：定型業務や資料作成をAIに任せる
- **あなたらしさ**：会社独自のフォーマット、業界特有の言い回し、ターゲット顧客に合わせたトーン＆マナーを指示

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>代行型の活用例</h3>
  <ul class="icon-list check">
    <li>会議議事録の作成・要約</li>
    <li>提案書・報告書の下書き</li>
    <li>メールの返信文作成</li>
    <li>データ分析レポート作成</li>
  </ul>
</div>

---

## <i class="fa-solid fa-graduation-cap"></i> 活用パターン③：教えてもらう（専属リサーチャー型）

<div>

## リサーチャー型の特徴と活用法

- **基本**：AIに新しい情報や知識を教えてもらう
- **あなたらしさ**：業務関連のニッチな情報、競合他社の動き、課題解決に繋がる新技術について深掘り

</div>

<!-- インフォグラフィック要素 -->
<div class="card warning">
  <h3>リサーチャー型の活用例</h3>
  <ul class="icon-list check">
    <li>業界トレンドの整理・分析</li>
    <li>専門知識の学習支援</li>
    <li>新技術の概要理解</li>
    <li>複雑な概念の噛み砕き説明</li>
  </ul>
</div>

---

<!-- _class: image-left -->

## <i class="fa-solid fa-lightbulb"></i> AIが「？」な時こそチャンス！あなたの"独自性"が光る瞬間

<div>

## 違和感は強みのサイン

AIとの対話で「何か違うな…」と感じるとき：
- それはAIの限界であると同時に、あなたの専門性や経験がAIを超えている証拠
- 「AIがピンとこないポイントは、その人の強みだったりする」

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>違和感の種類と意味</h3>
  <ul class="icon-list check">
    <li>事実誤認：あなたの専門知識の証明</li>
    <li>文脈の誤解：あなたの経験値の表れ</li>
    <li>視点の違い：あなたの独自の観点</li>
    <li>感覚の相違：あなたの直感力</li>
  </ul>
</div>

---

## <i class="fa-solid fa-gem"></i> 違和感を価値に変える方法

<div>

## 違和感を深掘りする価値
- なぜAIは理解できないのか？ <i class="fa-solid fa-magnifying-glass"></i>
- その部分に、あなたや会社の競争力の源泉が隠れている可能性
- AIにその「違い」を教え込むことで、よりパーソナルなAI活用へ

<span class="highlight">AIが理解できない領域こそ、あなたの価値が輝く場所</span>

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card warning">
  <h3>AIの限界が示す価値の所在</h3>
  <ul class="icon-list check">
    <li><strong>業界特有の暗黙知</strong>：文書化されていない経験則や慣習</li>
    <li><strong>最新の専門知識</strong>：AIの学習データ以降に生まれた知見</li>
    <li><strong>文化的文脈</strong>：特定の組織や地域に固有の価値観や背景</li>
    <li><strong>人間関係の機微</strong>：感情や対人関係の複雑なダイナミクス</li>
  </ul>
  <p class="highlight">AIが理解できない領域こそ、あなたの価値が輝く場所</p>
</div>

---

<!-- _class: lead -->

## <i class="fa-solid fa-trophy"></i> まとめ：個性を活かすAI活用

<!-- 背景画像を削除 -->

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