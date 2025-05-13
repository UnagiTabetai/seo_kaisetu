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

## <i class="fa-solid fa-comment-dots"></i> セクション②
## プロンプト設計＝マネジメント

<div class="animate fadeIn delay-1">
  <p>AIへの指示出しは「新人マネジメント」と同じ構造</p>
</div>

---

<!-- _class: lead dark -->

## <i class="fa-solid fa-comment-dots"></i> AIへの指示は「マネジメント」
## 優秀な新人を活かす「伝え方」の技術

<div class="card">
  <h3>AIマネジメントの基本原則</h3>
  <ul class="icon-list check">
    <li>明確な目標設定</li>
    <li>具体的な指示</li>
    <li>適切なフィードバック</li>
    <li>継続的な改善</li>
  </ul>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-user-tie"></i> もし「今日初めて来たアルバイトさん」に仕事を頼むなら？

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

<!-- インフォグラフィック要素に置き換え -->
<div class="card info">
  <h3>AIと新人の共通点</h3>
  <div class="columns">
    <div class="column">
      <ul class="icon-list check">
        <li>高い潜在能力</li>
        <li>知識はあるが経験不足</li>
      </ul>
    </div>
    <div class="column">
      <ul class="icon-list check">
        <li>明確な指示が必要</li>
        <li>フィードバックで成長</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- _class: image-left -->

## <i class="fa-solid fa-list-check"></i> AIへの指示出し（プロンプト）3つの心得

<div class="card info">
  <h3>効果的なプロンプトの3原則</h3>
  <ul class="icon-list check">
    <li>厳密さ：具体的で明確な指示</li>
    <li>反復改善：対話を通じた修正</li>
    <li>簡潔さ：必要十分な情報提供</li>
  </ul>
</div>

---

## <i class="fa-solid fa-ruler"></i> 原則①：プロンプトは「厳密」であればあるほど良い

<div>

## 厳密さの重要性

- 曖昧さを嫌うAIには、具体的で明確な指示が不可欠
- 具体的な例や条件を含めることで精度が向上
- 求める出力の形式や範囲を明示する

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>厳密なプロンプトの要素</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4>明確な目的</h4>
      <p>何を達成したいのかを具体的に</p>
    </div>
    <div class="timeline-item">
      <h4>具体的な条件</h4>
      <p>制約や要件を詳細に</p>
    </div>
    <div class="timeline-item">
      <h4>出力形式の指定</h4>
      <p>期待する結果の形式を明示</p>
    </div>
  </div>
</div>

---

## <i class="fa-solid fa-arrows-spin"></i> 原則②：1回で完璧を目指さない。「ブラッシュアップ」が前提

<div>

## 反復改善の考え方

- 人間同士でも一発で伝わらないことはある
- 対話しながら改善していく姿勢が大切
- 最初の出力を基に、より良い結果に近づける

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>効果的なフィードバックの方法</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4>具体的な指摘</h4>
      <p>何が良くて何が悪いかを明確に</p>
    </div>
    <div class="timeline-item">
      <h4>改善方向の提示</h4>
      <p>どう変えてほしいかの指針を示す</p>
    </div>
    <div class="timeline-item">
      <h4>反復プロセス</h4>
      <p>段階的に理想の出力に近づける</p>
    </div>
  </div>
</div>

---

## <i class="fa-solid fa-scissors"></i> 原則③：プロンプトは「短い」ほど良い（場合がある）

<div>

## 簡潔さのバランス

- ただし、必要な情報はしっかり含める
- 余計な情報は混乱のもと
- 本質的な要素に絞り込む

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>効果的なプロンプト設計</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4>明確さ</h4>
      <p>曖昧さを排除した具体的な指示</p>
    </div>
    <div class="timeline-item">
      <h4>反復改善</h4>
      <p>フィードバックを取り入れた継続的な修正</p>
    </div>
    <div class="timeline-item">
      <h4>簡潔さ</h4>
      <p>余計な情報を省いた本質的な指示</p>
    </div>
  </div>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-anchor"></i> 良い指示の構造①：「アンカリング」で共通認識を作る

<div>

## AIとの認識合わせが重要

- アンカリングとは、AIとの共通認識を作るための技術
- 明確な参照点を設定することで誤解を防ぐ
- 3つの要素で構成される

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card primary">
  <h3>アンカリングの3要素</h3>
  <ul class="icon-list star">
    <li><strong>参照範囲</strong>：AIに「どの範囲の話か」を明確に伝える</li>
    <li><strong>思考プロセス</strong>：AIに「どう考えてほしいか」の道筋を示す</li>
    <li><strong>アウトプット形式</strong>：AIに「何を出してほしいか」を具体的に指定する</li>
  </ul>
</div>

---

## <i class="fa-solid fa-map"></i> アンカリング要素A：参照範囲の定義

<div>

## 参照範囲の定義とは

- AIに「どの範囲の話か」を教える
- 前提条件、具体例、役割、概要など
- 会話の土台となる共通認識を作る

</div>

<!-- インフォグラフィック要素 -->
<div class="card info">
  <h3>参照範囲の定義方法</h3>
  <ul class="icon-list check">
    <li>前提条件の明示</li>
    <li>具体例の提示</li>
    <li>役割の設定</li>
    <li>対象範囲の限定</li>
  </ul>
</div>

---

## <i class="fa-solid fa-brain"></i> アンカリング要素B：思考プロセスの付与

<div>

## 思考プロセスの付与とは

- AIに「どう考えてほしいか」を伝える
- CoT（ステップバイステップ思考）
- ゴールシーク（目標から逆算）
- 方針（「顧客満足度を最優先で」）

</div>

<!-- インフォグラフィック要素 -->
<div class="card success">
  <h3>思考プロセスの種類</h3>
  <div class="columns">
    <div class="column">
      <h4>CoT思考</h4>
      <p>段階的に問題を解決</p>
    </div>
    <div class="column">
      <h4>ゴールシーク</h4>
      <p>目標から逆算して考える</p>
    </div>
    <div class="column">
      <h4>方針指定</h4>
      <p>優先すべき価値観を示す</p>
    </div>
  </div>
</div>

---

## <i class="fa-solid fa-file-export"></i> アンカリング要素C：アウトプットの指定

<div>

## アウトプットの指定とは

- AIに「何を出してほしいか」を明確にする
- 出力形式、例文、文字数、スタイルなど
- 期待する結果を具体的に示す

</div>

<!-- インフォグラフィック要素 -->
<div class="card warning">
  <h3>アウトプット指定の要素</h3>
  <ul class="icon-list arrow">
    <li>形式（表、リスト、文章など）</li>
    <li>長さ（文字数、段落数）</li>
    <li>スタイル（フォーマル、カジュアル）</li>
    <li>構成（見出し、セクション）</li>
  </ul>
</div>

---

<!-- _class: image-left -->

## <i class="fa-solid fa-sitemap"></i> 良い指示の構造②：「コンテクストマネジメント」で誤解を防ぐ

<div>

## コンテクストマネジメントとは

- AIとの対話における文脈の管理技術
- 情報の整理と伝達方法の工夫
- 誤解を防ぎ、一貫性のある対話を実現する

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card warning">
  <h3>コンテクストマネジメントの重要性</h3>
  <div class="columns">
    <div class="column">
      <h4>フォーマット活用</h4>
      <ul class="icon-list arrow">
        <li>マークダウン構造</li>
        <li>箇条書きリスト</li>
        <li>表形式データ</li>
      </ul>
    </div>
    <div class="column">
      <h4>ステートレス対策</h4>
      <ul class="icon-list arrow">
        <li>重要情報の繰り返し</li>
        <li>前提条件の明示</li>
        <li>参照情報の再提示</li>
      </ul>
    </div>
  </div>
</div>

---

## <i class="fa-solid fa-code"></i> コンテクストマネジメントA：プロンプトフォーマット

<div>

## プロンプトフォーマットの活用

- AIに「論理の形」を伝える
- マークダウン（見出しやリスト）
- 数式や論理記号
- プログラミングコード形式
- 専門用語の統一

</div>

<!-- インフォグラフィック要素 -->
<div class="card info">
  <h3>効果的なフォーマット例</h3>
  <ul class="icon-list check">
    <li>階層構造のマークダウン</li>
    <li>番号付きリスト（手順）</li>
    <li>表形式（比較情報）</li>
    <li>コードブロック（技術情報）</li>
  </ul>
</div>

---

## <i class="fa-solid fa-memory"></i> コンテクストマネジメントB：ステートレスという前提

<div>

## ステートレスへの対応

- AIは「前の文脈」をすぐ忘れる
- 「毎日新しいSESに優秀なエンジニアが来る」
- チャットのやり取りでも、重要な前提は都度伝える

</div>

<!-- インフォグラフィック要素 -->
<div class="card primary">
  <h3>ステートレス対策の具体例</h3>
  <ul class="icon-list star">
    <li>重要な前提条件の繰り返し</li>
    <li>過去の会話の要約の提示</li>
    <li>関連する過去の指示への参照</li>
    <li>文脈の明示的な更新</li>
  </ul>
</div>

---

<!-- _class: image-right -->

## <i class="fa-solid fa-bullseye"></i> プロンプト作成の第一歩：「何のために？」を明確にする

<div>

## 目的の明確化が最重要

### なぜ目的が重要か？
- 目的が定まっていないと「なんか違うけどこれでいいか…」となりがち（人間側の認知バイアス）
- AIは優秀でも、私たちの「真の目的」までは察してくれない

<span class="highlight">明確な目的設定がAI活用の成否を分ける</span>

</div>

<!-- インフォグラフィック要素 -->
<div class="card danger">
  <h3>目的不明確の問題点</h3>
  <ul class="icon-list arrow">
    <li>方向性のずれた回答</li>
    <li>無駄な試行錯誤</li>
    <li>期待と結果のギャップ</li>
    <li>満足度の低下</li>
  </ul>
</div>

---

## <i class="fa-solid fa-compass"></i> 目的を明確にする要素（依頼の5W1H）

<div>

## 目的明確化の具体的要素

- **背景**：どういう経緯でそのタスクを依頼するのか
- **前提**：必要な用語の定義、共有認識
- **理想像（ゴール）**：何を実現したいのか

<span class="highlight">最初から完璧な目的は難しい → AIと対話しながら明確化するのも一手</span>

</div>

<!-- インフォグラフィック要素に置き換え -->
<div class="card info">
  <h3>目的明確化のフレームワーク</h3>
  <div class="timeline">
    <div class="timeline-item">
      <h4>背景（Why）</h4>
      <p>なぜこのタスクが必要なのか</p>
    </div>
    <div class="timeline-item">
      <h4>前提（What）</h4>
      <p>必要な用語定義と共有認識</p>
    </div>
    <div class="timeline-item">
      <h4>理想像（Goal）</h4>
      <p>最終的に実現したい状態</p>
    </div>
  </div>
</div>

---

<!-- _class: lead -->

## <i class="fa-solid fa-handshake"></i> まとめ：効果的な指示

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

<!-- 背景画像を削除 -->