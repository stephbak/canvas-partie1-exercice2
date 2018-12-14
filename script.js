var c = document.getElementById( "house" );
var ctx = c.getContext("2d");
ctx.save();
ctx.translate(200,0);
ctx.fillStyle = "#cd8b2c";
ctx.rotate((Math.PI / 180) * 45);
ctx.fillRect(0,0,240,240);
ctx.clearRect(170, 0, 170, 80);
ctx.clearRect(0, 170, 170, 80)
ctx.restore();


ctx.fillStyle = "#aad5e8";
ctx.fillRect(80,120,240,240);// fillRect(startx, starty, hauteur, largeur)

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(160,280,80,80);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(100,140,60,60);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(240,140,60,60);
