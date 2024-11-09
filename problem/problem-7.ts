class car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge() :number {
        
        return 2024 - this.year;
    }
}

const car1 = new car("Honda", "Civic", 2018);
console.log(car1.getCarAge());