//Instructions: Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
//Param: a number
//Return: an array of integers from n - 1, n>0
//Example: n = 5 ---> [5,4,3,2,1]
//Pseudeo: use .reverse method probably, conditionals? probably even for loop, or toArray method. map?

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };