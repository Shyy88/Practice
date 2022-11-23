let special = '!@#$%^&*';
let yoman = 'YOMAN';
let randomTickets = "YO!#QWEMAN&&ZB";
let point = 0;
let hasil = ''
let money = 1000 * randomTickets.length;

for (let i = 0; i < randomTickets.length; i++) {
     switch (randomTickets[i]) {
        case 'Y':
        case 'O':
        case 'M':
        case 'A':
        case 'N':
            point += 20
            break;
     
        default:
            for (let j = 0; j < special.length; j++) {
                if (randomTickets[i] === special[j]) {
                    point++
                    break;
                }
            }
     } 
}

if (point > 100) {
    hasil += `Kamu menghabiskan uang sejumlah ${money} dan kamu mendapatkan hadiah utama`
} else if (point >= 50) {
    hasil += `Kamu menghabiskan uang sejumlah ${money} dan kamu mendapatkan Playstation5`
} else {
    hasil += `Kamu menghabiskan uang sejumlah ${money} dan kamu mendapatkan permen karet gratis`
}
console.log(hasil);