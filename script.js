(function(){
	this.tickCooldown = 30;
	this.keys = [];
//	this.canvas = document.getElementById('canvas');
	this.box = document.getElementById('box');
	this.position = {
		top:  100,
		left: 100
	};
	this.step = 5;
	var mainLoop;

	this.keyDownHandler = function(e) {
		if (!e) { e = window.event; }
		self.keys[e.keyCode] = true;
//		console.log(e.keyCode);
	};

	this.keyUpHandler = function(e) {
		if (!e) { e = window.event; }
		self.keys[e.keyCode] = false;
	};

	this.setPosition = function(top, left) {
		if (self.position.top + top +50 < window.innerHeight - 2 && self.position.top + top >= 2) {
			self.position['top'] += top;
		}
		if (self.position.left + left +50 < window.innerWidth - 2 && self.position.left + left >= 2) {
			self.position['left'] += left;
		}
		this.moveBox();
	};

	this.keyboardHandler = function() {
		if (self.keys[27] == true) {
			console.log('Stopped!');
			clearInterval(mainLoop);
		}
		if (self.keys[38] == true || self.keys[87] == true) {
			this.setPosition(-self.step, 0);
		}
		if (self.keys[40] == true || self.keys[83] == true) {
			this.setPosition(self.step, 0);
		}
		if (self.keys[37] == true || self.keys[65] == true) {
			this.setPosition(0, -self.step);
		}
		if (self.keys[39] == true || self.keys[68] == true) {
			this.setPosition(0, self.step);
		}
	};

	this.moveBox = function() {
		self.box.style.top  = self.position['top']  + 'px';
		self.box.style.left = self.position['left'] + 'px';
	};

	this.loop = function() {
		this.keyboardHandler();
	};

	document.onkeydown = this.keyDownHandler;
	document.onkeyup   = this.keyUpHandler;

	console.log('Started!');
	mainLoop = setInterval(this.loop, this.tickCooldown);
}());
