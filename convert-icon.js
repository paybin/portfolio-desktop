const sharp = require('sharp');
const fs = require('fs');

sharp('icon.svg')
    .resize(400, 400) // Resize to smaller dimension (approx 78% of 512)
    .extend({
        top: 56,
        bottom: 56,
        left: 56,
        right: 56,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
    })
    .flatten({ background: { r: 0, g: 0, b: 0 } }) // Ensure background is black
    .png()
    .toFile('icon.png')
    .then(function (info) {
        console.log('Icon converted successfully');
    })
    .catch(function (err) {
        console.log('Error converting icon: ' + err);
    });
