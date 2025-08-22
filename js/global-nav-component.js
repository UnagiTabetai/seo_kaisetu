// グローバルナビゲーションコンポーネント
class GlobalNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // 現在のページを取得
    const currentPath = window.location.pathname;
    const inPagesDir = currentPath.includes('/pages/');
    
    // パスの設定をシンプルに
    let homeLink, pagesPrefix;
    
    if (inPagesDir) {
      // pagesディレクトリ内にいる場合
      homeLink = '../index.html';
      pagesPrefix = './';  // 同じディレクトリへの相対パス
    } else {
      // トップレベル（index.htmlなど）にいる場合
      homeLink = './index.html';
      pagesPrefix = './pages/';  // pagesディレクトリへの相対パス
    }
    
    this.innerHTML = `
      <nav class="global-nav">
        <div class="nav-container">
          <a href="${homeLink}" class="nav-logo">
            <i class="fas fa-book-open"></i>
            <span>SEOマスターガイド</span>
          </a>
          
          <button class="mobile-menu-toggle" id="mobileMenuToggle">
            <i class="fas fa-bars"></i>
          </button>
          
          <ul class="nav-menu" id="navMenu">
            <li class="nav-item">
              <a href="${homeLink}" class="nav-link">ホーム</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">基礎知識 <i class="fas fa-chevron-down"></i></a>
              <div class="nav-dropdown">
                <a href="${pagesPrefix}seo-basics.html" class="dropdown-link">
                  <i class="fas fa-graduation-cap"></i> SEO基礎
                </a>
                <a href="${pagesPrefix}keyword-strategy.html" class="dropdown-link">
                  <i class="fas fa-key"></i> キーワード戦略
                </a>
                <a href="${pagesPrefix}article-creation.html" class="dropdown-link">
                  <i class="fas fa-pen-fancy"></i> 記事作成
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">応用技術 <i class="fas fa-chevron-down"></i></a>
              <div class="nav-dropdown">
                <a href="${pagesPrefix}ai-utilization.html" class="dropdown-link">
                  <i class="fas fa-robot"></i> AI活用術
                </a>
                <a href="${pagesPrefix}topical-authority.html" class="dropdown-link">
                  <i class="fas fa-crown"></i> トピカルオーソリティ
                </a>
                <a href="${pagesPrefix}serp-optimization.html" class="dropdown-link">
                  <i class="fas fa-search-plus"></i> SERP最適化
                </a>
                <a href="${pagesPrefix}zero-click-era.html" class="dropdown-link">
                  <i class="fas fa-robot"></i> ゼロクリック対策
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a href="${pagesPrefix}templates.html" class="nav-link">テンプレート</a>
            </li>
            <li class="nav-item">
              <a href="${pagesPrefix}practice.html" class="nav-link">実践演習</a>
            </li>
            <li class="nav-item nav-cta">
              <a href="${inPagesDir ? '../' : './'}seo-manual.html" class="cta-button">完全マニュアル</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
    
    // イベントリスナーを設定
    this.setupEventListeners();
  }

  setupEventListeners() {
    // モバイルメニュートグル
    const mobileMenuToggle = this.querySelector("#mobileMenuToggle");
    const navMenu = this.querySelector("#navMenu");
    
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileMenuToggle.classList.toggle("active");
      });
    }
    
    // スクロール時のナビゲーション変化
    window.addEventListener("scroll", () => {
      const nav = this.querySelector(".global-nav");
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }
    });
    
    // ドロップダウンメニューのホバー処理は削除（CSSで処理）
    
    // 現在のページをハイライト
    const currentPage = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.dropdown-link, .nav-link');
    links.forEach(link => {
      if (link.href.includes(currentPage) && currentPage !== '') {
        link.classList.add('current-page');
      }
    });
  }
}

// カスタム要素として登録
customElements.define('global-nav', GlobalNav);