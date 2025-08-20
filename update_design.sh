#!/bin/bash

# design-system.cssを全ページに適用し、古いCSSを置き換えるスクリプト

echo "Updating all HTML files with new design system..."

# index.htmlの更新
echo "Updating index.html..."
sed -i.bak 's|<link rel="stylesheet" href="styles/typography.css">|<!-- Typography CSS replaced by design-system -->|' index.html
sed -i.bak2 's|<link rel="stylesheet" href="styles/navigation.css">|<link rel="stylesheet" href="styles/design-system.css">|' index.html

# pagesディレクトリの全HTMLファイルを更新
for file in pages/*.html; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # typography.cssとnavigation.cssをdesign-system.cssに置き換え
    sed -i.bak 's|<link rel="stylesheet" href="../styles/typography.css">|<!-- Typography CSS replaced by design-system -->|' "$file"
    sed -i.bak2 's|<link rel="stylesheet" href="../styles/navigation.css">|<link rel="stylesheet" href="../styles/design-system.css">|' "$file"
    
    # もしdesign-system.cssがまだ追加されていない場合は追加
    if ! grep -q "design-system.css" "$file"; then
      sed -i.bak3 's|</head>|  <link rel="stylesheet" href="../styles/design-system.css">\n</head>|' "$file"
    fi
    
    echo "  ✓ Updated"
  fi
done

# フッターをまだ持っていないページに追加
echo "Adding footers to pages without them..."
for file in pages/*.html; do
  if [ -f "$file" ]; then
    if ! grep -q '<footer class="footer">' "$file"; then
      echo "  Adding footer to: $file"
      sed -i.bak4 's|</body>|  <footer class="footer">\n    <p>\&copy; 2025 SEO記事作成マスターガイド. All rights reserved.</p>\n    <p>最終更新日: 2025年8月20日</p>\n  </footer>\n</body>|' "$file"
    fi
  fi
done

# バックアップファイルを削除
rm -f *.bak *.bak2 *.bak3 *.bak4
rm -f pages/*.bak pages/*.bak2 pages/*.bak3 pages/*.bak4

# components.jsを追加
echo "Adding components.js to all pages..."
for file in pages/*.html; do
  if [ -f "$file" ]; then
    if ! grep -q "components.js" "$file"; then
      echo "  Adding components.js to: $file"
      sed -i.bak5 's|</body>|  <script src="../js/components.js"></script>\n</body>|' "$file"
    fi
  fi
done

# index.htmlにもcomponents.jsを追加
if ! grep -q "components.js" "index.html"; then
  echo "  Adding components.js to: index.html"
  sed -i.bak6 's|</body>|  <script src="js/components.js"></script>\n</body>|' "index.html"
fi

# バックアップファイルを削除
rm -f *.bak5 *.bak6
rm -f pages/*.bak5

echo "✅ All files updated successfully!"