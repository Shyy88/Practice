function splitting(str) {
    let result = [];
    let smt = ''
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ',' || !str[i]) {
            result.push(smt)
            smt = ''
        } else {
            smt += str[i]
        }
    }
    return result
}

function meleeRangedGrouping(str) {
    let splitHasil = splitting(str)
    let result = [];
    let tmp = []
    let smt = ''
    for (let i = 0; i < splitHasil.length; i++) {
       for (let j = 0; j <= splitHasil[i].length; j++) {
        if (splitHasil[i][j] === '-' || !splitHasil[i][j]) {
            tmp.push(smt)
            smt = ''
        } else {
            smt += splitHasil[i][j]
        }
       }
       result.push(tmp);
       tmp = [];
    }
    let output = [];
    let melee = [];
    let ranged = []
    for (let i = 0; i < result.length; i++) {
        if (result[i][1] === 'Melee') {
            melee.push(result[i][0])
        } else if (result[i][1] === 'Ranged') {
            ranged.push(result[i][0])
        }
    }
    output.push(ranged);
    output.push(melee);
    return output
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))