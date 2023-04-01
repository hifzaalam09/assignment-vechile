"use strict";
class Vechile {
    constructor(model, year, rent) {
        this.model = model;
        this.year = year;
        this.isRented = rent;
    }
    getmodel() {
        return this.model;
    }
    getyear() {
        return this.year;
    }
    getrent() {
        return this.isRented;
    }
    setmodel(model) {
        return this.model;
    }
    setyear(year) {
        return this.year;
    }
    setrent(rent) {
        return this.rent;
    }
    rent() {
        if (this.isRented) {
            return "This Vehicle is already Rented";
        }
        this.isRented = true;
        return "Vehicle Is Rented";
    }
    return() {
        if (!this.isRented) {
            return "This Vehicle is not rented yet.";
        }
        this.isRented = false;
        return "Vehicle Is Now available for rent.";
    }
}
class Car extends Vechile {
    constructor(model, year, rent) {
        super(model, year, false);
        this.rentamount = rent;
    }
    rentalRate(rent) {
        this.rentamount = rent;
    }
}
class Truck extends Vechile {
    constructor(model, year, rentamount) {
        super(model, year, false);
        this.rentamount = rentamount;
    }
    rentalRate(rent) {
        this.rentamount = rent;
    }
}
class Motorcycle extends Vechile {
    constructor(model, year, rent) {
        super(model, year, false);
        this.rentamount = rent;
    }
    rentalRate(rent) {
        this.rentamount = rent;
    }
}
const car = new Car("Honda", 2018, 2000);
const truck = new Car("Truck", 2019, 1000);
const motorcycle = new Car("Honda 125", 2020, 4000);
console.log("Model: " + car.getmodel());
console.log("Year: " + car.getyear());
console.log("Rent:" + truck.rentamount);
console.log(car.rent());
console.log(car.rent());
console.log(car.return());
console.log(car.return());
console.log("Model: " + truck.getmodel());
console.log("Year: " + truck.getyear());
console.log("Rent:" + truck.rentamount);
console.log(truck.rent());
console.log(truck.rent());
console.log(truck.return());
console.log(truck.return());
console.log("Model: " + motorcycle.getmodel());
console.log("Year: " + motorcycle.getyear());
console.log("Rent:" + truck.rentamount);
console.log(motorcycle.rent());
console.log(motorcycle.rent());
console.log(motorcycle.return());
console.log(motorcycle.return());
