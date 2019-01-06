class Car {
    constructor(name) {
        this.name = name;
        this.odometer = 0;
        this.intervalId = undefined;
    }

    drive() {
        var self = this;
        const tick = function() {
            console.log("my name is: " + self.name);
            self.odometer++;
        }
        this.intervalId = setInterval(tick, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    readOdometer() {
        return this.odometer;
    }
}
module.exports = Car;
