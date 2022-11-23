function targetTerdekat(arr) {
  var indexO = arr.indexOf("o")
  var jarak = 0
  var jarakTerdekat = arr.length

  if (arr.indexOf("x") === -1) {
    return 0
  }
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      jarak = Math.abs(i - indexO)
      if (jarak < jarakTerdekat) {
        return jarak
      }
    }
  }
}

function targetTerdekat(arr) {
    let tgtO = 0;
    let tgtX = [];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] == 'x'){
            tgtX.push(i);
        } else if (arr[i] == 'o') {
            tgtO = i
        } 
    }
    
    if (tgtX.length == 0) {
        return 0
    } else {
        if (tgtX[0] > tgtO) {
            return tgtX[0] - tgtO
        } else {
            return tgtO - tgtX[tgtX.length-1]
        }
    }
}

function targetTerdekat(arr) {
    let result = 0;
    let x = -1;
    let o = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            if (o > -1) {
                if (result === 0) {
                    result = i - o;
                } else if (i - o < result) {
                    result = i - o;
                }
            }
            o = -1;
            x = i;
        } else if (arr[i] === 'o') {
            if (x > - 1) {
                if (result === 0) {
                    result = i - x;
                } else if (i - x < result) {
                    result = i - x;
                } 
            }
            x = -1;
            o = i;
        }
    }
    return result;
}
