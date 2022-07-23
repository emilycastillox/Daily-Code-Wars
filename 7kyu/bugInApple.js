/**
 INSTRUCTUIONS

Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]

apple=[
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","B","A","A","A"]
],answer=[4,1];

P: array of arrays - of strings
R: index of array, then index of 'B' - an array of 2 indices
E: above
P: iterate through each array
find the index of 'B'

 */

function sc(apple){
    for(let i = 0; i < apple.length; i++){
        apple[i].indexOf('B')
    }
    return 
  }