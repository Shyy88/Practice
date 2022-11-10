function generateId(adventurer) {
  // Insert your code here
  const age = adventurer.age
  let length = adventurer.name.length
  const first = adventurer.name[0]
  const id = `${age}${length}${first}`
  return id
}
const arthur = {
  name: 'Arthur',
  age: 28,
  status: {attack: 890, defense: 700, agility: 800, magic: 870}
}
// console.log(generateId(arthur))

function generateRankingAndSalary() {
  const players = [
    {name: 'Arthur', age: 28, status: {attack: 890, defense: 700, agility: 800, magic: 870}, class: 'Swordman'},
    {name: 'Loren', age: 28, status: {magic: 400, attack: 920, defense: 800, agility: 760}, class: 'Swordman'},
    {name: 'Nimo', age: 38, status: {magic: 200, attack: 300, defense: 100, agility: 200}, class: 'Swordman'},
    {name: 'Jared', age: 25, status: {attack: 700, defense: 640, agility: 520, magic: 1200}, class: 'Mage'},
    {name: 'Arthur', age: 16, status: {agility: 520, attack: 550, defense: 470, magic: 800}, class: 'Mage'},
    {name: 'Takahasi', age: 23, status: {agility: 130, attack: 550, defense: 670, magic: 890}, class: 'Mage'},
    {name: 'Takeda', age: 28, status: {attack: 640, agility: 520, defense: 1100, magic: 400}, class: 'Tank'},
    {name: 'Takahasi', age: 21, status: {attack: 400, agility: 312, defense: 815, magic: 500}, class: 'Tank'},
    {name: 'Yuki', age: 22, status: {attack: 450, agility: 520, defense: 1000, magic: 300}, class: 'Tank'},
    {name: 'Nagisa', age: 16, status: {defense: 320, agility: 1000, attack: 580, magic: 520}, class: 'Assasin'},
    {name: 'Nimo', age: 20, status: {defense: 400, agility: 230, attack: 611, magic: 700}, class: 'Assasin'},
    {name: 'Loren', age: 30, status: {defense: 516, agility: 961, attack: 977, magic: 300}, class: 'Assasin'}
  ]
  // Insert your code here
  let result = [];
  for (let i = 0; i < players.length; i++) {
    let obj = {
      id : generateId(players[i]),
      name: players[i].name,
      age: players[i].age,
      class: players[i].class
    }
    let averageStatus = (players[i].status.attack + players[i].status.agility + players[i].status.defense + players[i].status.magic) / 4 
    if (averageStatus > 800) {
      obj.rank = 'A'
      obj.salary = 42000
    } else if (averageStatus >= 650 && averageStatus <= 800) {
      obj.rank = 'B'
      obj.salary = 20000
    } else {
      obj.rank = 'C'
      obj.salary = 9000
    }
    result.push(obj);
  }
  return result
}
// console.log(generateRankingAndSalary())

function fulfillClientRequest(request) {
  // Insert your code here
let result = [];
const player = generateRankingAndSalary()
for (let i = 0; i < request.length; i++) {
  for (let j = 0; j < player.length; j++) {
    if (request[i][0] === player[j].class && request[i][1] === player[j].rank) {
      let obj = {
        id: player[j].id,
        name: player[j].name,
        age: player[j].age,
        class: player[j].class,
        rank: player[j].rank,
        salary: player[j].salary
      }
      result.push(obj);
    }
  }
}
return result
}
const request = [
  ['Swordman', 'A'],
  ['Mage', 'B'],
  ['Tank', 'C']
]
// console.log(fulfillClientRequest(request))

function adventurerInvoice(client) {
  // Insert your code here
  const obj = {
    name: client.name,
    player: fulfillClientRequest(client.adventureRequests)
  };
  for (let i = 0; i < obj.player.length; i++) {
    obj.totalSalary += Number(obj.player[i].salary)
  } 
  return obj
}

const hiruma = {
  name: 'hiruma',
  adventureRequests: [
    ['Swordman', 'A'],
    ['Mage', 'B'],
    ['Tank', 'C']
  ]
}

console.log(adventurerInvoice(hiruma))

/**
  {
  name: 'hiruma',
  players: [
    {
      id: '286A',
      name: 'Arthur',
      age: 28,
      class: 'Swordman',
      rank: 'A',
      salary: 42000
    },
    {
      id: '255J',
      name: 'Jared',
      age: 25,
      class: 'Mage',
      rank: 'B',
      salary: 20000
    },
    {
      id: '218T',
      name: 'Takahasi',
      age: 21,
      class: 'Tank',
      rank: 'C',
      salary: 9000
    },
    {
      id: '224Y',
      name: 'Yuki',
      age: 22,
      class: 'Tank',
      rank: 'C',
      salary: 9000
    }
  ],
  totalSalary: 80000
}
 */

const sena = {
  name: 'sena',
  adventureRequests: [
    ['Swordman', 'B'],
    ['Mage', 'A'],
    ['Tank', 'A'],
    ['Assasin', 'C']
  ]
}

// console.log(adventurerInvoice(sena))
/**
 * {
  name: 'sena',
  players: [
    {
      id: '285L',
      name: 'Loren',
      age: 28,
      class: 'Swordman',
      rank: 'B',
      salary: 20000
    },
    {
      id: '166N',
      name: 'Nagisa',
      age: 16,
      class: 'Assasin',
      rank: 'C',
      salary: 9000
    },
    {
      id: '204N',
      name: 'Nimo',
      age: 20,
      class: 'Assasin',
      rank: 'C',
      salary: 9000
    }
  ],
  totalSalary: 38000
}
 */

const kurita = {
  name: 'kurita',
  adventureRequests: [
    ['Mage', 'B'],
    ['Tank', 'C']
  ]
}

// console.log(adventurerInvoice(kurita))

/**
 * {
  name: 'kurita',
  players: [
    {
      id: '255J',
      name: 'Jared',
      age: 25,
      class: 'Mage',
      rank: 'B',
      salary: 20000
    },
    {
      id: '218T',
      name: 'Takahasi',
      age: 21,
      class: 'Tank',
      rank: 'C',
      salary: 9000
    },
    {
      id: '224Y',
      name: 'Yuki',
      age: 22,
      class: 'Tank',
      rank: 'C',
      salary: 9000
    }
  ],
  totalSalary: 38000
}
 */

const shin = {
  name: 'shin',
  adventureRequests: [
    ['Swordman', 'A'],
    ['Mage', 'A'],
    ['Tank', 'A'],
    ['Assasin', 'A']
  ]
}

/**
 {
  name: 'shin',
  players: [
    {
      id: '286A',
      name: 'Arthur',
      age: 28,
      class: 'Swordman',
      rank: 'A',
      salary: 42000
    }
  ],
  totalSalary: 42000
}
 */

// console.log(adventurerInvoice(shin))

// console.log(adventurerInvoice()) // Tidak ada client yang dikirimkan

module.exports = {
  generateId,
  generateRankingAndSalary,
  fulfillClientRequest,
  adventurerInvoice
}
