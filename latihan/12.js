

function sittingArrangement(person, column) {
    if (column < 1) {
        return 'Invalid number'
    }
    let result = [];
    let smt = [];
    let angka = 0;
    while (true) {
      for (let i = 0; i < column ; i++) {
        if (person[angka] === undefined) {
            smt.push('Kursi Kosong')
        } else {
           smt.push(person[angka]) 
        }
         angka++
      }
      result.push(smt)
      smt = [];
      if (!person[angka]){
          break;
      }
   
    }
    return result
}


let listPerson = ["Lukman", "Adam", "Dimas", "Hansin", "Orion" ]
let column = 6
  
console.log(sittingArrangement(listPerson,column));