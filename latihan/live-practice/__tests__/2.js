const {generateId, generateRankingAndSalary, fulfillClientRequest, adventurerInvoice} = require('../2.js')
const Restriction = require('hacktiv8-restriction')

describe('Soal nomor 2', () => {
  const hiruma = {
    name: 'hiruma',
    adventureRequests: [
      ['Swordman', 'A'],
      ['Mage', 'B'],
      ['Tank', 'C']
    ]
  }
  const sena = {
    name: 'sena',
    adventureRequests: [
      ['Swordman', 'B'],
      ['Mage', 'A'],
      ['Tank', 'A'],
      ['Assasin', 'C']
    ]
  }
  const kurita = {
    name: 'kurita',
    adventureRequests: [
      ['Mage', 'B'],
      ['Tank', 'C']
    ]
  }
  const shin = {
    name: 'shin',
    adventureRequests: [
      ['Swordman', 'A'],
      ['Mage', 'A'],
      ['Tank', 'A'],
      ['Assasin', 'A']
    ]
  }

  it('should generate the correct id for each adventurer (10)', () => {
    const result = generateId({
      name: 'Arthur',
      age: 28,
      status: {attack: 890, defense: 700, agility: 800, magic: 870},
      class: 'Swordman'
    })

    const result2 = generateId({
      name: 'Loren',
      age: 28,
      status: {magic: 400, attack: 920, defense: 800, agility: 760},
      class: 'Swordman'
    })

    expect(result).toBe('286A')
    expect(result2).toBe('285L')
  })

  it('should generate the correct rank and salary for each adventurer (15) ', () => {
    const result = generateRankingAndSalary()

    expect(result).toEqual(
      expect.arrayContaining([
        {
          id: '286A',
          name: 'Arthur',
          age: 28,
          class: 'Swordman',
          rank: 'A',
          salary: 42000
        },
        {
          id: '285L',
          name: 'Loren',
          age: 28,
          class: 'Swordman',
          rank: 'B',
          salary: 20000
        },
        {
          id: '384N',
          name: 'Nimo',
          age: 38,
          class: 'Swordman',
          rank: 'C',
          salary: 9000
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
          id: '166A',
          name: 'Arthur',
          age: 16,
          class: 'Mage',
          rank: 'C',
          salary: 9000
        },
        {
          id: '238T',
          name: 'Takahasi',
          age: 23,
          class: 'Mage',
          rank: 'C',
          salary: 9000
        },
        {
          id: '286T',
          name: 'Takeda',
          age: 28,
          class: 'Tank',
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
        },
        {
          id: '305L',
          name: 'Loren',
          age: 30,
          class: 'Assasin',
          rank: 'B',
          salary: 20000
        }
      ])
    )
  })

  it('should fulfill client requested adventurer (15)', () => {
    const result = fulfillClientRequest(hiruma.adventureRequests)
    const result2 = fulfillClientRequest(sena.adventureRequests)
    const result3 = fulfillClientRequest(kurita.adventureRequests)

    expect(result).toEqual(
      expect.arrayContaining([
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
      ])
    )
    expect(result2).toEqual(
      expect.arrayContaining([
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
      ])
    )
    expect(result3).toEqual(
      expect.arrayContaining([
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
      ])
    )
  })

  it('should generate an invoice based on client request (15)', () => {
    const result = adventurerInvoice(hiruma)
    const result2 = adventurerInvoice(sena)
    const result3 = adventurerInvoice(kurita)
    const result4 = adventurerInvoice(shin)

    expect(result).toEqual({
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
    })
    expect(result2).toEqual({
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
    })
    expect(result3).toEqual({
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
    })
    expect(result4).toEqual({
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
    })
  })

  it('should handle validation when client object is falsy (2)', () => {
    const result = adventurerInvoice()

    expect(result).toBe('Tidak ada client yang dikirimkan')
  })

  it('check restriction (-14)', async () => {
    const checkRestriction = new Restriction('../2.js')
    checkRestriction.rules = ['match', 'split', 'concat', 'search']
    const result = await checkRestriction.readCode()
    expect(result).toBe(null)
  })
})
