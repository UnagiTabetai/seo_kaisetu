#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// HTMLページをAstroに変換する関数
function convertHtmlToAstro(htmlContent, fileName) {
  // タイトルとメタディスクリプションを抽出
  const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
  const descMatch = htmlContent.match(/<meta name="description" content="(.*?)"/);
  const title = titleMatch ? titleMatch[1] : fileName;
  const description = descMatch ? descMatch[1] : '';
  
  // パンくずリストを抽出
  const breadcrumbMatch = htmlContent.match(/<div class="breadcrumb">([\s\S]*?)<\/div>/);
  const breadcrumb = breadcrumbMatch ? breadcrumbMatch[1].trim() : '';
  
  // ヒーローセクションを抽出
  const heroMatch = htmlContent.match(/<div class="hero-section">([\s\S]*?)<\/div>\s*<\/div>/);
  const heroContent = heroMatch ? heroMatch[1] : '';
  
  // コンテンツセクションを抽出（より柔軟なマッチング）
  let contentMatch = htmlContent.match(/<div class="content-section">([\s\S]*?)(<footer|<a href="[^"]*" class="nav-button")/);
  let mainContent = '';
  
  if (contentMatch) {
    mainContent = contentMatch[1];
  } else {
    // content-sectionがない場合、section-cardを探す
    const sectionCards = htmlContent.match(/<div class="section-card"[\s\S]*?<\/div>\s*<\/div>/g);
    if (sectionCards) {
      mainContent = '<div class="section-card">' + sectionCards.join('\n') + '</div>';
    }
  }
  
  // ページ固有のスタイルを抽出
  const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
  const pageStyles = styleMatch ? styleMatch[1] : '';
  
  // テンプレートリテラル内の波括弧をエスケープ
  const escapedMainContent = mainContent.replace(/\$/g, '\\$').replace(/`/g, '\\`');
  const escapedHeroContent = heroContent.replace(/\$/g, '\\$').replace(/`/g, '\\`');
  const escapedBreadcrumb = breadcrumb.replace(/\$/g, '\\$').replace(/`/g, '\\`');
  
  // Astroテンプレートを生成（通常の文字列連結で安全に）
  let astroTemplate = '---\n';
  astroTemplate += "import Layout from '../../layouts/Layout.astro';\n";
  astroTemplate += "import Navigation from '../../components/Navigation.astro';\n";
  astroTemplate += "import Footer from '../../components/Footer.astro';\n";
  astroTemplate += '---\n\n';
  astroTemplate += `<Layout title="${title}" description="${description}">\n`;
  astroTemplate += '  <Navigation />\n\n';
  
  if (breadcrumb) {
    astroTemplate += '  <div class="breadcrumb">\n';
    astroTemplate += '    ' + breadcrumb + '\n';
    astroTemplate += '  </div>\n\n';
  }
  
  astroTemplate += '  <div class="hero-section">\n';
  astroTemplate += '    ' + heroContent + '\n';
  astroTemplate += '  </div>\n\n';
  
  astroTemplate += '  <div class="content-section">\n';
  astroTemplate += '    ' + mainContent.trim() + '\n';
  astroTemplate += '  </div>\n\n';
  
  astroTemplate += '  <Footer />\n';
  astroTemplate += '</Layout>\n';
  
  if (pageStyles) {
    astroTemplate += '\n<style>\n' + pageStyles + '\n</style>';
  }

  return astroTemplate;
}

// メイン処理
async function main() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const outputDir = path.join(__dirname, 'src', 'pages', 'pages');
  
  // 出力ディレクトリを作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // HTMLファイルを取得
  const htmlFiles = fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.html'))
    .filter(file => !file.includes('-old')); // 古いファイルは除外
  
  console.log(`Found ${htmlFiles.length} HTML files to convert`);
  
  // 各ファイルを変換
  for (const file of htmlFiles) {
    const inputPath = path.join(pagesDir, file);
    const outputPath = path.join(outputDir, file.replace('.html', '.astro'));
    
    // すでに変換済みの場合はスキップ
    if (fs.existsSync(outputPath)) {
      console.log(`✓ Skipping ${file} (already converted)`);
      continue;
    }
    
    try {
      const htmlContent = fs.readFileSync(inputPath, 'utf-8');
      const astroContent = convertHtmlToAstro(htmlContent, file.replace('.html', ''));
      
      fs.writeFileSync(outputPath, astroContent);
      console.log(`✓ Converted ${file} → ${file.replace('.html', '.astro')}`);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }
  
  console.log('\nConversion complete!');
  console.log('Next steps:');
  console.log('1. Review the converted files in src/pages/pages/');
  console.log('2. Test each page at http://localhost:4321/pages/[page-name]');
  console.log('3. Make any necessary adjustments');
}

main().catch(console.error);