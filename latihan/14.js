
  
function tentukanDeretGeometri(arr) {
let result;
  let arrDivide = arr[1] / arr[0];
  for(let i = 1; i < arr.length-1; i++) {
    result = arr[i] * arrDivide === arr[i+1] ? true : false;
    if (!result) {
        break;
    }
  }
  return result;
}

function tentukanDeretGeometri(arr) {
    let deretGeometri = true;
    let pola = arr[1] / arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] / arr[i] !== pola) {
          deretGeometri = false;
          break;
      }
    }
    return deretGeometri;
  }

let inputArr = [1, 3, 9, 27, 81]

console.log(tentukanDeretGeometri(inputArr));