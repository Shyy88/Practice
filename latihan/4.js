let kalimat = ''
let totalKata = 0;
if (kalimat.length > 0) {
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
           if (kalimat[i-1] !== ' ') {
                totalKata++
            }
           }
        }  
    let prev = kalimat.length - 1
    if (kalimat[prev] !== ' ') {
        totalKata++
    }
}
console.log(totalKata);