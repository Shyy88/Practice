// function cariModus(arr) {
//     // write your code here
//     let check = 0;
//     let countFx = 0;
//     let numFx = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let count1 = 0;
//         let num1 = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === arr[i]) {
//                 count1++;
//                 num1 = arr[i];
//             } else if (arr[j] !== arr[i]) {
//                 check++
//             }
//         }
//         if (count1 > countFx) {
//             countFx = count1 
//             numFx = num1
//         }
//     }

//     if (numFx === 1 || numFx === 0 || check === 0) {
//         return -1
//     }
//     return numFx 
// }

// console.log(cariModus([10, 4, 5, 2, 4]));
// console.log(cariModus([5, 10, 10, 6, 5]));


function angkaPrima(angka) {
    // you can only write your code here!
    num = Math.abs(angka);
    if (num > 3) {
        if (num % 2 === 0 || num % 3 === 0) {
            return false
        }
    }
    return true
}

console.log(angkaPrima(3));
console.log(angkaPrima(6));
console.log(angkaPrima(7));




function cariModus(arr) {
    // you can only write your code here!
    let count = [];
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
       count.push(0);
       for (let j = 0; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
             count[i]++
          }
          if (max < count[i]) {
            max = count[i]
          }
       }
    }
    if (max === 1) {
       return -1;
    } else if (max === arr.length) {
       return -1;
    }
 
    for (let i = 0; i < count.length; i++) {
       if (count[i] === max) {
          return arr[i];
       }
    }
 }

// console.log(cariModus([10, 4, 5, 2, 4]));
// console.log(cariModus([5, 10, 10, 6, 5]));


