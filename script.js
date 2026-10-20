
const car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 220;
car1.driver = {
  name: "Голубчак Павло",
  category: "C",
  "personal limitations": "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

car1.drive = function () {
  console.log("I am not driving at night");
};

const car2 = {
  color: "red",
  maxSpeed: 180,
  driver: {
    name: "Голубчак Павло",
    category: "B",
    "personal limitations": null
  },
  tuning: false,
  "number of accidents": 2
};

car2.drive = function () {
  console.log("I can drive anytime");
};

console.log("Завдання 1.2.3–1.2.6: автомобілі");
console.log("car1:", car1);
car1.drive();
console.log("car2:", car2);
car2.drive();

// ============================================================
// 1.2.7–1.2.10. Конструктор Truck та prototype
// ES6 class syntax тут не використовується.
// ============================================================

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
}

// Метод додає водія конкретному об'єкту Truck.
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

Truck.prototype.trip = function () {
  if (!this.driver) {
    console.log("No driver assigned");
    return;
  }

  const nightMessage = this.driver.nightDriving
    ? "drives at night"
    : "does not drive at night";

  console.log(
    `Driver ${this.driver.name} ${nightMessage} and has ${this.driver.experience} years of experience`
  );
};

const truck1 = new Truck("white", 7500, 82.5, "Volvo", "FH");
const truck2 = new Truck("black", 6200, 75.5, "MAN", "TGX");

console.log("\\nЗавдання 1.2.7–1.2.10: вантажівки");
truck1.trip(); // Перевірка випадку без водія
truck1.AssignDriver("Голубчак Павло", true, 8);
truck2.AssignDriver("Інший водій", false, 5);
console.log("truck1:", truck1);
truck1.trip();
console.log("truck2:", truck2);
truck2.trip();

// ============================================================
// 1.2.12–1.2.24. Класи геометричних фігур з ES6
// ============================================================

class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Square: квадрат має 4 рівні сторони та 4 прямі кути.");
  }

  length() {
    console.log(`Периметр квадрата: ${4 * this.a}`);
  }

  square() {
    console.log(`Площа квадрата: ${this.a ** 2}`);
  }

  info() {
    console.log("Інформація про квадрат:");
    console.log(`Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
    console.log("Кути: 90°, 90°, 90°, 90°");
    console.log(`Периметр: ${4 * this.a}`);
    console.log(`Площа: ${this.a ** 2}`);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log("Rectangle: прямокутник має протилежні рівні сторони та 4 прямі кути.");
  }

  length() {
    console.log(`Периметр прямокутника: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Площа прямокутника: ${this.a * this.b}`);
  }

  info() {
    console.log("Інформація про прямокутник:");
    console.log(`Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
    console.log("Кути: 90°, 90°, 90°, 90°");
    console.log(`Периметр: ${2 * (this.a + this.b)}`);
    console.log(`Площа: ${this.a * this.b}`);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  // Геттери та сеттери для всіх властивостей Rhombus (завдання 1.2.22).
  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  get alpha() {
    return this._alpha;
  }

  set alpha(value) {
    this._alpha = value;
  }

  get beta() {
    return this._beta;
  }

  set beta(value) {
    this._beta = value;
  }

  static help() {
    console.log("Rhombus: ромб має 4 рівні сторони; протилежні кути рівні.");
  }

  length() {
    console.log(`Периметр ромба: ${4 * this.a}`);
  }

  square() {
    const area = this.a ** 2 * Math.sin((this.beta * Math.PI) / 180);
    console.log(`Площа ромба: ${area.toFixed(2)}`);
  }

  info() {
    const area = this.a ** 2 * Math.sin((this.beta * Math.PI) / 180);
    console.log("Інформація про ромб:");
    console.log(`Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
    console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
    console.log(`Периметр: ${4 * this.a}`);
    console.log(`Площа: ${area.toFixed(2)}`);
  }
}

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Parallelogram: паралелограм має попарно паралельні протилежні сторони.");
  }

  length() {
    console.log(`Периметр паралелограма: ${2 * (this.a + this.b)}`);
  }

  square() {
    const area = this.a * this.b * Math.sin((this.beta * Math.PI) / 180);
    console.log(`Площа паралелограма: ${area.toFixed(2)}`);
  }

  info() {
    const area = this.a * this.b * Math.sin((this.beta * Math.PI) / 180);
    console.log("Інформація про паралелограм:");
    console.log(`Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
    console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
    console.log(`Периметр: ${2 * (this.a + this.b)}`);
    console.log(`Площа: ${area.toFixed(2)}`);
  }
}

console.log("\\nЗавдання 1.2.23: статичні методи help");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

console.log("\\nЗавдання 1.2.24: створення фігур та виклик info");
const square1 = new Square(5);
const rectangle1 = new Rectangle(8, 4);
const rhombus1 = new Rhombus(6, 120, 60);
const parallelogram1 = new Parallelogram(9, 5, 120, 60);

square1.info();
rectangle1.info();
rhombus1.info();
parallelogram1.info();

// Додатково демонструємо методи length() і square().
square1.length();
square1.square();
rectangle1.length();
rectangle1.square();
rhombus1.length();
rhombus1.square();
parallelogram1.length();
parallelogram1.square();

// ============================================================
// 1.2.25–1.2.26. Функція Triangular з параметрами за замовчуванням
// ============================================================

function Triangular(a = 3, b = 4, c = 5) {
  // Деструктурування об'єкта, як рекомендовано в методичці.
  const { a: sideA, b: sideB, c: sideC } = { a, b, c };
  return { a: sideA, b: sideB, c: sideC };
}

console.log("\\nЗавдання 1.2.25–1.2.26: Triangular");
console.log(Triangular());
console.log(Triangular(6, 8, 10));
console.log(Triangular(7, 9, 12));

// ============================================================
// 1.2.27–1.2.28. Функція PiMultiplier
// ============================================================

function PiMultiplier(multiplier) {
  return function () {
    return Math.PI * multiplier;
  };
}

const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiByTwoThirds = PiMultiplier(2 / 3);
const dividePiBy2 = PiMultiplier(1 / 2);

console.log("\\nЗавдання 1.2.27–1.2.28: PiMultiplier");
console.log("π × 2 =", multiplyPiBy2());
console.log("π × 2/3 =", multiplyPiByTwoThirds());
console.log("π ÷ 2 =", dividePiBy2());

// ============================================================
// 1.2.29–1.2.31. Функції Painter, PaintBlue, PaintRed, PaintYellow
// ============================================================

function Painter(color) {
  return function (object) {
    if (Object.prototype.hasOwnProperty.call(object, "type")) {
      console.log(`${color}: ${object.type}`);
    } else {
      console.log("No ‘type’ property occurred!");
    }
  };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const testObject1 = {
  maxSpeed: 280,
  type: "Sportcar",
  color: "magenta"
};

const testObject2 = {
  type: "Truck",
  "avg speed": 90,
  "load capacity": 2400
};

const testObject3 = {
  maxSpeed: 180,
  color: "purple",
  isCar: true
};

console.log("\\nЗавдання 1.2.29–1.2.31: Painter");
const testObjects = [testObject1, testObject2, testObject3];
testObjects.forEach((object, index) => {
  console.log(`Тестовий об'єкт ${index + 1}:`, object);
  PaintBlue(object);
  PaintRed(object);
  PaintYellow(object);
});

console.log("\\nВиконання скрипту завершено.");
