/**
 * 再利用可能なUIコンポーネント
 * Reusable UI Components
 */

// ========================================
// コンポーネント初期化
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // 各コンポーネントの初期化
  initChecklistComponent();
  initCopyButtons();
  initAccordions();
  initTabs();
  initTooltips();
  initModals();
  initAlertDismiss();
});

// ========================================
// チェックリストコンポーネント
// ========================================

function initChecklistComponent() {
  // チェックボックスの状態を保存
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  
  checkboxes.forEach((checkbox, index) => {
    // ページごとにユニークなキーを生成
    const pageKey = window.location.pathname.split('/').pop().replace('.html', '');
    const storageKey = `checklist-${pageKey}-${index}`;
    
    // 保存された状態を復元
    if (localStorage.getItem(storageKey) === 'true') {
      checkbox.checked = true;
    }
    
    // 状態変更時に保存
    checkbox.addEventListener('change', function() {
      localStorage.setItem(storageKey, this.checked);
      
      // プログレスバーがあれば更新
      updateChecklistProgress(checkbox.closest('.checklist'));
    });
  });
  
  // 初期プログレス表示
  document.querySelectorAll('.checklist').forEach(checklist => {
    updateChecklistProgress(checklist);
  });
}

function updateChecklistProgress(checklist) {
  if (!checklist) return;
  
  const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
  const checked = checklist.querySelectorAll('input[type="checkbox"]:checked');
  const progress = (checked.length / checkboxes.length) * 100;
  
  // プログレスバーがあれば更新
  const progressBar = checklist.querySelector('.checklist-progress');
  if (progressBar) {
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
  }
  
  // プログレステキストがあれば更新
  const progressText = checklist.querySelector('.checklist-progress-text');
  if (progressText) {
    progressText.textContent = `${checked.length} / ${checkboxes.length} 完了`;
  }
}

// ========================================
// コピーボタンコンポーネント
// ========================================

function initCopyButtons() {
  // data-copy属性を持つボタンを全て初期化
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-copy');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        copyToClipboard(targetElement.textContent);
        showCopyFeedback(this);
      }
    });
  });
  
  // コードブロック内の自動コピーボタン生成
  document.querySelectorAll('pre code').forEach(codeBlock => {
    if (!codeBlock.parentElement.querySelector('.copy-btn')) {
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = '<i class="fas fa-copy"></i> コピー';
      copyBtn.onclick = function() {
        copyToClipboard(codeBlock.textContent);
        showCopyFeedback(this);
      };
      codeBlock.parentElement.style.position = 'relative';
      codeBlock.parentElement.appendChild(copyBtn);
    }
  });
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function showCopyFeedback(button) {
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-check"></i> コピー完了';
  button.classList.add('btn-success');
  
  setTimeout(() => {
    button.innerHTML = originalText;
    button.classList.remove('btn-success');
  }, 2000);
}

// ========================================
// アコーディオンコンポーネント
// ========================================

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const accordion = this.parentElement;
      const content = accordion.querySelector('.accordion-content');
      const icon = this.querySelector('.accordion-icon');
      
      // トグル処理
      accordion.classList.toggle('active');
      
      if (accordion.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(90deg)';
      } else {
        content.style.maxHeight = '0';
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

// ========================================
// タブコンポーネント
// ========================================

function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('.tab-button');
    const contents = tabContainer.querySelectorAll('.tab-content');
    
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
        // 全てのタブを非アクティブに
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // クリックされたタブをアクティブに
        tab.classList.add('active');
        if (contents[index]) {
          contents[index].classList.add('active');
        }
      });
    });
  });
}

// ========================================
// ツールチップコンポーネント
// ========================================

function initTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', function() {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = this.getAttribute('data-tooltip');
      
      document.body.appendChild(tooltip);
      
      const rect = this.getBoundingClientRect();
      tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
      tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
      
      this.tooltipElement = tooltip;
    });
    
    element.addEventListener('mouseleave', function() {
      if (this.tooltipElement) {
        document.body.removeChild(this.tooltipElement);
        delete this.tooltipElement;
      }
    });
  });
}

// ========================================
// モーダルコンポーネント
// ========================================

function initModals() {
  // モーダルトリガーの設定
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        openModal(modal);
      }
    });
  });
  
  // モーダル閉じるボタン
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
  
  // 背景クリックで閉じる
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this);
      }
    });
  });
}

function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ========================================
// アラート自動消去
// ========================================

function initAlertDismiss() {
  document.querySelectorAll('.alert-dismissible').forEach(alert => {
    // 閉じるボタンを追加
    const closeBtn = document.createElement('button');
    closeBtn.className = 'alert-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = function() {
      alert.style.opacity = '0';
      setTimeout(() => alert.remove(), 300);
    };
    alert.appendChild(closeBtn);
    
    // 自動消去（オプション）
    if (alert.hasAttribute('data-auto-dismiss')) {
      const delay = parseInt(alert.getAttribute('data-auto-dismiss')) || 5000;
      setTimeout(() => {
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 300);
      }, delay);
    }
  });
}

// ========================================
// ユーティリティ関数
// ========================================

/**
 * 要素をスムーズにスクロール
 */
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

/**
 * デバウンス関数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * スロットル関数
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ========================================
// エクスポート（必要に応じて）
// ========================================

window.UIComponents = {
  initChecklistComponent,
  initCopyButtons,
  initAccordions,
  initTabs,
  initTooltips,
  initModals,
  initAlertDismiss,
  copyToClipboard,
  showCopyFeedback,
  openModal,
  closeModal,
  smoothScrollTo,
  debounce,
  throttle
};