// let i = 9;
// let difference = 8;
// while (i < 32) {
//   let starCount = "*";
//   for (let j = 0; j < i - 1; j++) {
//     starCount += "*";
//   }
//   i += difference;
//   difference -= 2;
//   console.log(starCount);
//   if (difference < -10) {
//     break;
//   }
// }

// const startTime = Date.now();
// const duration = 10000;

// console.log("Таймер запущено:" + new Date().toLocaleTimeString());

// while (Date.now() - startTime < duration) {}

// console.log("Час вийшов:" + new Date().toLocaleTimeString());
// let car = {
//   speedometer: 0,
// };
// Object.assign(car, {
//   setSpeedometer: function (speed) {
//     this.speedometer = speed;
//     return this;
//   },
// });

// Object.assign(car, {
//   getSpeedometer: function () {
//     console.log("Поточна швидкість:" + this.speedometer + "км/год");
//     return this;
//   },
// });
// Object.assign(car, {
//   clearSpeedometer: function () {
//     this.speedometer = 0;
//     return this;
//   },
// });

// car.getSpeedometer();
// car.setSpeedometer(200);
// car.getSpeedometer();
// car.clearSpeedometer();
// car.getSpeedometer();

// car.setSpeedometer(200).setSpeedometer(300).getSpeedometer().clearSpeedometer();
// car.getSpeedometer();

// function checkType(test) {
//   return Object.prototype.toString.call(test);
// }

// console.log(checkType({}));
// console.log(checkType([]));

// Батя
class Transport {
  constructor(type) {
    this.type = type;
  }

  startEngine() {
    console.log(this.type + ": Двигун запущено.");
  }
}

// Доця
class Car extends Transport {
  constructor(brand, model) {
    super("Автомобіль");
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(this.brand + this.model + " їде дорогою.");
  }
}

// Син
class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(
      this.brand + " заряджається. Ємність: " + this.batteryCapacity + "kWh."
    );
  }
}

const myTesla = new ElectricCar("Tesla", "Model S", 100);

myTesla.charge();
myTesla.drive();
myTesla.startEngine();
