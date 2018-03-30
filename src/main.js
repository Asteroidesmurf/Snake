import Game from './components/Game'

// Setup canvas.
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Set canvas dimensions.
let canvasWidth = 400
let canvasHeight = 400

canvas.width = canvasWidth
canvas.height = canvasHeight

// Start app.
const game = new Game(
  ctx,
  canvasWidth,
  canvasHeight
)

game.init()
