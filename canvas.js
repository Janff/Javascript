//畫橢圓
CanvasRenderingContext2D.prototype.oval = function(x, y, width, height) {
	var k = (width/0.75)/2,
	w = width/2,
	h = height/2;
	this.beginPath();
	this.moveTo(x, y-h);
	this.bezierCurveTo(x+k, y-h, x+k, y+h, x, y+h);
	this.bezierCurveTo(x-k, y+h, x-k, y-h, x, y-h);
	this.closePath();
	return this;
}
