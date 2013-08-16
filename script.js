(function(){
	this.keys = [];
	this.box = document.getElementById('box');
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
		if (this.keys[27]) {
			mainLoop = null;
		}
		if (this.keys[40]) {
			this.box.top += 5
		}

	};

	this.loop = function() {
		this.keyboardHandler();
	};

	console.log('Started!');
	document.onkeydown = this.keyDownHandler;
	document.onkeyup   = this.keyUpHandler;

	mainLoop = setInterval(this.loop, 20);
}());
