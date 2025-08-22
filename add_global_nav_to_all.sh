#!/bin/bash

# グローバルナビゲーションHTMLを定義
NAV_HTML='  <!-- Global Navigation -->
  <nav class="global-nav">
    <div class="nav-container">
      <a href="../index.html" class="nav-logo">
        <i class="fas fa-chart-line"></i>
        <span>SEOマスターガイド</span>
      </a>
      
      <button class="mobile-menu-toggle" id="mobileMenuToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div class="nav-menu" id="navMenu">
        <div class="nav-item dropdown">
          <a href="#" class="nav-link">基礎編 <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="../pages/seo-basics.html">SEO基礎知識</a>
            <a href="../pages/keyword-strategy.html">キーワード戦略</a>
            <a href="../pages/article-creation.html">記事作成実践</a>
          </div>
        </div>
        
        <div class="nav-item dropdown">
          <a href="#" class="nav-link">応用編 <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="../pages/ai-utilization.html">AI活用術</a>
            <a href="../pages/templates.html">実践プロンプト集</a>
            <a href="../pages/practice.html">実践演習</a>
          </div>
        </div>
        
        <div class="nav-item dropdown">
          <a href="#" class="nav-link">最新戦略 <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="../pages/topical-authority.html">トピカルオーソリティ</a>
            <a href="../pages/serp-optimization.html">SERP最適化</a>
            <a href="../pages/zero-click-era.html">ゼロクリック対策</a>
          </div>
        </div>
        
        <div class="nav-item dropdown">
          <a href="#" class="nav-link">リソース <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="../pages/glossary.html">用語集</a>
            <a href="../pages/checklist.html">チェックリスト</a>
            <a href="../pages/resources.html">ダウンロード</a>
            <a href="../pages/faq.html">よくある質問</a>
            <a href="../pages/tools.html">ツール一覧</a>
            <a href="../pages/updates.html">最新情報</a>
          </div>
        </div>
        
        <a href="../seo-manual.html" class="nav-cta">完全マニュアル</a>
      </div>
    </div>
  </nav>
'

# 対象ファイルのリスト
FILES=(
  "pages/keyword-strategy.html"
  "pages/article-creation.html"
  "pages/ai-utilization.html"
  "pages/templates.html"
  "pages/practice.html"
  "pages/topical-authority.html"
  "pages/serp-optimization.html"
  "pages/zero-click-era.html"
  "pages/glossary.html"
  "pages/checklist.html"
  "pages/resources.html"
)

for file in "${FILES[@]}"; do
  echo "Processing: $file"
  
  # すでにglobal-navがある場合はスキップ
  if grep -q 'class="global-nav"' "$file"; then
    echo "  Already has global-nav, skipping..."
    continue
  fi
  
  # <body>タグの直後にナビゲーションを挿入
  # 一時ファイルを作成
  temp_file="${file}.tmp"
  
  # sedでbodyタグの後にナビゲーションを挿入
  awk -v nav="$NAV_HTML" '
    /<body>/ {
      print $0
      print nav
      next
    }
    { print }
  ' "$file" > "$temp_file"
  
  # 元のファイルを置き換え
  mv "$temp_file" "$file"
  
  echo "  Added global navigation to $file"
done

echo "All files processed!"