function countMe(arr) {
    // write your code here
 let result = {}
 for (let i = 0; i < arr.length; i++) {
    let  nama = arr[i];
    if (!result.hasOwnProperty(nama)) {
        result[nama] = 1
    } else {
        result[nama] += 1
    }
 }
 return result
}

  let inputArr = ["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]
  console.log(countMe(inputArr));  