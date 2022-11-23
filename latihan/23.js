function sorting(array) {
    let smt = 0;
    let sort = false
    while (sort === false) {
        sort = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                sort = false
                smt = array[i];
                array[i] = array[i + 1];
                array[i + 1] = smt
            }
        }
    }
    return array
  }
  
  function sortingByType(array) {
    let result = [];
    let number = [];
    let str = [];
    let bool = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            number.push(array[i]);
        } else if (typeof array[i] === 'string') {
            str.push(array[i]);
        } else if (typeof array[i] === 'boolean') {
            bool.push(array[i]);
        }
    }
    number = sorting(number);
    str = sorting(str);
    bool = sorting(bool)
    result.push(number, str, bool)
    return result 
  }
  
  function sortAllClean(array) {
    let result = [];
    let number = [];
    let str = [];
    let bool = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (!isNaN(array[i])) {
                number.push(array[i]);
            }
        } else if (typeof array[i] === 'string') {
            str.push(array[i]);
        } else if (typeof array[i] === 'boolean') {
            bool.push(array[i]);
        }
    }
    number = sorting(number);
    str = sorting(str);
    bool = sorting(bool)
    result.push(number, str, bool)
    return result 
  }


  let inputArrSorting = [2, 4, 6, 8, 2, 3];
  let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
  let inputArrSortingClean = [undefined, null, 456, "def", NaN, [], true, 123, "bcd", false];
  console.log(sorting(inputArrSorting));
  console.log(sortingByType(inputArrSortingType));
  console.log(sortAllClean(inputArrSortingClean));