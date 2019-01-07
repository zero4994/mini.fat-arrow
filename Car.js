class Car {
  constructor(name) {
    this.name = name;
    this.odometer = 0;
    this.intervalId = undefined;
  }

  drive() {
    let self = this;
    const tick = () => {
      console.log(`my name is: ${self.name}`);
      self.odometer++;
    };
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
