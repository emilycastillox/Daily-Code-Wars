//Instructions: Your task is to create a function that does four basic 
//mathematical operations.

//The function should take three arguments -
//operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

//P: operation (string/char), value1(num), value2(num)
//R: result of numbers after a applying said operation
//E: ('+', 4, 7) --> 11, ('-', 15, 18) --> -3, ('*', 5, 5) --> 25
//P: 1. Funtion 2. Variables 3. Operation 4. Return result


function basicOp(operation, value1, value2)
{
 return eval(value1 + operation + value2)
  
}

//eval is a function that evaluates JS code represented as a string