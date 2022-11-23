function graduates (students) {
    // you can only write your code here!
    let output = {};
    let kkm = 75;

    for (let i = 0; i < students.length; i++) {
        let smt = {};
        if (!output[students[i].class]) {
            output[students[i].class] = [];
            if (students[i].score > kkm) {
                smt.name = students[i].name;
                smt.score = students[i].score;
                output[students[i].class].push(smt);
            }
        } else {
            if (students[i].score > kkm) {
                smt.name = students[i].name;
                smt.score = students[i].score;
                output[students[i].class].push(smt);
            }
        }
    }
    return output
 }

// console.log(graduates(
//     [{"name":"Dimitri","score":90,"class":"foxes"},{"name":"Alexei","score":85,"class":"wolves"},{"name":"Sergei","score":74,"class":"foxes"},{"name":"Anastasia","score":78,"class":"wolves"}]
//     ))


function cariMedian(arr) {
    // you can only write your code here!
   if (arr.length % 2 !== 0) {
    const med = Math.floor(arr.length / 2);
    return arr[med];
   } else {
    const med = Math.floor(arr.length / 2);
    const hasil = (arr[med] + arr[med - 1]) / 2
    return hasil
   }
}

console.log(cariMedian([1, 2, 3, 4, 5]))