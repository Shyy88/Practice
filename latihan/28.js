function split(str) {
    let result = [];
    let smt = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ':' || !str[i]) {
            result.push(smt);
            smt = '';
        // } else if (str[i] === str[i].length - 1) {
        //     result.push(smt);
        //     smt = '';
        } else {
            smt += str[i]
        }
    }
    return result
}


function getAnimals(arr) {
    // Write your code here
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j <= arr[i].length; j++) {
        console.log(split(arr[j]))
       }
        
         
    }
    //return result
}


console.log(getAnimals(['Singa:K','Kuda:H','Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]

//console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]


// function filterMovie(genres) {
//     let movies = [
//         ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//         ["Action", "Mad Max", "The Batman", "Josh Wick"],
//         ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
//         ["Comedy", "Safety Last", "The Trip"]
//     ];
//     // write your code here
//     if (!movies || !genres) {
//         return [];
//     }

//     let result = [];
    
//     for (let i = 0; i < movies.length; i++) {
//         result.push(movies[i])
//     }
//     for (let i = 0; i < genres.length; i++) {
//         if (genres[i] === movies[i][0]) {
//             result += movies[i];
//         }
//     }

//     return result
// }

// function usersCanWatch(users) {
//      // write your code here
//      if (!users) {
//         return "Invalid Data!"
//      }


//  }



// console.log(filterMovie([ "Action", "Drama", "Comedy" ]));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

//console.log(filterMovie([ "Scifi", "Musical" ]));
// []


// console.log(usersCanWatch({
//     name: "Bari",
//     cinema: "XIV",
//     menu: "Action;Drama;Comedy"
//   })
// );
// /*
// [
//   ["Action", "Mad Max", "The Batman", "Josh Wick"],
//   ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//   ["Comedy", "Safety Last", "The Trip"]
// ]
// */

// console.log(usersCanWatch({
//     name: "Rizka",
//     cinema: "Cinepolos",
//     menu: "Scifi;Musical"
//   })
// );
// // "Movie not found"

// console.log(usersCanWatch());
// // "Invalid Data!"


function getPoints(history) {
    let itemPoint = {
        'Moonlight': 120,
        'Goldqueen': 550,
        'Beras Parist': 1200,
        'Minyak Fatma': 2500
    };
    // write your code here
}

function getPrizes(point) {
    let listPrize = [
        [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
        [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
        [10000, 'Payung', 'Panci']
    ];
    // write your code here
}

function betamart(pembeli) {
    // write your code here
}


const history = [
    'Minyak Fatma',
    'Moonlight',
    'Beras Parist',
    'Minyak Fatma',
    'Goldqueen',
    'Beras Parist',
    'Moonlight',
    'Moonlight',
    'Moonlight',
    'Minyak Fatma',
    'Goldqueen',
    'Goldqueen',
    'Minyak Fatma',
    'Beras Parist',
    'Beras Parist',
    'Moonlight',
    'Moonlight',
    'Minyak Fatma',
    'Minyak Fatma'
  ]
  
  console.log(getPoints(history))
  /**
  {
    totalPoint: 22170,
    belanjaanReport: { 'Minyak Fatma': 6, Moonlight: 6, 'Beras Parist': 4, Goldqueen: 3 }
  }
  */

  console.log(getPrizes(22000)) // [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy', 'Tissue' ]

  console.log(
    betamart({
      name: 'Ilham',
      histories: [
        'Moonlight',
        'Goldqueen',
        'Beras Parist',
        'Moonlight',
        'Goldqueen',
        'Beras Parist',
        'Minyak Fatma',
        'Minyak Fatma',
        'Minyak Fatma',
        'Moonlight',
        'Goldqueen',
        'Goldqueen',
        'Moonlight',
        'Beras Parist',
        'Beras Parist',
        'Minyak Fatma',
        'Minyak Fatma',
        'Moonlight',
        'Moonlight'
      ]
    })
  )
  /**
  {
    name: 'Ilham',
    belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
    prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
  }
  */