/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]


P: array of strings
R: returning array with friends names - names < 4 chars
E: above
P: filter, item length < 4, if true push into a new array

*/

function friend(friends){
    //your code here
    return friends.filter(el => el.length === 4)
  
  }