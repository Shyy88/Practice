function attack(damage) {
    return damage - 2
   }
   
function damageCalculation(numberOfAttacks, damagePerAttack) {
    return numberOfAttacks * attack(damagePerAttack)
    
}


let numAttack = 10
let damage = 4
console.log(damageCalculation(numAttack,damage));

let result = 0;

while (numberOfAttacks > 0) {
  result += attack(damagePerAttack);
  numberOfAttacks--;
}

return result;
