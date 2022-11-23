let ID = "udsaB2131";
let isMarried = true;
let  jumlahAnak = 3;

let result = '';
for (let i = 0; i < ID.length; i++) {
    if (ID[i] === 'F') {
        result = 11000000;
        break;
    } 
    if (ID[i] === 'B') {
        result = 10000000;
        break;
    }
}
if (isMarried === true) {
    result += 300000 + (jumlahAnak*100000)
    }

console.log(result);
