import { distance } from './Utilities'

export default class Snake {
	canvas = {
		ctx: null,
		widht: null,
		height: null
	}
	vector = {
		x: null,
		y: null
	}
	dx = null
	dy = null
	scale = null
	total = null
	currentDirection = null

	constructor(ctx, width, height, x, y, scale) {
		this.canvas = {
			ctx, width, height
		}
		this.vector = {
			x, y
		}

		this.scale = scale
		this.tail = []
		this.dx = 1
		this.dy = 0
		this.total = 5
	}

	controller(e) {
  	let key = e.keyCode ? e.keyCode : e.which

		switch(key) {
			case 37:
				if(this.currentDirection != "right") {
					this.dx = -1
					this.dy = 0
					this.currentDirection = "left"
				}
			break
			case 38:
				if(this.currentDirection != "down") {
					this.dx = 0
					this.dy = -1
					this.currentDirection = "up"
				}
			break
			case 39:
				if(this.currentDirection != "left") {
					this.dx = 1
					this.dy = 0
					this.currentDirection = "right"
				}
			break
			case 40:
				if(this.currentDirection != "up") {
					this.dx = 0
					this.dy = 1
					this.currentDirection = "down"
				}
			break
		}  	
  }

  eat(food) {
  	if(distance(this.vector.x, food.x) < 1 && distance(this.vector.y, food.y) < 1){
  		this.total++
  		return true
  	}
  }

  death(game) {
    this.tail.forEach(tail => {
      if(this.vector.x === tail.x && this.vector.y === tail.y) {
        game.reset()
      }
    })
  }

	update() {
		// add current possition as first unit of the tail array
		this.tail.splice(0, 0, {x: this.vector.x, y: this.vector.y}) 

		// check if tail is filled, if too large, remove last tail segment
		if (this.total < this.tail.length - 1) {
			this.tail = this.tail.slice(0, this.total + 1)
		}

		// updates Snake head
		this.vector.x += this.dx 
		this.vector.y += this.dy
		
		// boundary control
		if (this.vector.x * this.scale + this.scale > this.canvas.width) {
			this.vector.x = 0
		} else if (this.vector.x < 0) {
			this.vector.x = this.canvas.width / this.scale
		}
		if (this.vector.y * this.scale + this.scale > this.canvas.height) {
			this.vector.y = 0
		} else if (this.vector.y < 0) {
			this.vector.y = this.canvas.height / this.scale
		}

		// calls draw method for next frame of snake
		this.draw();
	}

	draw() {
	// draws tail of snake
		for(let i = 0; i < this.tail.length; i++) {
			this.canvas.ctx.fillStyle = "#00ff00"
			this.canvas.ctx.fillRect(this.tail[i].x * this.scale , this.tail[i].y * this.scale, this.scale - 2, this.scale - 2)
		}
	// draw head of snake
		this.canvas.ctx.fillStyle = "#00ff00"
		this.canvas.ctx.fillRect(this.vector.x * this.scale, this.vector.y * this.scale, this.scale -2, this.scale -2)
	}

  registerEventListeners () {
		addEventListener("keyup", event => {
			this.controller(event)
    })
	}
}
