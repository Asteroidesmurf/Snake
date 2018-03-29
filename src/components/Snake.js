export default class Snake {
	canvas = {
		ctx: null,
		widht: null,
		height: null
	}

	x = null
	y = null
	dx = null
	dy = null
	scale = null

	constructor(ctx, width, height, x, y) {
		this.canvas = {
			ctx, width, height
		}
		this.x = x
		this.y = y
		this.dx = 0
		this.dy = 0
		this.scale = 10
	}

	controller(e) {
  	var key = e.keyCode ?e.keyCode : e.which

		switch(key) {
			case 37:
				this.dx = -1
				this.dy = 0
			break
			case 38:
				this.dx = 0
				this.dy = -1
			break
			case 39:
				this.dx = 1
				this.dy = 0
			break
			case 40:
				this.dx = 0
				this.dy = 1
			break
		}  	
  }

	update() {
		this.x += this.dx * this.scale
		this.y += this.dy * this.scale

		if (this.x + this.scale > this.canvas.width) {
			this.x = 0
		} else if (this.x < 0) {
			this.x = this.canvas.width - this.scale
		}
		if (this.y + this.scale > this.canvas.height) {
			this.y = 0
		} else if (this.y < 0) {
			this.y = this.canvas.height - this.scale
		}
		// calls draw method for next frame of snake
		this.draw();
	}

	draw() {
		this.canvas.ctx.fillStyle = "#00ff00"
		this.canvas.ctx.fillRect(this.x, this.y, this.scale, this.scale)

	}

  registerEventListeners () {
		addEventListener("keyup", event => {
			this.controller(event)
    })
	}
}
