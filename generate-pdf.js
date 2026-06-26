/**
 * ============================================================
 * CV PREMIUM — PDF Generator con Puppeteer
 * Genera: Rodrigo_Artero_CV_2026.pdf
 * Formato: A4 · printBackground true · margin 0
 * ============================================================
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  const htmlPath = path.resolve(__dirname, 'index.html');
  const outputPath = path.resolve(__dirname, 'Rodrigo_Artero_CV_2026.pdf');

  console.log('Iniciando generación de PDF...');
  console.log(`Archivo HTML: ${htmlPath}`);
  console.log(`Archivo de salida: ${outputPath}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--font-render-hinting=none'
    ]
  });

  const page = await browser.newPage();

  // Cargar el HTML local
  await page.goto(`file://${htmlPath}`, {
    waitUntil: 'networkidle0',
    timeout: 60000
  });

  // Esperar a que las fuentes estén cargadas
  await page.evaluateHandle('document.fonts.ready');
  await page.waitForTimeout(1000);

  // Generar el PDF
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    preferCSSPageSize: true,
    displayHeaderFooter: false
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  const fileSizeKB = (stats.size / 1024).toFixed(1);

  console.log(`\n✓ PDF generado exitosamente: ${outputPath}`);
  console.log(`  Tamaño: ${fileSizeKB} KB`);
}

generatePDF().catch((err) => {
  console.error('Error al generar el PDF:', err);
  process.exit(1);
});
