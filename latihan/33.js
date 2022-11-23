function generateIngredients(ingredientsRaw) {
    // Your code here
    let result = [];
    let obj = {};
    for (let i = 0; i < ingredientsRaw.length; i++) {
        obj.menu = ingredientsRaw[i][0];
        obj.ratio = ingredientsRaw[i][1];
        obj.ingredients = ingredientsRaw[i][2];
        obj.cost = ingredientsRaw[i][3];
        result.push(obj);
        obj = {};
    }
    return result
  }
//   const rawData =  [
//       ["Bakso Spesial", 20,  6, 130000],
//       ["Mie Ayam Combo", 100,  3, 20000],
//       ["Mia Ayam Spesial", 500,  5, 40000],
//   ];
//   console.log(generateIngredients(rawData));
  /*
    [
      {
        menu: 'Bakso Spesial',
        ratio: 20,
        ingredients: 6,
        cost: 130000 }, 
      {
        menu: 'Mie Ayam Combo',
        ratio: 100,
        ingredients: 3,
        cost: 20000
      },
      {
        menu: 'Mie Ayam Spesial',
        ratio: 500,
        ingredients: 5,
        cost: 40000 
      }
    ]
  */

function calculateRawCost(ingredientsData) {
    // Your code here
    let result = [];
    let obj = {};
    for (let i = 0; i < ingredientsData.length; i++) {
        if (!obj.menu) {
            obj.menu = ingredientsData[i].menu
        }
        if (!obj.stock) {
            obj.stock = (ingredientsData[i].ingredients *1000) / ingredientsData[i].ratio
        }
        if (!obj.investment) {
             obj.investment = ingredientsData[i].cost * ingredientsData[i].ingredients
        }
        result.push(obj)
        obj = {};
    }
    return result
}
  
//   console.log(calculateRawCost(
//     [
//       {
//         menu: 'Bakso Spesial',
//         ratio: 20,
//         ingredients: 6,
//         cost: 130000
//       }, 
//       {
//         menu: 'Mie Ayam Combo',
//         ratio: 100,
//         ingredients: 3,
//         cost: 20000
//       },
//       {
//         menu: 'Mie Ayam Spesial',
//         ratio: 500,
//         ingredients: 5,
//         cost: 40000 
//       }
//     ]
//   ));
  /*
    [
      {
        menu: 'Bakso Spesial',
        stock: 300,
        investment: 780000
      },
      {
        menu: 'Mie Ayam Combo',
        stock: 30,
        investment: 60000
      },
      {
        menu: 'Mie Ayam Spesial',
        stock: 10,
        investment: 200000
      }
    ]
  */


function calculateROI(costData, ordersData) {
  // Your code here
  let result = [];
  let obj = {};
  for (let i = 0; i < costData.length; i++) {
    for (let j = 0; j < ordersData.length; j++){
        if (!obj.menu) {
            obj.menu = costData[i].menu
        }
        if (costData[i].menu === ordersData[j].menuItem) {
            if (ordersData[j].amount <= costData[i].stock) {
                obj.stock = costData[i].stock - ordersData[j].amount // amount ditambah dulu idem sm kaya bawah
            }
        } 
        if (!obj.investment) {
            obj.investment = costData[i].investment
        }
        if (costData[i].stock > 0 && costData[i].menu === ordersData[j].menuItem) {
            if (!obj.sales) {
                obj.sales = ordersData[j].amount  * ordersData[j].price
             }
        }
        if (!obj.profit) {
            obj.profit = obj.sales - obj.investment
        }
        if (!obj.roi) { 
            let numRoi = Math.round((obj.profit / obj.investment) * 100) 
            obj.roi = numRoi //+ '%'
        }
    }
    result.push(obj);
    obj = {};
  }
  return result
}

// const orderHistories = [
//         {
//           "menuItem": "Bakso Spesial",
//           "price": 20000,
//           "amount": 260
//         },
//         {
//           "menuItem": "Bakso Spesial",
//           "price": 20000,
//           "amount": 12
//         },
//         {
//           "menuItem": "Mie Ayam Combo",
//           "price": 18000,
//           "amount": 20
//         },
//         {
//           "menuItem": "Mie Ayam Spesial",
//           "price": 12000,
//           "amount": 6
//         }
//  ]

// console.log(calculateROI([
//   {
//     menu: 'Bakso Spesial',
//     stock: 300,
//     investment: 780000
//   },
//   {
//     menu: 'Mie Ayam Combo',
//     stock: 30,
//     investment: 60000
//   },
//   {
//     menu: 'Mie Ayam Spesial',
//     stock: 10,
//     investment: 200000
//   }
// ], orderHistories));

/*
  [
  {
    menu: 'Bakso Spesial',
    stock: 28,
    investment: 780000,
    sales: 5440000,
    profit: 4660000,
    roi: '597.44%'
  },
  {
    menu: 'Mie Ayam Combo',
    stock: 10,
    investment: 60000,
    sales: 360000,
    profit: 300000,
    roi: '500.00%'
  },
  {
    menu: 'Mie Ayam Spesial',
    stock: 4,
    investment: 200000,
    sales: 72000,
    profit: -128000,
    roi: '-64.00%'
  }
]
*/

function incomeStatement(rawIngredients, orders) {
  // Your code here
  if (!rawIngredients || !orders) {
    return 'Invalid data'
  }
  if (!rawIngredients.length || !orders.length) {
    return 'Data is empty'
  }

  const ingredientsGene = generateIngredients(rawIngredients);
  const cost = calculateRawCost(ingredientsGene);
  const calcuRoi = calculateROI(cost, orders);

  return calcuRoi
}

const rawData =  [
    ["Bakso Spesial", 20,  6, 130000],
    ["Mie Ayam Combo", 100,  3, 20000],
    ["Mia Ayam Spesial", 500,  5, 40000],
];

const orderHistories = [
        {
          "menuItem": "Bakso Spesial",
          "price": 20000,
          "amount": 260
        },
        {
          "menuItem": "Bakso Spesial",
          "price": 20000,
          "amount": 12
        },
        {
          "menuItem": "Mie Ayam Combo",
          "price": 18000,
          "amount": 20
        },
        {
          "menuItem": "Mie Ayam Spesial",
          "price": 12000,
          "amount": 6
        }
 ];

// console.log(incomeStatement());
// Invalid data

// console.log(incomeStatement([], []));
// Data is empty

console.log(incomeStatement(rawData, orderHistories));
/*
  [
    {
      menu: 'Bakso Spesial',
      stock: 28,
      investment: 780000,
      sales: 5440000,
      profit: 4660000,
      roi: '597.44%'
    },
    {
      menu: 'Mie Ayam Combo',        
      stock: 10,
      investment: 60000,
      sales: 360000,
      profit: 300000,
      roi: '500.00%'
    },
    {
      menu: 'Mie Ayam Spesial',      
      stock: 4,
      investment: 200000,
      sales: 72000,
      profit: -128000,
      roi: '-64.00%'
    }
  ]
*/