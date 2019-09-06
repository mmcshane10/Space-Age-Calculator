export class SpaceCalculator {
  constructor(sex, age) {
    this.sex = sex;
    this.age = age;
  }

// MERCURY PROTOTYPES ---------------------------

  mercuryCalculator() {
    let mercuryAge = (this.age / 0.24).toFixed();
    return mercuryAge
  }

  mercuryLifeExpectancy() {
    let mercuryAge = (this.age / 0.24).toFixed();
    let ageDifference = 0;
    const mercuryMaleExpectancy = 317;
    const mercuryFemaleExpectancy = 338;

      if (this.sex === "Male") {
        if (mercuryAge < mercuryMaleExpectancy) {
          ageDifference = mercuryMaleExpectancy - mercuryAge;
          return ageDifference;
        } else {
          ageDifference = mercuryAge - mercuryMaleExpectancy;
          return ageDifference;
        }
      } else {
        if (mercuryAge < mercuryFemaleExpectancy) {
          ageDifference = mercuryFemaleExpectancy - mercuryAge;
          return ageDifference;
        } else {
          ageDifference = mercuryAge - mercuryFemaleExpectancy;
          return ageDifference;
        }
      }
  }

// VENUS PROTOTYPES ----------------------------

  venusCalculator() {
    let venusAge = (this.age / 0.62).toFixed();
    return venusAge
  }

  venusLifeExpectancy() {
    let venusAge = (this.age / 0.62).toFixed();
    let ageDifference = 0;
    const venusMaleExpectancy = 123;
    const venusFemaleExpectancy = 131;

    if (this.sex === "Male") {
      if (venusAge < venusMaleExpectancy) {
        ageDifference = venusMaleExpectancy - venusAge;
        return ageDifference;
      } else {
        ageDifference = venusAge - venusMaleExpectancy;
        return ageDifference;
      }
    } else {
      if (venusAge < venusFemaleExpectancy) {
        ageDifference = venusFemaleExpectancy - venusAge;
        return ageDifference;
      } else {
        ageDifference = venusAge - venusFemaleExpectancy;
        return ageDifference;
      }
    }
  }

// MARS PROTOTYPES ----------------------------

  marsCalculator() {
    let marsAge = (this.age / 1.88).toFixed();
    return marsAge
  }

  marsLifeExpectancy() {
    let marsAge = (this.age / 1.88).toFixed();
    let ageDifference = 0;
    const marsMaleExpectancy = 40;
    const marsFemaleExpectancy = 43;

    if (this.sex === "Male") {
      if (marsAge < marsMaleExpectancy) {
        ageDifference = marsMaleExpectancy - marsAge;
        return ageDifference;
      } else {
        ageDifference = marsAge - marsMaleExpectancy;
        return ageDifference;
      }
    } else {
      if (marsAge < marsFemaleExpectancy) {
        ageDifference = marsFemaleExpectancy - marsAge;
        return ageDifference;
      } else {
        ageDifference = marsAge - marsFemaleExpectancy;
        return ageDifference;
      }
    }
  }

// JUPITER PROTOTYPES ----------------------------

  jupiterCalculator() {
    let jupiterAge = (this.age / 11.68).toFixed();
    return jupiterAge
  }

  jupiterLifeExpectancy() {
    let jupiterAge = (this.age / 11.68).toFixed();
    let ageDifference = 0;
    const jupiterMaleExpectancy = 7;
    const jupiterFemaleExpectancy = 7;

    if (this.sex === "Male") {
      if (jupiterAge < jupiterMaleExpectancy) {
        ageDifference = jupiterMaleExpectancy - jupiterAge;
        return ageDifference;
      } else {
        ageDifference = jupiterAge - jupiterMaleExpectancy;
        return ageDifference;
      }
    } else {
      if (jupiterAge < jupiterFemaleExpectancy) {
        ageDifference = jupiterFemaleExpectancy - jupiterAge;
        return ageDifference;
      } else {
        ageDifference = jupiterAge - jupiterFemaleExpectancy;
        return ageDifference;
      }
    }
  }

}
