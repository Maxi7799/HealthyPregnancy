export class EnergyIntake {
  age: number;
  lv_activity: string;
  weight_kg: number;
  height_m: number;
  trimester: string;

  constructor(
    age: number,
    lv_activity: string,
    weight_kg: number,
    height_m: number,
    trimester: string
  ) {
    this.age = age;
    this.lv_activity = lv_activity;
    this.weight_kg = weight_kg;
    this.height_m = height_m;
    this.trimester = trimester;
  }

  convertActivityLevel(): number {
    // Convert the activity level input into a coefficient
    const activityCoefficients: { [key: string]: number } = {
      no: 1.0,
      low: 1.12,
      active: 1.27,
      "very active": 1.45,
    };

    return activityCoefficients[this.lv_activity] ?? 1.0; // Default to 1.0 if no match
  }

  convertTrimester(): number {
    // Convert the trimester input into additional kcal needed
    const trimesterExtra: { [key: string]: number } = {
      "1st": 0,
      "2nd": 340,
      "3rd": 452,
    };

    return trimesterExtra[this.trimester] ?? 0; // Default to 0 if no match
  }

  getStandard(): number {
    const pa: number = this.convertActivityLevel();
    const trimester_kcal: number = this.convertTrimester();

    const energyIntake: number =
      354 -
      6.91 * this.age +
      pa * (9.36 * this.weight_kg) +
      726 * this.height_m +
      trimester_kcal;

    return Math.round(energyIntake * 100) / 100; // Round to 2 decimal places
  }
}


//   const energyIntake = new EnergyIntake(30, "active", 65, 1.7, "2nd");
//   console.log(energyIntake.getStandard());