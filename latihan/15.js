function mengelompokkanAngka(arr) {
 let smt1 = [];
 let smt2 = [];
 let smt3 = [];
 let result = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0) {
      smt1.push(arr[i]);
    } else if(arr[i] % 2 === 0){
      smt2.push(arr[i]);
    } else {
      smt3.push(arr[i]);
    }
  }
  result.push(temp2,temp3,temp1);
  return result;
}
let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(mengelompokkanAngka(inputArr));

function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let result = [[], [], []];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        result[2].push(arr[i]);
      } else if ( arr[i] % 2 === 0 ) {
        result[0].push(arr[i]);
      } else {
        result[1].push(arr[i]);
      }
    }
    return result;
}