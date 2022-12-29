const { calculateAverage, plantGrouping } = require("../1.js");
const Restriction = require("hacktiv8-restriction");
const { expect } = require("@jest/globals");

describe("Soal 1", () => {
  const plantData = [
    { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
    { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
    { name: "Mangga Arumanis", height: 10.3, age: 5.5, family: "Anacardiaceae" },
    { name: "Jeruk Purut", height: 3.3, age: 2.1, family: "Rutaceae" },
    { name: "Mangga indramayu", height: 6.3, age: 3.6, family: "Anacardiaceae" },
    { name: "Pisang Ambon", height: 1.2, age: 0.3, family: "Musaceae" },
    { name: "Mangga Madu", height: 5.3, age: 2.5, family: "Anacardiaceae" },
    { name: "Pisang Raja", height: 2.3, age: 0.5, family: "Musaceae" },
    { name: "Jeruk Nipis", height: 2.3, age: 1.4, family: "Rutaceae" },
    { name: "Mangga Golek", height: 4.7, age: 3.5, family: "Anacardiaceae" },
  ];

  const result = {
    Rutaceae: {
      oldestPlant: {
        name: "Jeruk Purut",
        age: 2.1,
        height: 3.3
      }
    },
    Musaceae: {
      oldestPlant: {
        name: "Pisang Raja",
        age: 0.5,
        height: 2.3
      }
    },
    Anacardiaceae: {
      oldestPlant: {
        name: "Mangga Arumanis",
        age: 5.5,
        height: 10.3
      }
    },
    averageHeight: 3.91
  };
  
  test("Should return correct output when input undefined (5)", () => {
    expect(plantGrouping()).toEqual("invalid input");
  });
  
  test("Should return correct output when input length less than 3 (5)", () => {
    expect(plantGrouping([
      { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
      { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" }
    ])).toEqual("data tidak lengkap");
  });
  
  test("Function calculateAverage should run with the given requirements (10)", () => {
    expect(calculateAverage(plantData)).toEqual(3.91);
  });

  test("Function plantGrouping should run with the given requirements (18)", () => {
    expect(plantGrouping(plantData)).toEqual(result);
  });

  test("Check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../1.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
