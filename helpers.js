//Define la pantalla para el juego
function Screen(width, height){
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.ctx = this.canvas.getContext("2d");

	document.body.appendChild(this.canvas);
};

//Borra la pantalla (para usar antes de cada frame)
Screen.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
};

//Dibuja un sprite
Screen.prototype.drawSprite = function(sp, x, y) {
	this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};

//Sprite
function Sprite(img, x, y, w, h){
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};

//Input Handler
function inputHandler(){
	this.down = {};
	this.pressed = {};

	var _this = this;
	document.addEventListener("keydown", function(evt){
		_this.down[evt.keyCode] = true;
	});

	document.addEventListener("keyup", function(evt){
		delete _this.down[evt.keyCode];
		delete _this.pressed[evt.keyCode];
	});
};

inputHandler.prototype.isDown = function(code){
	return this.down[code];
};

inputHandler.prototype.isPressed = function(code){
	if (this.pressed[code]){
		return false;
	}
	else if (this.down[code]){
		return this.pressed[code] = true;
	}
	return false;
};

function generateMap(){
	var map = [];
	var probability = 0.7;
	for (var i = 0; i < 16; i++) {
		map[i] = [];
		for (var j = 0; j < 16; j++) {
			if(probability > 0.5){
				probability += (Math.random()-0.5)*0.2;
			}
			else{
				probability = 0.6;
			}
			if(probability > 2){
				probability = 1.9;
			}
			map[i][j] = (Math.round(Math.random()*probability));
		};
	};
	return map;
}