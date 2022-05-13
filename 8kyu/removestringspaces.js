// Instuctions: Simple, remove the spaces from the string, then return the resultant string.


function noSpace(x){
    let newString = ''
    for (let i = 0; i < x.length; i++){
      if (x[i] !== ' '){
        newString = newString + x[i]
      }
    }
    return newString
  }