function getArcadeResult(history) {
    let arcadeTickets = {
      'Circus Ball Drop': 200,
      'Lucky Chicken': 100,
      'Street Basketball': 50,
      'Gold Rush': 20
    }
    // write your code here

    if (history === "Race to Witch Mountain") {
        return 'Terdapat permainan yang tidak tersedia di gamezone'
    }
    let result = {};
    let obt = {};
    let totalTicket = 0;
    for (let i = 0; i < history.length; i++) {
        totalTicket += arcadeTickets[history[i]];
        if (!obt[history[i]]) {
            obt[history[i]] = 0
        }
        obt[history[i]]++
    }
    result = {
        totalTicket: totalTicket,
        gameReport: obt
    }
    return result
}
  
  const history = [
    'Circus Ball Drop',
    'Lucky Chicken',
    'Street Basketball',
    'Circus Ball Drop',
    'Lucky Chicken',
    'Street Basketball',
    'Gold Rush',
    'Gold Rush',
    'Gold Rush',
    'Circus Ball Drop',
    'Lucky Chicken',
    'Lucky Chicken',
    'Circus Ball Drop',
    'Street Basketball',
    'Street Basketball',
    'Gold Rush',
    'Gold Rush',
    'Circus Ball Drop',
    'Circus Ball Drop'
  ]
  
//   console.log(getArcadeResult(history))
  /**
   * {
   *  totalTicket: 1900,
   *  gameReport: {
   *    'Circus Ball Drop': 6,
   *    'Lucky Chicken': 4,
   *    'Street Basketball': 4,
   *    'Gold Rush': 5
   *  }
   * }
   *
   */

function getPrizes(ticket) {
    let listPrize = [
      [200, 'Rautan', 'Pensil', 'Penghapus'],
      [500, 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut'],
      [1000, 'Boneka', 'Tas']
    ]
    // write your code here
    let result = [];
    for (let i = 0; i < listPrize.length; i++) {
        for (let j = 1; j < listPrize[i].length; j++) {
            if (listPrize[i][0] <= ticket) {
                result.push(listPrize[i][j]);
                ticket -= listPrize[i][0]
            }
        }
    }
    return result
}
  
// console.log(getPrizes(1900)) // [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]

function gamezone(user) {
    // write your code here
    if (!user) {
        return 'Tidak ada pemain yang bermain'
    }
    if (user.histories === "Race to Witch Mountain") {
        return 'Terdapat permainan yang tidak tersedia di gamezone'
    }
    let arcade = getArcadeResult(user.histories);
    let prizes = getPrizes(arcade.totalTicket);
    let ouput = {};
    ouput['name'] = user.name;
    ouput['gameReport'] = arcade.gameReport;
    ouput['prizes'] = prizes
    return ouput
}
  
// console.log(
//     gamezone({
//       name: 'Ihsan',
//       histories: [
//         'Circus Ball Drop',
//         'Lucky Chicken',
//         'Street Basketball',
//         'Circus Ball Drop',
//         'Lucky Chicken',
//         'Street Basketball',
//         'Gold Rush',
//         'Gold Rush',
//         'Gold Rush',
//         'Circus Ball Drop',
//         'Lucky Chicken',
//         'Lucky Chicken',
//         'Circus Ball Drop',
//         'Street Basketball',
//         'Street Basketball',
//         'Gold Rush',
//         'Gold Rush',
//         'Circus Ball Drop',
//         'Circus Ball Drop'
//       ]
//     })
//   )
  
  console.log(gamezone({
      "name": "Marry",
      "histories": [
        "Circus Ball Drop", 
        "Circus Ball Drop", 
        "Race to Witch Mountain"
    ]
    })
)
  /**
  {
    name: 'Ihsan',
    gameReport: {
      'Circus Ball Drop': 6,
      'Lucky Chicken': 4,
      'Street Basketball': 4,
      'Gold Rush': 5
    },
    prizes: [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]
  }
  */