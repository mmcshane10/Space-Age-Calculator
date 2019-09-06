import { SpaceCalculator } from './../src/backend.js';

describe('Space Age Calculator', function() {

  it('should calculate the users age on Mercury', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.mercuryCalculator()).toEqual('125');
  });

  it('should calculate the users age on Venus', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.venusCalculator()).toEqual('48');
  });

  it('should calculate the users age on Mars', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.marsCalculator()).toEqual('16');
  });

  it('should calculate the users age on Jupiter', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.jupiterCalculator()).toEqual('3');
  });

  it('should calculate the users remaining years on mercury if their age is less than the life expectancy', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.mercuryLifeExpectancy()).toEqual(192);
  });

  it('should calculate how far a use has outlived their life expectancy on mercury if their age is higher than the life expectancy', function() {
    let testUser = new SpaceCalculator("Female", 99)
    expect(testUser.mercuryLifeExpectancy()).toEqual(75);
  });

  it('should calculate the users remaining years on venus if their age is less than the life expectancy', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.venusLifeExpectancy()).toEqual(75);
  });

  it('should calculate how far a use has outlived their life expectancy on venus if their age is higher than the life expectancy', function() {
    let testUser = new SpaceCalculator("Female", 99)
    expect(testUser.venusLifeExpectancy()).toEqual(29);
  });

  it('should calculate the users remaining years on mars if their age is less than the life expectancy', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.marsLifeExpectancy()).toEqual(24);
  });

  it('should calculate how far a use has outlived their life expectancy on mars if their age is higher than the life expectancy', function() {
    let testUser = new SpaceCalculator("Female", 99)
    expect(testUser.marsLifeExpectancy()).toEqual(10);
  });

  it('should calculate the users remaining years on jupiter if their age is less than the life expectancy', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.jupiterLifeExpectancy()).toEqual(4);
  });

  it('should calculate how far a use has outlived their life expectancy on jupiter if their age is higher than the life expectancy', function() {
    let testUser = new SpaceCalculator("Female", 99)
    expect(testUser.jupiterLifeExpectancy()).toEqual(1);
  });

});
