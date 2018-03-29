import Snake from './Snake'
import Food from './Food'

export default class Game {
	canvas = {
    ctx: null,
    width: null,
    height: null
  }
  snake = null
  food = null
  fps = null
  then = null
  fpsInterval = null
  startTime = null
  scale = null

  constructor(ctx, width, height) {
  	this.canvas = {
  		ctx, width, height
  	}
  	this.fps = 8
    this.scale = 10
  }

  startAnimating(fps) {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.animate();
  }

  animate() {
    // request another frame
    requestAnimationFrame(this.animate.bind(this));

    // calc elapsed time since last loop
    let now = Date.now();
    let elapsed = now - this.then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > this.fpsInterval) {

      // Get ready for next frame by setting then=now, but...
      // Also, adjust for fpsInterval not being multiple of 1000/fps
      this.then = now - (elapsed % this.fpsInterval);
        
      // clears background
      this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // updates snake
      this.snake.update()
      
      // draws food
      this.food.draw()
      // checks if snake is on food
      if (this.snake.eat(this.food)) {
        this.food = new Food(this.canvas.ctx, this.canvas.width, this.canvas.height, this.scale)
      }
    }
  }

  init() {
    /**
      initiate a snake
      params: ctx, width, height, x start, y start, blocksize
    **/
    this.snake = new Snake(this.canvas.ctx, this.canvas.width, this.canvas.height, 10, 10, this.scale)

    /** 
      initiate some food
      params: ctx, width, height, scale
    **/
    this.food = new Food(this.canvas.ctx, this.canvas.width, this.canvas.height, this.scale)
    
    // start game
    this.startAnimating(this.fps)
    
    // register arrow key inputs
    this.snake.registerEventListeners()
    
  }
}
