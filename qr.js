var qr = require('qr-image');
 
var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'png' });

require("fs").writeFile("out.png", svg_string, 'base64', function(err) {
	  console.log(err);
});
