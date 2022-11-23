let kata =  'i love javascript'
let vokal = 'aiueo';
let result = '';
for (let i = 0; i < kata.length; i++) {
    let perHuruf = kata[i];
    let perHurufDollar = false;
    for (let j = 0; j < vokal.length; j++) {
       let dict = vokal[j]; 
       if (perHuruf === dict){
        perHurufDollar = true;
       } 
    }
if (perHurufDollar === true) {
    result += '$'
} else{
    result += perHuruf
}
}
console.log(result);
