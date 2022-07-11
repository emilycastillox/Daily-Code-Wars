/*
INSTRUCTIONS:

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

P: A string
R: a string with the first letter of each word capitalized 
E: "hi my name is emily" // "Hi My Name Is Emily"
P: Turn string into array, make sure it is all in lowercase, index of first letter in each word, and make it uppercase
join string tgether and return

*/

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ') // ['the', 'tales', 'of', 'scotch!']
    let capsArray = []
  
    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1)) //'the' = 'T' + 'he'
    });
  
    return capsArray.join(' ')
  }

