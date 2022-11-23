let nama = "Misk Spasela"
let id = "Ri021rTRz"

let tahun = 0;
let anggota = '';
let medal = '';

for (let i = 0; i < id.length; i++) {
    if (id[i] === 'R') {
        anggota = 'anggota biasa';
        tahun++  
    } else if (id[i] === 'S') {
        anggota = 'pengurus sekte';
        tahun++ 
    }
}

if (anggota === 'anggota biasa') {
    if (tahun >= 5) {
        medal = 'gold'
    }
    
} else if (anggota === 'pengurus sekte') {
    if (tahun >= 3) {
        medal = 'platinum'
    }
}

if (!medal) {
        console.log(`${nama} sudah menjadi ${anggota} selama ${tahun} tahun.`);
} else {
        console.log(`${nama} sudah menjadi ${anggota} selama ${tahun} tahun dan berhak mendapatkan medali ${medal}`); 
    }

