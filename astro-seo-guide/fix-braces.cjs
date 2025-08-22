#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 全ての.astroファイルの波括弧を修正
const pagesDir = path.join(__dirname, 'src', 'pages', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // <style>タグ内は除外して、他の{と}をエスケープ
  const styleRegex = /<style>([\s\S]*?)<\/style>/g;
  const styles = [];
  let match;
  
  // スタイルを一時的に保存
  while ((match = styleRegex.exec(content)) !== null) {
    styles.push(match[0]);
  }
  
  // スタイルを一時的にプレースホルダーに置き換え
  content = content.replace(styleRegex, '___STYLE_PLACEHOLDER___');
  
  // import文とLayout/Navigation/Footer以外の波括弧をエスケープ
  const lines = content.split('\n');
  const processedLines = lines.map(line => {
    // import文、Layout、Navigation、Footer、styleプレースホルダーは除外
    if (line.includes('import ') || 
        line.includes('<Layout') || 
        line.includes('<Navigation') || 
        line.includes('<Footer') ||
        line.includes('___STYLE_PLACEHOLDER___') ||
        line.trim().startsWith('---')) {
      return line;
    }
    
    // 波括弧をHTMLエンティティに変換
    return line.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
  });
  
  content = processedLines.join('\n');
  
  // スタイルを戻す
  styles.forEach(style => {
    content = content.replace('___STYLE_PLACEHOLDER___', style);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Fixed ${file}`);
});

console.log('\nAll files processed!');