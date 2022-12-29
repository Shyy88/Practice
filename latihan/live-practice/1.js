function calculateAverage(data) {
  // Your code here
  let result = 0;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].height 
    result = sum / data.length

  }
 return result
}

function plantGrouping(data) {
  // Your code here
  if (data.length < 3) {
    return 'data tidak lengkap'
  }
  if (!data) {
    return 'Invalid input'
  }
  const result = {};
  for (let i = 0; i < data.length; i++) {
    if (!result[data[i].family]) {
      result[data[i].family] 
    }
  }

  result.averageHeight = calculateAverage(data);
}

let plantData = [
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

console.log(plantGrouping(plantData));
/*
{
  Rutaceae: {
    oldestPlant: {
      name: 'Jeruk Purut',
      age: 2.1,
      height: 3.3
    }
  },
  Musaceae: {
    oldestPlant: {
      name: 'Pisang Raja',
      age: 0.5,
      height: 2.3
    }
  },
  Anacardiaceae: {
    oldestPlant: {
      name: 'Mangga Arumanis',
      age: 5.5,
      height: 10.3
    }
  },
  averageHeight: 3.91
}
*/

// console.log(plantGrouping([
//   { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
//   { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" }
// ]));
// data tidak lengkap

// console.log(plantGrouping());
// invalid input

module.exports = {
  calculateAverage,
  plantGrouping
};
