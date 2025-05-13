# セクション1の修正計画

## 概要
セクション1のスライド数を減らし、内容をより効率的に伝えるための修正計画です。

## 修正内容

### 1. スライド4、5、6の統合
「AIの基本的特徴」「超高学歴の天才」「AIの学習範囲」の3つのスライドを1つに統合します。

```html
<!-- 統合スライド：AIの基本的特徴と知識 -->
<section class="slide" id="section1-slide4">
  <div class="slide-content center">
    <h1><i class="fa-solid fa-graduation-cap"></i> AIは"超高学歴の天才"</h1>
    
    <div class="columns">
      <div class="column">
        <h3>基本的な特徴</h3>
        <ul class="icon-list star">
          <li>膨大な知識量</li>
          <li>高速な情報処理能力</li>
          <li>文脈理解の限界</li>
          <li>記憶の制約</li>
        </ul>
      </div>
      
      <div class="column">
        <h3>学習範囲</h3>
        <ul class="icon-list check">
          <li>学術論文・研究資料</li>
          <li>書籍・文学作品</li>
          <li>ウェブサイト・ブログ</li>
          <li>技術マニュアル・ドキュメント</li>
        </ul>
      </div>
    </div>
    
    <div class="term-definition" style="margin-top: 1em;">
      <h4>圧倒的な知識量</h4>
      <ul class="icon-list star">
        <li>インターネット上の膨大な文章を読破</li>
        <li>世界トップレベルの頭脳集団による開発・学習</li>
        <li>あらゆる知識を瞬時に引き出せる能力</li>
      </ul>
    </div>
  </div>
</section>
```

### 2. スライド8の2カラム化
「AIの実証された能力①：学術・試験」のスライドを2カラムレイアウトに変更します。

```html
<!-- スライド8：2カラム化 -->
<section class="slide" id="section1-slide8">
  <div class="slide-content center">
    <h1><i class="fa-solid fa-award"></i> AIの実証された能力①：学術・試験</h1>
    
    <div class="columns">
      <div class="column">
        <div class="card success">
          <h4>学術試験</h4>
          <ul class="icon-list check">
            <li>🎓 東大入試問題（英・倫・数）→ 正答率◎</li>
          </ul>
        </div>
      </div>
      
      <div class="column">
        <div class="card success">
          <h4>専門資格</h4>
          <ul class="icon-list check">
            <li>🩺 医師国家試験 → GPT-4で8割前後（2023年）</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. スライド10の削除
「AIの実用例」のスライドを削除します。内容はスライド9の「AIの実証された能力②：実務応用」に含まれているため、冗長です。

### 4. スライド12の削除
「AIの3つの特徴的なクセ」のスライドを削除します。すでにスライド13（統合版）に内容が含まれているため、冗長です。

### 5. スライド13のカードの装飾を上に移動
スライド13のカードの装飾を上部に移動して、より視覚的に分かりやすくします。

```html
<!-- スライド13（統合版）：カード装飾の修正 -->
<section class="slide" id="section1-slide13">
  <div class="slide-content center">
    <h1><i class="fa-solid fa-fingerprint"></i> AIの3つの特徴的なクセ</h1>
    
    <div class="columns">
      <div class="column">
        <div class="card warning animate__animated animate__fadeIn" data-animate-order="1" style="border-top: 4px solid var(--color-accent-warning); border-left: none;">
          <h3><i class="fa-solid fa-memory"></i> クセ①：記憶がない</h3>
          <p>「あれ、さっきの話なんだっけ？」</p>
          <p>（チャットが終わると忘却）</p>
        </div>
      </div>
      
      <div class="column">
        <div class="card warning animate__animated animate__fadeIn" data-animate-order="2" style="border-top: 4px solid var(--color-accent-warning); border-left: none;">
          <h3><i class="fa-solid fa-comment-slash"></i> クセ②：空気は読まない</h3>
          <p>「え、そういう意味じゃない？」</p>
          <p>（行間・顔色・雰囲気はスルー）</p>
        </div>
      </div>
      
      <div class="column">
        <div class="card warning animate__animated animate__fadeIn" data-animate-order="3" style="border-top: 4px solid var(--color-accent-warning); border-left: none;">
          <h3><i class="fa-solid fa-question"></i> クセ③：曖昧さに弱い</h3>
          <p>「具体的に言ってくれないと…」</p>
          <p>（文面が全て）</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 結果
これらの修正により、スライド数が減少し、内容がより効率的に伝わるようになります。特に「AIの能力」と「AIのクセ」に関する部分が整理され、視覚的にも分かりやすくなります。