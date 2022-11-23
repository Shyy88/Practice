let age = 19;
let canSwim = false;
let haveLicense = false;

let hasil = '';
if (age < 10) {
    hasil += 'Mohon maaf, kamu belum cukup umur!'
} else if (age <= 15 ) {
    if (!canSwim){
        hasil += 'Mohon maaf, kamu tidak bisa berenang!'
    } else {
        hasil += `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan snorkling`
    }
} else if (age >= 15) {
    if (!canSwim) {
        hasil += 'Mohon maaf, kamu tidak bisa berenang!'
    } else if (haveLicense === false && canSwim === true) {
        hasil += `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`
    } else {
        hasil += `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`
    }
}
console.log(hasil);