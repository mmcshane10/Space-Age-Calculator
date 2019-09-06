import { SpaceCalculator } from './../src/backend.js';

describe('Space Age Calculator', function() {

  it('should calculate the users age on Mercury', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.mercuryCalculator()).toEqual(125);
  });

  it('should calculate the users age on Venus', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.mercuryCalculator()).toEqual(48);
  });

  it('should calculate the users age on Mars', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.mercuryCalculator()).toEqual(16);
  });

  it('should calculate the users age on Jupiter', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser.mercuryCalculator()).toEqual(3);
  });


});
