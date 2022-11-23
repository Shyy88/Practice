function deepSum(arr) {
    // write your code here
    let hasil = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let g = 0; g < arr[i][j].length; g++) {
                hasil += arr[i][j][g];
            }
        }
    }
    if (!hasil) {
        return 'No Number'
    } else {
        return hasil
    }
}


console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
]));