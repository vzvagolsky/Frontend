class Transport {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayMainInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Car extends Transport {
    constructor(make, model, year, numDoors, isConvertible) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.isConvertible = isConvertible;
    }
}

class Motorcycle extends Transport {
    constructor(make, model, year, numWheels, hasSideCar) {
        super(make, model, year);
        this.numWheels = numWheels;
        this.hasSideCar = hasSideCar;
    }
}

// Создаем экземпляры класса Car
const car1 = new Car("Toyota", "Camry", 2020, 4, false);
const car2 = new Car("Honda", "Accord", 2018, 2, true);

// Создаем экземпляры класса Motorcycle
const motorcycle1 = new Motorcycle("Harley-Davidson", "Sportster", 2019, 2, true);
const motorcycle2 = new Motorcycle("Kawasaki", "Ninja", 2021, 2, false);

// Выводим информацию о каждом транспортном средстве
car1.displayMainInfo();
car2.displayMainInfo();
motorcycle1.displayMainInfo();
motorcycle2.displayMainInfo();