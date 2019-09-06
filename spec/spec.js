import { SpaceCalculator } from './../src/backend.js';

describe('Space Age Calculator', function() {

  it('should create an object based on the users input', function() {
    let testUser = new SpaceCalculator("Male", 30)
    expect(testUser).toEqual(["Male", 30]);
  });
});
