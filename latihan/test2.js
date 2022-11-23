let kata = true
let result = '';

if (kata === 0 || kata === '') {
    result += 'Invalid data'
} else if (typeof kata === 'string') { 
    result += `username ${kata}`;  
} else if (typeof kata === 'number') {
        result += `age ${kata}`;
} else if (typeof kata) {
    if (kata === false) {
        result += 'cannot proceed without agreement'
    } else {
        result += 'thank you for agreeing' 
    }
} 
console.log(result);

