function mergeOrder(data) {
    // write your code here
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let smt = [];
        for (let j = 0; j < data[i].orders.length; j++) {
            for (let m = 0; m < data[i].orders[j].length; m++) {
                smt.push(data[i].orders[j][m]);
            }
        }
        result.push(smt);
    }
 return result
}

// console.log(
//     mergeOrder([
//       {
//         restaurant: "MekDun",
//         orders: [
//           ["Burger", 200],
//           ["Kentang", 130],
//           ["CocaCola", 400],
//           ["IceCream", 186],
//         ],
//         reviewers: 140,
//       },
//       {
//         restaurant: "Lawmore",
//         orders: [
//           ["Ayam", 126],
//           ["CocaCola", 206],
//           ["Burger", 368],
//           ["IceCream", 80],
//         ],
//         reviewers: 260,
//       },
//       {
//         restaurant: "Burger Queen",
//         orders: [
//           ["Ayam", 85],
//           ["CocaCola", 150],
//           ["Burger", 450],
//           ["Kentang", 20],
//         ],
//         reviewers: 80,
//       },
//     ])
//   );

  /*
  [
   [
     'Burger',   200,
     'Kentang',  130,
     'CocaCola', 400,
     'IceCream', 186
   ],
   [
     'Ayam',     126,
     'CocaCola', 206,
     'Burger',   368,
     'IceCream', 80
   ],
   [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
  ]
  */

function calculateTotalSales(data) {
    let priceList = [
      { name: "Burger", price: 25000 },
      { name: "Kentang", price: 1000 },
      { name: "Ayam", price: 17000 },
      { name: "CocaCola", price: 7000 },
      { name: "IceCream", price: 3000 },
    ];
    // Your code here
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let hasilSale = 0;
        for (let j = 0; j < data[i].length; j++) {
            for (let o = 0; o < priceList.length; o++) {
                if (data[i][j] === priceList[o].name) {
                    hasilSale += data[i][j + 1] * priceList[o].price
                }
            }
        }
        result.push(hasilSale);
    }
    return result
}

// console.log(
//     calculateTotalSales([
//       ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
//       ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
//       ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
//     ])
//   );
  // [ 8488000, 13024000, 13765000 ]


function calculateTotalVote(data) {
    // Your code here
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let hasilVote = data[i].reviewers / 4 
        result.push(hasilVote);
    }
    return result
}
  
//   console.log(
//     calculateTotalVote([
//       {
//         restaurant: "MekDun",
//         orders: [
//           ["Burger", 200],
//           ["Kentang", 130],
//           ["CocaCola", 400],
//           ["IceCream", 186],
//         ],
//         reviewers: 140,
//       },
//       {
//         restaurant: "Lawmore",
//         orders: [
//           ["Ayam", 126],
//           ["CocaCola", 206],
//           ["Burger", 368],
//           ["IceCream", 80],
//         ],
//         reviewers: 260,
//       },
//       {
//         restaurant: "Burger Queen",
//         orders: [
//           ["Ayam", 85],
//           ["CocaCola", 150],
//           ["Burger", 450],
//           ["Kentang", 20],
//         ],
//         reviewers: 80,
//       },
//     ])
//   );
  // [ 35, 65, 20 ]

function makanSkuy(data) {
    // Your code here
    if (!data) {
        return 'Invalid Data!'
    }
    if (!data.length) {
        return 'Tidak ada order, order dulu ngab!'
    }

    let order = mergeOrder(data);
    let totalSales = calculateTotalSales(order);
    let totalVote = calculateTotalVote(data);
    let output = {};
    for (let i = 0; i < data.length; i++) {
        if (totalSales[i] > 20000000 && totalVote[i] > 100) {
            if (!output.ThreeStars) {
                output.ThreeStars = [];
            } 
            output.ThreeStars.push(data[i].restaurant);
        } else if (totalSales[i] >= 10000000 && totalSales[i] <= 20000000 && totalVote[i] >= 50 && totalVote[i] <= 100) {
            if (!output.TwoStars) {
                output.TwoStars = [];
            } 
            output.TwoStars.push(data[i].restaurant);
        } else {
            if (!output.OneStar) {
                output.OneStar = [];
            } 
            output.OneStar.push(data[i].restaurant);
        }
    }
    return output
}
  
// console.log(makanSkuy()); // Invalid Data!
// console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!
  
// console.log(
//     makanSkuy([
//       {
//         restaurant: "MekDun",
//         orders: [
//           ["Burger", 200],
//           ["Kentang", 130],
//           ["CocaCola", 400],
//           ["IceCream", 186],
//         ],
//         reviewers: 140,
//       },
//       {
//         restaurant: "Lawmore",
//         orders: [
//           ["Ayam", 126],
//           ["CocaCola", 206],
//           ["Burger", 368],
//           ["IceCream", 80],
//         ],
//         reviewers: 260,
//       },
//       {
//         restaurant : "Karl Sr",
//         orders: [
//           ["Ayam", 65],
//           ["CocaCola", 510],
//           ["Burger", 699],
//           ["Kentang", 274],
//         ],
//         reviewers: 412
//       },
//     ])
//   );
  /*
  {
    OneStar: [ 'MekDun' ],
    TwoStars: [ 'Lawmore' ],
    ThreeStars: [ 'Karl Sr' ]
  }
  */

console.log(makanSkuy(
    [
      {
        "restaurant" : "MekDun",
        "orders": [
          ["Burger", 200],
          ["Kentang", 13],
          ["CocaCola", 40],
          ["IceCream", 186]
        ],
        "reviewers": 140
      },
      {
        "restaurant" : "Lawmore",
        "orders": [
          ["Ayam", 326],
          ["CocaCola", 306],
          ["Burger", 68],
          ["IceCream", 280]
        ],
        "reviewers": 84
      },
      {
        "restaurant" : "Burger Queen",
        "orders": [
          ["Ayam", 80],
          ["CocaCola", 10],
          ["Burger", 450],
          ["Kentang", 20]
        ],
        "reviewers": 80
      },
      {
        "restaurant" : "Pendys",
        "orders": [
          ["Ayam", 58],
          ["CocaCola", 26],
          ["Burger", 36],
          ["Kentang", 20]
        ],
        "reviewers": 20
      },
      {
        "restaurant" : "Karl Sr",
        "orders": [
          ["Ayam", 65],
          ["CocaCola", 51],
          ["Burger", 69],
          ["Kentang", 74]
        ],
        "reviewers": 120
      }
    ]
    ))
    
// { OneStar: [ 'MekDun', 'Lawmore', 'Burger Queen', 'Pendys', 'Karl Sr' ] }
  
  

    console.log(makanSkuy([
        {
          "restaurant" : "MekDun",
          "orders": [
            ["Burger", 200],
            ["Kentang", 130],
            ["CocaCola", 400],
            ["IceCream", 186]
          ],
          "reviewers": 140
        },
        {
          "restaurant" : "Lawmore",
          "orders": [
            ["Ayam", 326],
            ["CocaCola", 306],
            ["Burger", 468],
            ["IceCream", 280]
          ],
          "reviewers": 460
        },
        {
          "restaurant" : "Burger Queen",
          "orders": [
            ["Ayam", 85],
            ["CocaCola", 150],
            ["Burger", 450],
            ["Kentang", 20]
          ],
          "reviewers": 80
        },
        {
          "restaurant" : "Pendys",
          "orders": [
            ["Ayam", 580],
            ["CocaCola", 246],
            ["Burger", 366],
            ["Kentang", 290]
          ],
          "reviewers": 432
        },
        {
          "restaurant" : "Karl Sr",
          "orders": [
            ["Ayam", 65],
            ["CocaCola", 510],
            ["Burger", 699],
            ["Kentang", 274]
          ],
          "reviewers": 412
        }
      ]
    ));

    
// { OneStar: [ 'MekDun', 'Burger Queen' ],
//   ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ]
//   }
  
  


