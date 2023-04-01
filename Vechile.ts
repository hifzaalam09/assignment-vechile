
abstract class Vechile{

    model: string;
    year: number;
    isRented: boolean;

    constructor(model:string, year:number, rent:boolean) {
        this.model = model;
        this.year = year;
        this.isRented = rent;
    }
    public getmodel():string {
        return this.model;
    }
    public getyear():number{
        return this.year;
    }
    public getrent():boolean{
        return this.isRented
    }

    public setmodel(model:string) {
        return this.model;
    }
    public setyear(year:number){
        return this.year;
    }
    public setrent(rent:boolean){
        return this.rent
    }
    
    abstract rentalRate(rent: number): void;

    public rent(): string{
        if(this.isRented){
            return "This Vehicle is already Rented";
        }
        this.isRented = true;
        return "Vehicle Is Rented";
    }

    public return(): string{
        if(!this.isRented){
            return "This Vehicle is not rented yet.";
        }
        this.isRented = false;
        return "Vehicle Is Now available for rent.";
    }

}

class Car extends Vechile{

    constructor(model:string, year:number, rent:number) {
        super(model, year, false);
        this.rentamount = rent;
    } 

    rentamount: number;
    rentalRate(rent: number) {
        this.rentamount = rent;
    }

    
}

class Truck extends Vechile{

    constructor(model:string, year:number, rentamount:number) {
        super(model, year, false);
        this.rentamount = rentamount;
    } 

    rentamount: number;
    rentalRate(rent: number) {
        this.rentamount = rent;
    }

}

class Motorcycle extends Vechile{

    constructor(model:string, year:number, rent:number) {
        super(model, year, false);
        this.rentamount = rent;
    } 

    rentamount: number;
    rentalRate(rent: number) {
        this.rentamount = rent;
    }

}

const car = new Car("Honda",2018, 2000)
const truck = new Car("Truck",2019, 1000)
const motorcycle = new Car("Honda 125",2020, 4000)

console.log("Model: " + car.getmodel())
console.log("Year: " + car.getyear())
console.log("Rent:" + truck.rentamount)
console.log(car.rent())
console.log(car.rent())
console.log(car.return())
console.log(car.return())

console.log("Model: " + truck.getmodel())
console.log("Year: " + truck.getyear())
console.log("Rent:" + truck.rentamount)
console.log(truck.rent())
console.log(truck.rent())
console.log(truck.return())
console.log(truck.return())

console.log("Model: " + motorcycle.getmodel())
console.log("Year: " + motorcycle.getyear())
console.log("Rent:" + truck.rentamount)
console.log(motorcycle.rent())
console.log(motorcycle.rent())

console.log(motorcycle.return())
console.log(motorcycle.return())





