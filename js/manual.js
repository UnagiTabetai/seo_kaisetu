// SEOマニュアル用JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // スムーズスクロール
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // スクロール時のナビゲーションハイライト
  const sections = document.querySelectorAll('.manual-section, #intro');
  const navLinks = document.querySelectorAll('.nav-content a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // トップへ戻るボタン
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #667eea;
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    display: none;
    z-index: 1000;
    transition: all 0.3s;
  `;
  
  document.body.appendChild(scrollTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // アクティブなナビゲーションリンクのスタイル
  const style = document.createElement('style');
  style.textContent = `
    .nav-content a.active {
      background: #667eea;
      color: white;
    }
    
    .scroll-top-btn:hover {
      background: #5a67d8 !important;
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);
});