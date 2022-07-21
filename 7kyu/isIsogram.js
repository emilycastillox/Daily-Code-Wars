/* 
Instructions:


An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)


/  a string
/ true or false - if the string is an Isogram or not
/ 'nope' // true; 'loose' // false
/ 1. iterate through each character in the string, 
2. compare each character to one another, and see if it is equal to each other.
3. if they are, return false
4. if they are not equal to each other, return true

*/

function isIsogram(str){
    //...
    let arr = str.toLowerCase().split('')
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i + 1]){
        console.log(false)
      }else if(arr[i] !== arr[i + 1]){
        console.log(true)
      }
    }
  }


  // using charAt

  function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
  }

// other solution - works for non adjacent chars but O(n^2)

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }

isIsogram("Dermatoglyphics")