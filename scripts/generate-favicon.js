const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '../public/logo.png');
    const outputPath = path.join(__dirname, '../public/favicon.ico');

    // Générer un favicon 32x32
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFormat('png')
      .toFile(outputPath.replace('.ico', '-32.png'));

    // Générer un favicon 16x16
    await sharp(inputPath)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFormat('png')
      .toFile(outputPath.replace('.ico', '-16.png'));

    console.log('✅ Favicons générés avec succès !');
    console.log('📁 Fichiers créés :');
    console.log('   - favicon-16.png');
    console.log('   - favicon-32.png');
    console.log('\n💡 Note: Les navigateurs modernes acceptent les fichiers PNG.');
    console.log('   Vous pouvez renommer favicon-32.png en favicon.ico si nécessaire.');

  } catch (error) {
    console.error('❌ Erreur lors de la génération du favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
