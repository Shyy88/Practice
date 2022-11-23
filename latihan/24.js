function sorting(arrNumber) {
    let smt = 0;
    let sort = false
    while (sort === false) {
        for (let i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] > arrNumber[i + 1]) {
                sort = true
                smt = arrNumber[i];
                arrNumber[i] = arrNumber[i + 1];
                arrNumber[i + 1] = smt
            }
        }
        if (sort ===  true) {
            sort = false
        } else {
            break;
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    let highest = arrNumber[arrNumber.length - 1]
    let highestCount = 0;
    for (let i = arrNumber.length - 1; i >= 0; i--) {
        if (highest !== arrNumber[i]) {
            break;
        } else {
            highestCount++;
        }
    }
    return highestCount
  }

  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    let highest = listSort[arrNumber.length - 1];
    
    return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${countHighest} kali`

  }

  let inputArr = [2, 8, 4, 6, 8, 5, 8, 4]
  
  console.log(mostFrequentLargestNumbers(inputArr))