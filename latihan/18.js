function split(str, separator) {
    let result = [];
    let smt = '';
    for (let i = 0; i < str.length; i++) {
        if (!separator) {
            result.push(str[i])
        } else {
            if (str[i] === separator) {
                result.push(smt)
                smt = ''
            } else if (i === str.length - 1) {
                smt += str[i]
                result.push(smt)
            } else {
                smt += str[i]
            }
        }
    } 
    return result
}

function startUpCompetition(startUpList) {
    if (!startUpList) {
        return 'Invalid Data'
    }
    let result = [];
    console.log('Startup unicorn')
    for (let i = 0; i < startUpList.length; i++) {
    let sektorList = startUpList[i]
    let sektorName = sektorList[0]
    let kumpulanStartupDalamSektor = [];
        for (let j = 1; j < sektorList.length; j++) {
            let sektorListSplitted = split(sektorList[j], "-")
            if (Number(sektorListSplitted[1]) >= 14) {
                kumpulanStartupDalamSektor.push(sektorListSplitted[0])
                result.push(sektorListSplitted[0])
            } 
            
        }
        console.log(`${sektorName} ${kumpulanStartupDalamSektor.length} startup (${kumpulanStartupDalamSektor})`)
    }
     return `Total ${result.length} startup unicorn`
  }


let malaysia = [
    ['Ecommerce', 'Dropee-17', "testt-10"],
    ['Healthtech', 'BookDoc-18'],
    ['Agrotech', 'dahmakan-19'],
  ]
console.log(startUpCompetition(malaysia))

  // Startup unicorn
  // Ecommerce, 1 startup (Dropee)
  // Healthtech, 1 startup (BookDoc)
  // Agrotech, 1 startup (dahmakan)
  // Total 3 startup unicorn


let indonesia = [
    ['Ecommerce', 'Tikipidia-17', 'Bikilipik-08', 'Bhinniki-07', 'BleBle.cim-15'],
    ['Tourism', 'Triviliki-16', 'Tikit.cim-12'],
    ['Healthtech', 'Hilidic-15'],
    ['Agrotech', 'Siyirbix-17', 'TikingSiyir.ci-16']
  ]
console.log(startUpCompetition(indonesia))
//   // Startup unicorn
//   // Ecommerce, 2 startup (Tikipidia, BleBle.cim)
//   // Tourism, 1 startup (Triviliki)
//   // Healthtech, 1 startup (Hilidic)
//   // Agrotech, 2 startup (Siyirbix, TikingSiyir.ci)
//   // Total 6 startup unicorn
  
// let singapore = [
//     ['Ecommerce', 'Shipee-18', 'Lizidi-19'],
//     ['Tourism', 'HalalTrip-07', 'verylocaltrip.com-12'],
//     ['Healthtech', 'Doctor Anywhere-14', 'Healint-13'],
//     ['Agrotech', 'SINGROW-19', 'Simplyfresh-09', 'eFeedLink-18']
//   ]
// console.log(startUpCompetition(singapore))
  // Startup unicorn
  // Ecommerce, 2 startup (Shipee, Lizidi)   
  // Tourism (tidak ada startup unicorn)
  // Healthtech, 1 startup (Doctor Anywhere) 
  // Agrotech, 2 startup (SINGROW, eFeedLink)
  // Total 5 startup unicorn