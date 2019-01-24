// Car - abstract class which describe car
class Car {
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
    /**
     * fuelTank - getter for fuel property
    */
    get fuelTank() {
        return this.fuel;
    }
    /**
     * mileageTotal - getter for mileage property
    */
    get mileageTotal() {
        return this.mileage;
    }
}
// RealCar - class which inherits from abstract class Car
class RealCar extends Car {
    constructor(tankCapacity, mileage, fuel, fuelConsumption) {
        super(mileage, fuel);
        this.tankCapacity = tankCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    ;
    /**
     * drive - function which updates data according to received distance value
     * @param {number} distance length of trip
     */
    drive(distance) {
        let requiredFuel = (distance / 100) * this.fuelConsumption;
        if (this.fuel > requiredFuel) {
            this.mileage += distance;
            this.fuel = this.fuel - requiredFuel;
        }
        else {
            this.mileage += this.fuel / this.fuelConsumption * 100;
            this.fuel = 0;
            console.log("Your tank is empty, sorry!");
        }
    }
    /** refuel - function which updates fuel value
     * @param {number} volume increment of fuel value
     */
    refuel(volume) {
        if (volume > 0) {
            this.fuel += volume;
            this.fuel = this.fuel > this.tankCapacity ? this.tankCapacity : this.fuel;
        }
        else
            console.log('Provide correct volume to refuel the tank!');
    }
}
const newCar = new RealCar(30, 120, 0, 5);
newCar.refuel(5);
console.log(newCar.fuelTank);
console.log(newCar.mileageTotal);
newCar.drive(600);
console.log(newCar.fuelTank);
console.log(newCar.mileageTotal);
