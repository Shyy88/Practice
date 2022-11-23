function uniqueValue(arr) {
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] ) {
                hasil.push(arr[i])
            } 
         }
    }
    
    return hasil
}
console.log(uniqueValue(['Sepatu', 'Sepatu', 'Meja', 'Meja'])) // [ 'Sepatu', 'Meja']
//console.log(uniqueValue(['Baju', 'Penghapus', 'Penghapus', 'Sepatu', 'Penghapus'])) 
// ['Baju', 'Penghapus', 'Sepatu']