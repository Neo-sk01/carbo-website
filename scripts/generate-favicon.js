const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function generateFavicon() {
  try {
    // Create directory if it doesn't exist
    const faviconDir = path.join(__dirname, '../public/favicon');
    if (!fs.existsSync(faviconDir)) {
      fs.mkdirSync(faviconDir, { recursive: true });
    }

    // Create a canvas
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');

    // Load the SVG image
    const svgPath = path.join(__dirname, '../public/images/carbo logo.svg');
    const img = await loadImage(svgPath);

    // Calculate dimensions to maintain aspect ratio
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    // Draw image
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

    // Save as PNG (since direct .ico creation is complex)
    const pngBuffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(faviconDir, 'favicon.png'), pngBuffer);

    console.log('Favicon generated successfully!');
    console.log('Note: For a proper .ico file, you may want to use a tool like https://favicon.io/favicon-converter/');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 