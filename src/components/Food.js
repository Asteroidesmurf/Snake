import { randomArrayItem, numberBetween } from './Utilities'

export default class Snake {
	canvas = {
    ctx: null,
    width: null,
    height: null
  }
	x = null
	y = null
	age = null
	colorArray = [
		"red", "blue", "yellow", "orange"
	]

	constructor(ctx, width, height, scale) {
  	this.canvas = {
  		ctx, width, height
  	}
  	this.scale = scale
		this.x = numberBetween( 0, (this.canvas.width - this.scale) / this.scale )
		this.y = numberBetween( 0, (this.canvas.height - this.scale) / this.scale )
		this.color = randomArrayItem(this.colorArray)
		this.age = 10
	}

	draw() {
		this.canvas.ctx.fillStyle = this.color
		this.canvas.ctx.fillRect(this.x * this.scale, this.y * this.scale, this.scale - 2, this.scale - 2)
		this.age -= 0.1
	}

}
