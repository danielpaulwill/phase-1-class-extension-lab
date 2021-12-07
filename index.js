class Polygon {
  constructor(array) {
    this.array = array
  }
get countSides() {
  let sides = this.array.length
  return sides
}
get perimeter() {
  const reducer = (previousValue, currentValue) => previousValue + currentValue
  let perimeterLength = this.array.reduce(reducer)
  return perimeterLength
}}

class Triangle extends Polygon {
  get isValid() {
    if ((this.array[0] + this.array[1] > this.array[2]) && (this.array[0] + this.array[2] > this.array[1]) && (this.array[1] + this.array[2] > this.array[0])) {
      return true
    } else return false
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]) {
      return true
    } else return false
  }
  get area() {
    return this.array[0] * this.array[1]
  }
}