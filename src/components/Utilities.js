export function numberBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomArrayItem (array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function distance (val1, val2) {
	return Math.abs(val1 - val2)
}