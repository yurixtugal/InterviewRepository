class Rectangle {
  constructor(private width: number, private length: number) {}

  public setWidth(width: number) {
    this.width = width;
  }

  public setLength(length: number) {
    this.length = length;
  }

  public getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number) {
    super.setWidth(width);
    super.setLength(width);
  }

  public setLength(length: number) {
    super.setWidth(length);
    super.setLength(length);
  }
}


const rect: Rectangle = new Square(10);
rect.setWidth(20);
console.log(rect.getArea())


interface Shape {
  getArea(): number;
}

class RectangleLP implements Shape {
  constructor(public width: number, public length: number) {}

  public getArea() {
    return this.width * this.length;
  }
}

class SquareLP implements Shape {
  constructor(public size: number) {}

  public getArea() {
    return this.size * this.size;
  }
}

const squareLP: Shape = new SquareLP(10);
console.log(squareLP.getArea());

const rectLP: Shape = new RectangleLP(10, 20);
console.log(rectLP.getArea());