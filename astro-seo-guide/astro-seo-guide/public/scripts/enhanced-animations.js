// Enhanced Animations - sample.htmlから抽出したアニメーション効果

document.addEventListener('DOMContentLoaded', function() {
  
  // スクロール時のヘッダー効果
  const stickyNav = document.querySelector('.sticky-nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (stickyNav) {
      if (currentScroll > 100) {
        stickyNav.classList.add('scrolled');
      } else {
        stickyNav.classList.remove('scrolled');
      }
      
      // スクロール方向による表示/非表示
      if (currentScroll > lastScroll && currentScroll > 300) {
        stickyNav.style.transform = 'translateY(-100%)';
      } else {
        stickyNav.style.transform = 'translateY(0)';
      }
    }
    
    lastScroll = currentScroll;
  });
  
  // フェードインスクロールアニメーション
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // スクロールアニメーション対象要素の監視
  document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
  });
  
  // カード要素にフェードインクラスを自動追加
  document.querySelectorAll('.enhanced-card').forEach((card, index) => {
    card.classList.add('fade-in-scroll');
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // リップル効果（ボタンクリック時）
  document.querySelectorAll('.enhanced-button').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // パララックス効果
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // タイピングアニメーション
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
  
  // タイピングアニメーションの適用
  document.querySelectorAll('[data-typing]').forEach(element => {
    const text = element.textContent;
    const speed = parseInt(element.dataset.typingSpeed) || 100;
    
    // 要素が画面に表示されたら開始
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter(element, text, speed);
          observer.unobserve(element);
        }
      });
    });
    
    observer.observe(element);
  });
  
  // カウントアップアニメーション
  function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      
      element.textContent = Math.floor(current).toLocaleString();
    }, 16);
  }
  
  // カウンターアニメーションの適用
  document.querySelectorAll('[data-counter]').forEach(element => {
    const end = parseInt(element.dataset.counter);
    const duration = parseInt(element.dataset.counterDuration) || 2000;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(element, 0, end, duration);
          observer.unobserve(element);
        }
      });
    });
    
    observer.observe(element);
  });
  
  // 画像の遅延読み込み
  const lazyImages = document.querySelectorAll('img[data-lazy]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.lazy;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
  
  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offset = 100;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // トースト通知機能
  window.showToast = function(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  };
  
  // マウスカーソル追従効果
  const cursorFollower = document.createElement('div');
  cursorFollower.className = 'cursor-follower';
  document.body.appendChild(cursorFollower);
  
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    const speed = 0.1;
    
    followerX += (mouseX - followerX) * speed;
    followerY += (mouseY - followerY) * speed;
    
    cursorFollower.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`;
    
    requestAnimationFrame(animateCursor);
  }
  
  // カーソル追従を無効化する場合はコメントアウト
  // animateCursor();
  
  // ページ読み込み完了時のアニメーション
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
  
  // ===== sample_top.htmlから抽出した追加機能 =====
  
  // スライダー機能
  function initSlider() {
    const sliders = document.querySelectorAll('.hero-slider');
    
    sliders.forEach(slider => {
      const container = slider.querySelector('.slider-container');
      const items = slider.querySelectorAll('.slider-item');
      const dots = slider.querySelector('.slider-dots');
      let currentIndex = 0;
      let autoPlayInterval;
      
      if (!container || items.length === 0) return;
      
      // ドット作成
      if (dots) {
        items.forEach((_, index) => {
          const dot = document.createElement('span');
          dot.className = 'slider-dot';
          if (index === 0) dot.classList.add('active');
          dot.addEventListener('click', () => goToSlide(index));
          dots.appendChild(dot);
        });
      }
      
      function goToSlide(index) {
        currentIndex = index;
        container.style.transform = `translateX(-${index * 100}%)`;
        
        // ドット更新
        if (dots) {
          dots.querySelectorAll('.slider-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
          });
        }
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        goToSlide(currentIndex);
      }
      
      // 自動再生
      function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
      }
      
      function stopAutoPlay() {
        clearInterval(autoPlayInterval);
      }
      
      // マウスホバーで自動再生停止
      slider.addEventListener('mouseenter', stopAutoPlay);
      slider.addEventListener('mouseleave', startAutoPlay);
      
      // タッチ/スワイプ対応
      let touchStartX = 0;
      let touchEndX = 0;
      
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });
      
      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });
      
      function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
          nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          goToSlide(currentIndex);
        }
      }
      
      startAutoPlay();
    });
  }
  
  // 順次フェードインアニメーション
  function initSequentialFadeIn() {
    const elements = document.querySelectorAll('.fade-in-sequence');
    
    const sequenceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sequenceObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => sequenceObserver.observe(el));
  }
  
  // スクロールリビール効果（拡張版）
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    
    reveals.forEach(el => revealObserver.observe(el));
  }
  
  // リッチメニューのホバー効果
  function initRichMenu() {
    const menuItems = document.querySelectorAll('.rich-menu-item');
    
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
      });
      
      item.addEventListener('mouseleave', function() {
        setTimeout(() => {
          this.style.zIndex = '';
        }, 300);
      });
    });
  }
  
  // ピックアップカードのアニメーション
  function initPickupCards() {
    const cards = document.querySelectorAll('.pickup-card');
    
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('fade-in-sequence');
    });
  }
  
  // デザインタイトルのアニメーション
  function animateDesignTitles() {
    const titles = document.querySelectorAll('.design-title');
    
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const main = entry.target.querySelector('.design-title-main');
          const sub = entry.target.querySelector('.design-title-sub');
          
          if (sub) {
            sub.style.animation = 'fadeInDown 0.6s ease-out';
          }
          if (main) {
            main.style.animation = 'fadeInDown 0.8s ease-out 0.2s both';
          }
          
          titleObserver.unobserve(entry.target);
        }
      });
    });
    
    titles.forEach(title => titleObserver.observe(title));
  }
  
  // 初期化
  initSlider();
  initSequentialFadeIn();
  initScrollReveal();
  initRichMenu();
  initPickupCards();
  animateDesignTitles();
  
  console.log('Enhanced animations initialized with sample_top.html features');
});

// リップル効果用のCSS（動的に追加）
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .cursor-follower {
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    opacity: 0.5;
    display: none; /* デフォルトでは非表示 */
  }
  
  body.loaded {
    animation: fadeIn 0.5s ease-out;
  }
  
  img.loaded {
    animation: fadeIn 0.5s ease-out;
  }
`;
document.head.appendChild(style);