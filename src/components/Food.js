import { randomArrayItem, numberBetween } from './Utilities'

export default class Snake {
	canvas = {
    ctx: null,
    width: null,
    height: null
  }
	x = null
	y = null
	colorArray = [
		"red", "blue", "yellow"
	]

	constructor(ctx, width, height, scale) {
  	this.canvas = {
  		ctx, width, height
  	}
  	this.scale = scale
		this.x = numberBetween( 0, this.canvas.width / this.scale )	* this.scale
		this.y = numberBetween( 0, this.canvas.height / this.scale )	* this.scale
		this.color = randomArrayItem(this.colorArray)
	}

	draw() {
		this.canvas.ctx.fillStyle = this.color
		this.canvas.ctx.fillRect(this.x, this.y, this.scale, this.scale)
	}

}
