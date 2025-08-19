// サイドバー目次の機能
class TableOfContents {
  constructor() {
    this.tocContainer = null;
    this.tocList = null;
    this.headings = [];
    this.currentActiveId = null;
    this.init();
  }

  init() {
    // 目次を生成
    this.createTOC();
    
    // イベントリスナーを設定
    this.setupEventListeners();
    
    // 初期状態をチェック
    this.updateActiveSection();
    
    // 読み込み進捗バーを初期化
    this.initProgressBar();
  }

  createTOC() {
    // H2とH3要素を取得
    const contentSection = document.querySelector('.content-section');
    if (!contentSection) return;

    const h2Elements = contentSection.querySelectorAll('h2');
    if (h2Elements.length === 0) return;

    // bodyにクラスを追加
    document.body.classList.add('with-sidebar');

    // 目次コンテナを作成
    const tocContainer = document.createElement('nav');
    tocContainer.className = 'toc-container';
    tocContainer.innerHTML = `
      <div class="toc-header">
        <i class="fas fa-list"></i>
        <span>目次</span>
      </div>
      <ul class="toc-list"></ul>
    `;

    const tocList = tocContainer.querySelector('.toc-list');

    // 各H2要素に対して処理
    h2Elements.forEach((h2, index) => {
      // IDを設定（既存のIDがなければ）
      if (!h2.id) {
        h2.id = `section-${index + 1}`;
      }

      // 目次項目を作成
      const tocItem = document.createElement('li');
      tocItem.className = 'toc-item';
      
      const tocLink = document.createElement('a');
      tocLink.className = 'toc-link';
      tocLink.href = `#${h2.id}`;
      tocLink.textContent = h2.textContent.replace(/^[^\s]+\s/, ''); // アイコンを除去
      
      tocItem.appendChild(tocLink);

      // H3要素を探す
      const nextElement = h2.parentElement;
      if (nextElement) {
        const h3Elements = [];
        let sibling = h2.nextElementSibling;
        
        while (sibling) {
          if (sibling.tagName === 'H2') break;
          if (sibling.tagName === 'H3') {
            h3Elements.push(sibling);
          }
          sibling = sibling.nextElementSibling;
        }

        // H3のサブリストを作成
        if (h3Elements.length > 0) {
          const subList = document.createElement('ul');
          subList.className = 'toc-sublist';
          
          h3Elements.forEach((h3, h3Index) => {
            if (!h3.id) {
              h3.id = `section-${index + 1}-${h3Index + 1}`;
            }
            
            const subItem = document.createElement('li');
            subItem.className = 'toc-subitem';
            
            const subLink = document.createElement('a');
            subLink.className = 'toc-sublink';
            subLink.href = `#${h3.id}`;
            subLink.textContent = h3.textContent;
            
            subItem.appendChild(subLink);
            subList.appendChild(subItem);
            
            this.headings.push({
              id: h3.id,
              element: h3,
              link: subLink,
              isSubheading: true
            });
          });
          
          tocItem.appendChild(subList);
        }
      }

      tocList.appendChild(tocItem);
      
      this.headings.push({
        id: h2.id,
        element: h2,
        link: tocLink,
        isSubheading: false
      });
    });

    // モバイル用トグルボタンを作成
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toc-toggle';
    toggleButton.innerHTML = '<i class="fas fa-list"></i>';
    toggleButton.setAttribute('aria-label', '目次を開く');

    // オーバーレイを作成
    const overlay = document.createElement('div');
    overlay.className = 'toc-overlay';

    // DOMに追加
    document.body.appendChild(tocContainer);
    document.body.appendChild(toggleButton);
    document.body.appendChild(overlay);

    this.tocContainer = tocContainer;
    this.tocList = tocList;

    // モバイルイベント
    toggleButton.addEventListener('click', () => {
      tocContainer.classList.toggle('show');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
      tocContainer.classList.remove('show');
      overlay.classList.remove('show');
    });
  }

  setupEventListeners() {
    // スクロールイベント
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.updateActiveSection();
        this.updateProgressBar();
      }, 50);
    });

    // クリックイベント（スムーズスクロール）
    if (this.tocList) {
      this.tocList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const offset = 20;
            const targetPosition = targetElement.offsetTop - offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });

            // モバイルでは目次を閉じる
            if (window.innerWidth < 992) {
              this.tocContainer.classList.remove('show');
              document.querySelector('.toc-overlay').classList.remove('show');
            }
          }
        }
      });
    }

    // リサイズイベント
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        this.tocContainer.classList.remove('show');
        document.querySelector('.toc-overlay').classList.remove('show');
      }
    });
  }

  updateActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    let activeHeading = null;
    
    for (let i = this.headings.length - 1; i >= 0; i--) {
      const heading = this.headings[i];
      const headingTop = heading.element.offsetTop;
      
      if (scrollPosition >= headingTop) {
        activeHeading = heading;
        break;
      }
    }

    // アクティブな項目を更新
    this.headings.forEach(heading => {
      heading.link.classList.remove('active');
    });

    if (activeHeading) {
      activeHeading.link.classList.add('active');
      
      // 親要素もアクティブにする
      if (activeHeading.isSubheading) {
        const parentIndex = this.headings.findIndex(h => 
          !h.isSubheading && h.element.offsetTop <= activeHeading.element.offsetTop
        );
        if (parentIndex !== -1 && parentIndex > 0) {
          this.headings[parentIndex - 1].link.classList.add('active');
        }
      }
    }
  }

  initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
  }

  updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = scrolled / documentHeight;
    
    const progressBar = document.querySelector('.reading-progress');
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
  }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
  new TableOfContents();
});