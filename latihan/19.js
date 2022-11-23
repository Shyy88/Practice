function tukarBesarKecil(kalimat) {
    let hurufKapital = kalimat.toUpperCase()
    let hurufKecil = kalimat.toLowerCase()
    let result = '';
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === hurufKapital[i]) {
            result += hurufKecil[i]
        } else if (kalimat[i] === hurufKecil[i]) {
            result += hurufKapital[i]
        } else {
            result += kalimat[i]
        }
    }
    return result
}
    
var input = 'Hello World'
console.log(tukarBesarKecil(input));
