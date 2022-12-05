function getStartUp(arr) {
    // Write your code here
    let arr1 = [];
    let arrFnl = [];
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr[i].length; j++) {
            if (arr[i][j] === '-' || !arr[i][j]) {
                arr1.push(str);
                str = '';
            } else {
                str += arr[i][j]
            }
        }
        arrFnl.push(arr1);
        arr1 = [];  
    }
    
    let eCommerce = '';
    let eCommerceCount = Number.MIN_VALUE
    let tourism = '';
    let tourismCount = Number.MIN_VALUE
    let healthTech = ''
    let healthTechCount = Number.MIN_VALUE
    let agroTech = ''
    let agroTechCount = Number.MIN_VALUE

    for (let i = 0; i < arrFnl.length; i++) {
        if (arrFnl[i][1] === 'E') {
            if (eCommerceCount < arrFnl[i][0].length) {
                eCommerceCount = arrFnl[i][0].length
                eCommerce = arrFnl[i][0]
            }
        }
        if (arrFnl[i][1] === 'T') {
            if (tourismCount < arrFnl[i][0].length) {
                tourismCount = arrFnl[i][0].length
                tourism = arrFnl[i][0]
            }
        }
        if (arrFnl[i][1] === 'H') {
            if (healthTechCount < arrFnl[i][0].length) {
                healthTechCount = arrFnl[i][0].length
                healthTech = arrFnl[i][0]
            }
        }
        if (arrFnl[i][1] === 'A') {
            if (agroTechCount < arrFnl[i][0].length) {
                agroTechCount = arrFnl[i][0].length
                agroTech = arrFnl[i][0]
            }
        }
    }
    return [eCommerce, tourism, healthTech, agroTech]
  }

  
  //Test Case 
  
  console.log(getStartUp(['Bikilipik-E','Tikit.cim-T','Ilidiktir-H', 'TiniHib-A']))
  // [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]
  
  console.log(getStartUp(['Lizidi-E', 'Iirbnb-T', 'TikingSiyir.ci-A', 'PriSihit-H', 'DiktirSihit-H', 'eFishiry-A', 'babaAli-E', 'eMeat-A']))
  // [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]
  
  console.log(getStartUp(['Tikipidia-E', 'Triviliki-T', 'Hilidic-H', 'Siyirbix-A','Shipee-E','Bhinniki-E', 'BleBle.cim-E', 'PigiPigi-T', 'tomazo-A']))
  // [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]
  
  console.log(getStartUp(['FoGoods-A', 'FoMarts-E', 'Lazora-E', 'eFruit-A', 'FoHealth-H', 'FoTravel-T', 'HaiDoc-H', 'ticket.net-T']))
  // [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]