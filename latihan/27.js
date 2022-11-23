// Graded Challenge
function convertSymbol(arr) {
    //code here
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let angka = '';
        for (let j = 0; j < arr[i].length; j++) {
            switch (arr[i][j]) {
                case '!':
                    angka += 1
                    break;
                case '@':
                    angka += 2
                    break;
                case '#':
                    angka += 3
                    break;
                case '$':
                    angka += 4
                    break;
                case '%':
                    angka += 5
                    break;
                case '^':
                    angka += 6
                    break;
                case '&':
                    angka += 7
                    break;
                case '*':
                    angka += 8
                    break;
                case '(':
                    angka += 9
                    break;
                case ')':
                    angka += 0
                    break;
            }
        }
        result.push(Number(angka))
    }
    return result;
}
//console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']))
/*
[
  19, 37, 12, 25, 22,
  15, 73, 35, 25, 31
]
*/


function decrementOdd(arr) {
    // code here
    let result = [];
    let smt = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            smt = arr[i] - arr.length
            result.push(smt)
        } else {
            result.push(arr[i])
        }
    }
    return result
}
//console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))
/*
[
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]
*/


function splitNumber(arr) {
    // code here
    let result = [];
    let smt = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 27) {
            result.push(smt)
            smt.push(arr[i])
            smt = [];
            
        } else if (arr[i] === 63) {
            result.push(smt)
            smt.push(arr[i])
            smt = [];
        } else {
            result.push(smt)
            smt.push(arr[i])
        }
        //result.push(smt)
    }
    return result
}
 
//console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]))

/*
 [
   [9], 
   [12, 15, 22, 5],
   [25, 15, 21]
 ]
*/

function convertNumber(arr) {
    // code here
    let result = ''
    for (let i = 0; i < arr.length; i++) {
    let kata = ''
    for (let j = 0; j < arr[i].length; j++) {
        //console.log(arr[i][j])
        switch (arr[i][j]) {
            case 1:
                kata += 'a'
                break;
            case 2:
                kata += 'b'
                break;
            case 3:
                kata += 'c'
                break;
            case 4:
                kata += 'd'
                break;
            case 5:
                kata += 'e'
                break;
            case 6:
                kata += 'f'
                break;
            case 7:
                kata += 'g'
                break;
            case 8:
                kata += 'h'
                break;
            case 9:
                kata += 'i'
                break;
            case 10:
                kata += 'j'
                break;
            case 11:
                kata += 'k'
                break;
            case 12:
                kata += 'l'
                break;
            case 13:
                kata += 'm'
                break;
            case 14:
                kata += 'n'
                break;
            case 15:
                kata += 'o'
                break;
            case 16:
                kata += 'p'
                break;
            case 17:
                kata += 'q'
                break;
            case 18:
                kata += 'r'
                break;
            case 19:
                kata += 's'
                break;
            case 20:
                kata += 't'
                break;
            case 21:
                kata += 'u'
                break;
            case 22:
                kata += 'v'
                break;
            case 23:
                kata += 'w'
                break;
            case 24:
                kata += 'x'
                break;
            case 25:
                kata += 'y'
                break;
            case 26:
                kata += 'z'
                break;
        }
    }
    result += kata + ' '
 }
 return result
}

console.log(convertNumber([[9], [12, 15, 22, 5], [25, 15, 21]]))

/*
i love you
*/
  
function result(arr) {
    // code here
    let cvSimbol = convertSymbol(arr);
    let dec = decrementOdd(cvSimbol);
    let splitted = splitNumber(dec);
    let cvNumber = convertNumber(splitted);
    return cvNumber
}

// console.log(result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^']))
// lets go guyz
