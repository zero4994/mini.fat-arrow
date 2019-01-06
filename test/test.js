/* eslint-disable no-restricted-globals */
const { expect } = require('chai');
const Car = require('../Car');
const Thing = require('../Thing');

describe('Car', () => {
  it('should work', (done) => {
    const car = new Car('Yan\'s pimpin ride');
    car.drive();
    setTimeout(() => {
      car.stop();
      const expected = 1;
      const actual = car.readOdometer();
      expect(actual).to.equal(expected);
      done();
    }, 1500);
  });
});

describe('Thing', () => {
  it('should should return empty objects', () => {
    const expected = {};
    const actual = Thing.getEmpty();
    expect(actual).to.deep.equal(expected);
  });

  it('should calculate fall position', () => {
    const expected = 539;
    const actual = Thing.fall(10);
    expect(actual).to.be.closeTo(expected, 0.1);
  });

  it('should return random numbers', () => {
    const expected = true;
    const actual = Thing.fall(10);
    expect(!isNaN(parseFloat(actual))).to.equal(expected);
    expect(isFinite(actual)).to.equal(expected);
  });
});
