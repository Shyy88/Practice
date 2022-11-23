function changeMe(arr) {
    // you can only write your code here!
    if (!arr.length) {
        console.log('');
    }
    let result = {};
    for (let i= 0; i < arr.length; i++) {
        result.firstName = arr[i][0];
        result.lastName = arr[i][1];
        result.gender = arr[i][2];
        if (!arr[i][3]) {
            result.age = 'Invalid Birth Year';
        } else {
            result.age = 2022 - arr[i][3]
        }
        let objName = `${i + 1}. ${result.firstName} ${result.lastName}:`
        console.log(objName);
        console.log(result); 
    }
}

changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
changeMe([]);