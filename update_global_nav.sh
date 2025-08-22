#!/bin/bash

# 全てのHTMLファイルにグローバルナビコンポーネントを追加するスクリプト

for file in pages/*.html; do
    echo "Processing: $file"
    
    # ファイル名を取得
    filename=$(basename "$file")
    
    # 既にglobal-navコンポーネントがある場合はスキップ
    if grep -q "<global-nav>" "$file"; then
        echo "  ✓ Already has global-nav component"
        continue
    fi
    
    # 古いナビゲーションを削除し、新しいコンポーネントを追加
    if grep -q 'class="global-nav"' "$file"; then
        echo "  → Replacing old navigation with component"
        
        # 一時ファイルを作成
        temp_file="${file}.tmp"
        
        # sedで置換（macOS対応）
        sed -e '/<nav class="global-nav"/,/<\/nav>/d' \
            -e 's/<body>/<body>\n  <!-- グローバルナビゲーション -->\n  <global-nav><\/global-nav>/' \
            "$file" > "$temp_file"
        
        # global-nav-component.jsの読み込みを追加（まだない場合）
        if ! grep -q "global-nav-component.js" "$temp_file"; then
            sed -i '' 's|</body>|  <script src="../js/global-nav-component.js"></script>\n</body>|' "$temp_file"
        fi
        
        # 元のファイルを置き換え
        mv "$temp_file" "$file"
        echo "  ✓ Updated successfully"
    else
        echo "  → Adding global-nav component"
        
        # bodyタグの直後にコンポーネントを追加
        temp_file="${file}.tmp"
        sed 's/<body>/<body>\n  <!-- グローバルナビゲーション -->\n  <global-nav><\/global-nav>/' "$file" > "$temp_file"
        
        # global-nav-component.jsの読み込みを追加
        if ! grep -q "global-nav-component.js" "$temp_file"; then
            sed -i '' 's|</body>|  <script src="../js/global-nav-component.js"></script>\n</body>|' "$temp_file"
        fi
        
        mv "$temp_file" "$file"
        echo "  ✓ Added successfully"
    fi
done

echo "✅ All pages updated!"