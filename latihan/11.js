
function vocalSeeker(board) {
    let vokal = 'AaIiUuEeOo'
   let result = ''
  for (let h = 0; h < board.length; h ++){
       for (let i = 0; i < board[h].length; i++) {
        for (let j = 0; j < vokal.length; j++) {
            if (board[h][i] === vokal[j]) {
                result += board[h][i]
                break;
            }
        }
    }
  }
    return `vokal ditemukan ${result.length} dan kumpulan vokal adalah ${result}`
}
  

  
  
  let board = [
    ["*","*","*",10],
    ["*","*",-5,-10,"*",100],
    ["a","A","o","b"]
    ]
  
  console.log(vocalSeeker(board));