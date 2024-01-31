class HamburguerWithCocaCola {
  typeHamburguer: string;

  constructor(typeHamburguer: string) {
    this.typeHamburguer = typeHamburguer;
  }

  getDescrition() {
    return `Hamburguer ${this.typeHamburguer} with Coca Cola`;
  }
} 

class HamburguerWithLemonade {
  typeHamburguer: string;

  constructor(typeHamburguer: string) {
    this.typeHamburguer = typeHamburguer;
  }

  getDescrition() {
    return `Hamburguer ${this.typeHamburguer} with Lemonade`;
  }
} 

class HamburguerWithFrenchFries {
  typeHamburguer: string;

  constructor(typeHamburguer: string) {
    this.typeHamburguer = typeHamburguer;
  }

  getDescrition() {
    return `Hamburguer ${this.typeHamburguer} with French Fries`;
  }
} 

const makeMenuWithoutOpenClosed = () => {
  const hamburguerWithCocaCola = new HamburguerWithCocaCola('Classic Hamburguer');
  const hamburguerWithLemonade = new HamburguerWithLemonade('Classic Hamburguer');
  const hamburguerWithFrenchFries = new HamburguerWithFrenchFries('Classic Hamburguer');
  
  console.log("Menu without Open Closed Principle");
  console.log("1. Hamburguer with Coca Cola");
  console.log(`we have ${hamburguerWithCocaCola.getDescrition()}`);
  console.log("2. Hamburguer with Lemonade");
  console.log(`we have ${hamburguerWithLemonade.getDescrition()}`);
  console.log("3. Hamburguer with French Fries");
  console.log(`we have ${hamburguerWithFrenchFries.getDescrition()}`);

}

makeMenuWithoutOpenClosed();

class Hamburguer {
  typeHamburguer: string;
  combo: Combo;
  constructor(typeHamburguer: string, combo: Combo) {
    this.typeHamburguer = typeHamburguer;
    this.combo = combo;
  }
}

interface Combo {
  getDescrition(typeHamburguer: string): string;
}

class HamburguerWithCocaColaOC implements Combo {
  getDescrition(typeHamburguer: string) {
    return `Hamburguer ${typeHamburguer} with Coca Cola`;
  }
}

class HamburguerWithLemonadeOC implements Combo {
  getDescrition(typeHamburguer: string) {
    return `Hamburguer ${typeHamburguer} with Lemonade`;
  }
}

class HamburguerWithFrenchFriesOC implements Combo {
  getDescrition(typeHamburguer: string) {
    return `Hamburguer ${typeHamburguer} with French Fries`;
  }
}

const makeMenuWithOpenClosed = () => {
  const hamburguerWithCocaCola = new Hamburguer('Classic Hamburguer', new HamburguerWithCocaColaOC());
  const hamburguerWithLemonade = new Hamburguer('Classic Hamburguer', new HamburguerWithLemonadeOC());
  const hamburguerWithFrenchFries = new Hamburguer('Classic Hamburguer', new HamburguerWithFrenchFriesOC());
  
  console.log("Menu with Open Closed Principle");
  console.log("1. Hamburguer with Coca Cola");
  console.log(`we have ${hamburguerWithCocaCola.combo.getDescrition(hamburguerWithCocaCola.typeHamburguer)}`);
  console.log("2. Hamburguer with Lemonade");
  console.log(`we have ${hamburguerWithLemonade.combo.getDescrition(hamburguerWithLemonade.typeHamburguer)}`);
  console.log("3. Hamburguer with French Fries");
  console.log(`we have ${hamburguerWithFrenchFries.combo.getDescrition(hamburguerWithFrenchFries.typeHamburguer)}`);
}

console.log('--------------------------------------------------------------------------')

makeMenuWithOpenClosed();