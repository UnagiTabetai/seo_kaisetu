/**
 * AI活用研修プレゼンテーション
 * スライド遷移とアニメーションを制御するJavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // 変数の初期化
  const slidesContainer = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const currentSlideEl = document.querySelector('.current-slide');
  const totalSlidesEl = document.querySelector('.total-slides');
  const sectionBtns = document.querySelectorAll('.section-btn');
  const fullscreenBtn = document.querySelector('.fullscreen-btn');
  
  let slides = [];
  let currentIndex = 0;
  let currentSection = 'section1'; // デフォルトのセクション
  let isFullscreen = false; // フルスクリーンモードの状態
  
  // 初期化
  function init() {
    // 最初のセクションを読み込む
    loadSection(currentSection);
    
    // セクションボタンのイベント追加
    sectionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const section = this.dataset.section;
        if (section !== currentSection) {
          // 現在のセクションボタンのアクティブ状態を解除
          document.querySelector(`.section-btn.active`).classList.remove('active');
          // 新しいセクションボタンをアクティブにする
          this.classList.add('active');
          // セクションを読み込む
          loadSection(section);
        }
      });
    });
    
    // キーボードイベントの追加
    document.addEventListener('keydown', handleKeyDown);
    
    // ボタンイベントの追加
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);
    
    // フルスクリーンボタンのイベント追加
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // ESCキーでフルスクリーン解除を検知するイベントリスナー
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    // ウィンドウリサイズ時のアスペクト比調整
    window.addEventListener('resize', adjustAspectRatio);
  }
  
  // セクションを読み込む
  function loadSection(section) {
    currentSection = section;
    currentIndex = 0;
    
    // セクションのHTMLを取得（キャッシュ無効化パラメータ付き）
    const timestamp = new Date().getTime();
    fetch(`sections/${section}.html?_=${timestamp}`)
      .then(response => response.text())
      .then(html => {
        // スライドコンテナにHTMLを設定
        slidesContainer.innerHTML = html;
        
        // スライドを取得
        slides = slidesContainer.querySelectorAll('.slide');
        
        // 総スライド数を表示
        totalSlidesEl.textContent = slides.length;
        
        // 最初のスライドを表示
        showSlide(0);
        
        // アスペクト比調整
        adjustAspectRatio();
      })
      .catch(error => {
        console.error('セクションの読み込みに失敗しました:', error);
      });
  }
  
  // スライド表示
  function showSlide(index) {
    // 現在のスライドを非表示
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // 新しいスライドを表示
    slides[index].classList.add('active');
    
    // アニメーション実行
    animateElements(slides[index]);
    
    // インジケーター更新
    currentSlideEl.textContent = index + 1;
  }
  
  // アニメーション処理
  function animateElements(slide) {
    // Animate.cssを使用したアニメーション要素
    const animatedElements = slide.querySelectorAll('.animate__animated');
    
    // クリック式アニメーション要素を確認
    const clickAnimateElements = slide.querySelectorAll('[data-animate-order]');
    const hasClickAnimation = clickAnimateElements.length > 0;
    
    // クリック式アニメーションがある場合
    if (hasClickAnimation) {
      // 最初のアニメーション以外を非表示
      clickAnimateElements.forEach(element => {
        const order = parseInt(element.dataset.animateOrder);
        if (order > 1) {
          element.style.opacity = '0';
          element.style.visibility = 'hidden';
        } else {
          // 最初の要素はアニメーション
          element.style.animation = 'none';
          element.offsetHeight; // リフロー
          element.style.animation = null;
          element.style.opacity = '1';
          element.style.visibility = 'visible';
        }
      });
      
      // クリックイベントを追加
      slide.clickAnimationCurrentOrder = 1;
      slide.clickAnimationMaxOrder = Math.max(...Array.from(clickAnimateElements).map(el => parseInt(el.dataset.animateOrder)));
      
      // 既存のイベントリスナーを削除
      if (slide.clickHandler) {
        slide.removeEventListener('click', slide.clickHandler);
      }
      
      // 新しいイベントリスナーを追加
      slide.clickHandler = function() {
        if (slide.clickAnimationCurrentOrder < slide.clickAnimationMaxOrder) {
          slide.clickAnimationCurrentOrder++;
          const nextElements = slide.querySelectorAll(`[data-animate-order="${slide.clickAnimationCurrentOrder}"]`);
          
          nextElements.forEach(element => {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            element.style.animation = 'none';
            element.offsetHeight; // リフロー
            element.style.animation = null;
          });
        } else {
          // すべてのアニメーションが完了したら次のスライドへ
          showNextSlide();
        }
      };
      
      slide.addEventListener('click', slide.clickHandler);
    } else {
      // 通常のアニメーション処理
      animatedElements.forEach(element => {
        // アニメーションをリセットして再適用
        element.style.animation = 'none';
        element.offsetHeight; // リフロー
        element.style.animation = null;
      });
      
      // カスタムアニメーション要素
      const customAnimatedElements = slide.querySelectorAll('.animate');
      
      customAnimatedElements.forEach(element => {
        // クラスを一度削除して再適用
        const animationClass = element.classList.contains('fadeIn') ? 'fadeIn' : '';
        const delayClass = element.classList.contains('delay-1') ? 'delay-1' : '';
        
        if (animationClass) {
          element.classList.remove(animationClass);
          element.offsetHeight; // リフロー
          element.classList.add(animationClass);
        }
        
        if (delayClass) {
          element.classList.remove(delayClass);
          element.offsetHeight; // リフロー
          element.classList.add(delayClass);
        }
      });
    }
  }
  
  // 前のスライドを表示
  function showPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    } else {
      // 最初のスライドの場合、前のセクションの最後のスライドに移動
      const currentSectionIndex = Array.from(sectionBtns).findIndex(btn => btn.dataset.section === currentSection);
      if (currentSectionIndex > 0) {
        const prevSectionBtn = sectionBtns[currentSectionIndex - 1];
        prevSectionBtn.click();
        // 読み込み後に最後のスライドを表示するための遅延処理
        setTimeout(() => {
          currentIndex = slides.length - 1;
          showSlide(currentIndex);
        }, 100);
      }
    }
  }
  
  // 次のスライドを表示
  function showNextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    } else {
      // 最後のスライドの場合、次のセクションの最初のスライドに移動
      const currentSectionIndex = Array.from(sectionBtns).findIndex(btn => btn.dataset.section === currentSection);
      if (currentSectionIndex < sectionBtns.length - 1) {
        const nextSectionBtn = sectionBtns[currentSectionIndex + 1];
        nextSectionBtn.click();
      }
    }
  }
  
  // キーボードイベント処理
  function handleKeyDown(e) {
    switch(e.key) {
      case 'ArrowLeft':
        showPrevSlide();
        break;
      case 'ArrowRight':
      case ' ': // スペースキー
        showNextSlide();
        break;
    }
  }
  
  // 16:9のアスペクト比を維持
  function adjustAspectRatio() {
    const presentationContainer = document.querySelector('.presentation-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 16:9のアスペクト比を計算
    const aspectRatio = 16 / 9;
    
    // ウィンドウのアスペクト比
    const windowRatio = windowWidth / windowHeight;
    
    if (windowRatio > aspectRatio) {
      // ウィンドウが横長の場合、高さに合わせる
      const slideWidth = windowHeight * aspectRatio;
      const slideHeight = windowHeight;
      
      // スライドコンテンツのスタイル調整
      document.querySelectorAll('.slide-content').forEach(content => {
        content.style.width = `${slideWidth}px`;
        content.style.height = `${slideHeight}px`;
        content.style.margin = '0 auto';
      });
    } else {
      // ウィンドウが縦長の場合、幅に合わせる
      const slideWidth = windowWidth;
      const slideHeight = windowWidth / aspectRatio;
      
      // スライドコンテンツのスタイル調整
      document.querySelectorAll('.slide-content').forEach(content => {
        content.style.width = `${slideWidth}px`;
        content.style.height = `${slideHeight}px`;
        content.style.margin = `${(windowHeight - slideHeight) / 2}px auto`;
      });
    }
  }
  
  // スワイプ操作のサポート（モバイル対応）
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50; // スワイプと判定する最小距離
    
    if (touchEndX < touchStartX - swipeThreshold) {
      // 左スワイプ → 次のスライド
      showNextSlide();
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
      // 右スワイプ → 前のスライド
      showPrevSlide();
    }
  }
  
  // フルスクリーン切り替え
  function toggleFullscreen() {
    if (!isFullscreen) {
      // フルスクリーンモードに入る
      const element = document.documentElement;
      
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE11
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
      }
    } else {
      // フルスクリーンモードを終了
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      }
    }
  }
  
  // フルスクリーン状態変更ハンドラー
  function handleFullscreenChange() {
    // フルスクリーン状態を確認
    isFullscreen = document.fullscreenElement ||
                   document.webkitFullscreenElement ||
                   document.mozFullScreenElement ||
                   document.msFullscreenElement;
    
    // フルスクリーンボタンのアイコンを切り替え
    if (isFullscreen) {
      fullscreenBtn.parentElement.classList.add('fullscreen-active');
    } else {
      fullscreenBtn.parentElement.classList.remove('fullscreen-active');
    }
    
    // アスペクト比を調整
    adjustAspectRatio();
  }
  
  // タイマー機能
  function initTimer() {
    const timerContainer = document.querySelector('.timer-container');
    const timerToggle = document.querySelector('.timer-toggle');
    const timerDisplay = document.querySelector('.timer-display');
    const timerStartBtn = document.querySelector('.timer-start');
    const timerPauseBtn = document.querySelector('.timer-pause');
    const timerResetBtn = document.querySelector('.timer-reset');
    
    let timerInterval;
    let seconds = 0;
    let isRunning = false;
    
    // タイマーの表示を更新
    function updateTimerDisplay() {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    // タイマーを開始
    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
          seconds++;
          updateTimerDisplay();
        }, 1000);
      }
    }
    
    // タイマーを一時停止
    function pauseTimer() {
      if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
      }
    }
    
    // タイマーをリセット
    function resetTimer() {
      pauseTimer();
      seconds = 0;
      updateTimerDisplay();
    }
    
    // タイマーの最小化/最大化を切り替え
    function toggleTimer() {
      timerContainer.classList.toggle('minimized');
      
      // アイコンを切り替え
      const icon = timerToggle.querySelector('i');
      if (timerContainer.classList.contains('minimized')) {
        icon.className = 'fa-solid fa-chevron-up';
      } else {
        icon.className = 'fa-solid fa-chevron-down';
      }
    }
    
    // タイマーコンテナ全体をクリックしても最小化/最大化できるようにする
    timerContainer.addEventListener('click', function(e) {
      // コントロールボタン以外の領域がクリックされた場合のみ
      if (!e.target.closest('.timer-controls') && !e.target.closest('.timer-toggle')) {
        toggleTimer();
      }
    });
    
    // イベントリスナーを設定
    timerStartBtn.addEventListener('click', startTimer);
    timerPauseBtn.addEventListener('click', pauseTimer);
    timerResetBtn.addEventListener('click', resetTimer);
    timerToggle.addEventListener('click', toggleTimer);
    
    // 初期表示を設定
    updateTimerDisplay();
  }

  // 初期化実行
  init();
  initTimer();
});