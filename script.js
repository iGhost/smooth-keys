(function(){
	this.keys = [];
	this.canvas = document.getElementById('canvas');
	this.box = document.getElementById('box');
	this.position = {
		top:  100,
		left: 100
	};
	this.step = 3;
	var mainLoop;

	this.keyDownHandler = function(e) {
		if (!e) { e = window.event; }
		self.keys[e.keyCode] = true;
	};

	this.keyUpHandler = function(e) {
		if (!e) { e = window.event; }
		self.keys[e.keyCode] = false;
//		console.log('Key released [ ' + e.keyCode + ' ]');
	};

	this.keyboardHandler = function() {
		if (self.keys[27] == true) {
			clearInterval(mainLoop);
		}
		if (self.keys[38] == true) {
			self.position['top'] -= self.step;
			this.moveBox();
		}
		if (self.keys[40] == true) {
			self.position['top'] += self.step;
			this.moveBox();
		}
		if (self.keys[37] == true) {
			self.position['left'] -= self.step;
			this.moveBox();
		}
		if (self.keys[39] == true) {
			self.position['left'] += self.step;
			this.moveBox();
		}
	};

	this.moveBox = function() {
		self.box.style.top  = self.position['top']  + 'px';
		self.box.style.left = self.position['left'] + 'px';
	};

	this.loop = function() {
		this.keyboardHandler();
	};

	console.log('Started!');
	document.onkeydown = this.keyDownHandler;
	document.onkeyup   = this.keyUpHandler;

	mainLoop = setInterval(this.loop, 20);
}());
