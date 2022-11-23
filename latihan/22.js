function urutkanAbjad(str) {
    let smt = [];
    for(let i = 0; i < str.length; i++){
        smt.push(str[i]);
    }
    for (let i = 0; i < smt.length; i++) {
        for (let j = 0; j < smt.length; j++) {
            if (smt[i] < smt[j]) {
                let smt2 = smt[i]
                smt[i] = smt[j]
                smt[j] = smt2
            }
        }
    }
    let result = ''
    for (let i = 0; i < smt.length; i++) {
        result += smt[i]
    }
    return result
}

console.log(urutkanAbjad('hello'));