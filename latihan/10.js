let input = 'hactiv8';

function ladder(word) {
    let result = [];
    let smt = []
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length -i; j++) {
         smt.push(word[j])
          }  
      result.push(smt)
      smt = [];
      } 
      
      return result
}

console.log(ladder(input));