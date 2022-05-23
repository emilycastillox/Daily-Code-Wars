// instructions:
/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// P: A String
// R: A boolean, true or false if it is a panagram or not
// E: "The quick brown fox jumps over the lazy dog." - True
//      "This is not a pangram." - false
// P: going to check if it uses A-Z, 

function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const str = string.toLowerCase();
    
    for (let i = 0; i < alphabet.length-1; i += 1) {
      if (str.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    
    return true;
  }