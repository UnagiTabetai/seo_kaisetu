// ========================================
//   Navigation Enhancements
//   トップへ戻るボタンとスムーズスクロール
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // トップへ戻るボタンの作成
  const backToTopButton = document.createElement('div');
  backToTopButton.className = 'page-nav';
  backToTopButton.innerHTML = `
    <button class="page-nav-button back-to-top" aria-label="トップへ戻る" title="トップへ戻る">
      <i class="fas fa-arrow-up"></i>
    </button>
  `;
  document.body.appendChild(backToTopButton);

  const button = backToTopButton.querySelector('.back-to-top');

  // スクロール位置によるボタンの表示/非表示
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  }

  // スクロールイベント
  window.addEventListener('scroll', throttle(toggleBackToTop, 100));

  // ボタンクリックでトップへスクロール
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // パンくずリストの改善
  const breadcrumb = document.querySelector('.breadcrumb');
  if (breadcrumb && !breadcrumb.querySelector('.breadcrumb-container')) {
    const content = breadcrumb.innerHTML;
    const parts = content.split('&gt;');
    
    if (parts.length > 1) {
      const container = document.createElement('div');
      container.className = 'breadcrumb-container';
      
      // ホームリンクの処理
      const homeLink = parts[0].trim();
      const homeElement = document.createElement('span');
      homeElement.innerHTML = homeLink;
      const homeAnchor = homeElement.querySelector('a');
      if (homeAnchor) {
        homeAnchor.className = 'breadcrumb-home';
        container.appendChild(homeAnchor);
      }
      
      // セパレータ
      const separator = document.createElement('span');
      separator.className = 'breadcrumb-separator';
      separator.textContent = '>';
      container.appendChild(separator);
      
      // 現在のページ
      const currentPage = document.createElement('span');
      currentPage.className = 'breadcrumb-current';
      currentPage.textContent = parts[1].trim();
      container.appendChild(currentPage);
      
      breadcrumb.innerHTML = '';
      breadcrumb.appendChild(container);
    }
  }

  // スムーズスクロール for アンカーリンク
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offset = 80; // ヘッダーの高さ分オフセット
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // フォーカス管理の改善
  document.addEventListener('keydown', function(e) {
    // Escapeキーでフォーカスをリセット
    if (e.key === 'Escape') {
      document.activeElement.blur();
    }
    
    // /キーで検索ボックスにフォーカス（将来実装用）
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
      const searchInput = document.querySelector('.search-input');
      if (searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
    }
  });

  // スロットル関数
  function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }

  // プログレスバーの追加（読書進捗）
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }

  window.addEventListener('scroll', throttle(updateProgressBar, 10));
});