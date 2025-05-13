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
  
  /* 基本的なフォントとCDNのインポート */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
---

<!-- _class: lead gradient-blue -->

# <i class="fa-solid fa-rocket"></i> セクション①
## AIとはどんな"人"か？

<div class="animate fadeIn delay-1">
  <p>AIの知識の深さと人間とは異なる「クセ」を理解する</p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-question-circle"></i> そもそもAIってどんな"人"？

---

<!-- _class: center -->

# <i class="fa-solid fa-robot"></i> AIをチームメンバーとして考えると...

<div class="card">
  <h3>新しい仲間として見てみよう</h3>
  <p>AIを「特殊な能力と特徴を持つ新人社員」と考えると理解しやすい</p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-id-card"></i> AIの基本的な特徴

<div class="card warning">
  <ul class="icon-list star">
    <li>膨大な知識量</li>
    <li>高速な情報処理能力</li>
    <li>文脈理解の限界</li>
    <li>記憶の制約</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-graduation-cap"></i> AIは"超高学歴の天才"

<div class="term-definition">
  <h4>圧倒的な知識量</h4>
  <ul class="icon-list star">
    <li>インターネット上の膨大な文章を読破</li>
    <li>世界トップレベルの頭脳集団による開発・学習</li>
    <li>あらゆる知識を瞬時に引き出せる能力</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-book"></i> AIの学習範囲は？

<div class="card success">
  <ul class="icon-list check">
    <li>学術論文・研究資料</li>
    <li>書籍・文学作品</li>
    <li>ウェブサイト・ブログ</li>
    <li>技術マニュアル・ドキュメント</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-graduation-cap"></i> 「例えるなら…東大主席＆MITダブル修了の新人」

<p>AIの能力を人間に例えると？</p>

---

<!-- _class: center -->

# <i class="fa-solid fa-award"></i> AIの実証された能力①：学術・試験

<div class="card success">
  <ul class="icon-list check">
    <li>🎓 東大入試問題（英・倫・数）→ 正答率◎</li>
    <li>🩺 医師国家試験 → GPT-4で8割前後（2023年）</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-briefcase"></i> AIの実証された能力②：実務応用

<div class="card success">
  <ul class="icon-list check">
    <li>⚖️ 法務文書の要約・作成 → 弁護士業務の一部をカバー</li>
    <li>💻 プログラム生成 → フルスタックでアプリ開発可能</li>
  </ul>
  <p><span class="highlight-success">使いこなせば、強力な戦力に</span></p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-laptop-code"></i> AIの実用例

<div class="card info">
  <ul class="icon-list arrow">
    <li>医療診断支援</li>
    <li>法律文書作成・分析</li>
    <li>プログラミング支援</li>
    <li>教育コンテンツ作成</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-exclamation-triangle"></i> でも…この新人、ちょっと「大きなクセ」があります

---

<!-- _class: center -->

# <i class="fa-solid fa-fingerprint"></i> AIの3つの特徴的なクセ

<div class="timeline">
  <div class="timeline-item">
    <h4>記憶がない</h4>
    <p>「あれ、さっきの話なんだっけ？」</p>
  </div>
  <div class="timeline-item">
    <h4>空気は読まない</h4>
    <p>「え、そういう意味じゃない？」</p>
  </div>
  <div class="timeline-item">
    <h4>曖昧さに弱い</h4>
    <p>「具体的に言ってくれないと…」</p>
  </div>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-memory"></i> クセ①：記憶がない

<div class="card warning">
  <p>「あれ、さっきの話なんだっけ？」</p>
  <p>（チャットが終わると忘却）</p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-comment-slash"></i> クセ②：空気は読まない

<div class="card warning">
  <p>「え、そういう意味じゃない？」</p>
  <p>（行間・顔色・雰囲気はスルー）</p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-question"></i> クセ③：曖昧さに弱い

<div class="card warning">
  <p>「具体的に言ってくれないと…」</p>
  <p>（文面が全て）</p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-tools"></i> AIのクセへの対応策

<div class="card info">
  <ul class="icon-list check">
    <li>重要な情報は繰り返し伝える</li>
    <li>明確で具体的な指示を出す</li>
    <li>文脈を丁寧に説明する</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-exclamation-triangle"></i> AIの技術的限界

<div class="card warning">
  <ul class="icon-list arrow">
    <li>学習データの期限（カットオフ）</li>
    <li>専門分野の深さに限界</li>
    <li>実体験の欠如</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-bug"></i> AIの限界がもたらす問題

<div class="card danger">
  <ul class="icon-list arrow">
    <li>最新情報の欠如</li>
    <li>事実の誤認（ハルシネーション）</li>
    <li>文化的ニュアンスの理解不足</li>
    <li>実世界の経験がない</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-memory"></i> 特に注意！クセ①：「昨日のことは覚えていません」

---

<!-- _class: center -->

# <i class="fa-solid fa-brain"></i> AIの記憶の特性

<div class="case-study">
  <ul class="icon-list arrow">
    <li>チャットセッションが終わると、それまでのやり取りは基本的にリセット</li>
    <li>昨日依頼したことを今日は覚えていない</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-film"></i> わかりやすい例え話

<div class="case-study">
  <ul class="icon-list arrow">
    <li>記憶が1日でリセットされるドラマの登場人物と毎日会話するイメージ</li>
    <li>AI自身が日記（ログ）を書いても、翌日にはその内容を忘れている</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-shield-alt"></i> 記憶の制約への対策

<div class="card warning">
  <ul class="icon-list check">
    <li>重要な情報は毎回提供する</li>
    <li>過去の会話ログを参照させる</li>
    <li>長期的な作業は分割する</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-database"></i> AIの記憶モデルを理解する

---

<!-- _class: center -->

# <i class="fa-solid fa-layer-group"></i> AIの記憶の種類

<div class="card info">
  <ul class="icon-list arrow">
    <li>会話内の一時的な記憶</li>
    <li>事前学習された知識</li>
    <li>外部保存された情報</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-memory"></i> AIの記憶モデルの詳細

<div class="timeline">
  <div class="timeline-item">
    <h4>短期記憶</h4>
    <p>現在の会話コンテキスト内のみ</p>
  </div>
  <div class="timeline-item">
    <h4>長期記憶</h4>
    <p>事前学習データのみ（更新不可）</p>
  </div>
  <div class="timeline-item">
    <h4>外部記憶</h4>
    <p>ファイル保存など（明示的に必要）</p>
  </div>
</div>

---

<!-- _class: lead gradient-mint -->

# <i class="fa-solid fa-check-circle"></i> まとめ：AIの特性

---

<!-- _class: center -->

# <i class="fa-solid fa-thumbs-up"></i> AIの得意なこと

<div class="feature-item animate fadeIn">
  <ul>
    <li>膨大な知識</li>
    <li>複雑な問題解決</li>
    <li>高速処理</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-thumbs-down"></i> AIの苦手なこと

<div class="feature-item animate fadeIn">
  <ul>
    <li>記憶の維持</li>
    <li>空気を読む</li>
    <li>曖昧な指示の理解</li>
  </ul>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-lightbulb"></i> 考えてみよう

<div class="workshop animate fadeIn">
  <p>「超優秀だけど、現場感ゼロの新人」をどう育てれば最高のチームメンバーになるでしょうか？</p>
</div>

---

<!-- _class: center -->

# <i class="fa-solid fa-handshake"></i> AIとの効果的な協業のポイント

<div class="card info">
  <ul class="icon-list check">
    <li>明確な指示を与える</li>
    <li>フィードバックを繰り返す</li>
    <li>専門知識で補完する</li>
  </ul>
</div>