/**
 * FUNCTIONS E8: Different types of function syntax
 * =====================================================================================
 * @task
 * Create three functions using 3 types of syntax: named, arrow and function expression (with anonymous function)
 * * Functions/Variables names:
 * * * Named function: getValueWithConditionOne
 * * * Arrow Function name: getValueWithConditionTwo;
 * * * Variable name for the function expression: getValueWithConditionThree;
 * * Every works as follows:
 * * * The function take an object as an argument
 * * * * The object contains two key-value pairs of type number both
 * * * If the numbers are both equal to 40, return the sum of them
 * * * Else return the doubled sum of them
 * * The argument type must be annotated
 * * You can/should use Type Alias in this exercise
 * Example: getValueWithConditionOne({ num1: 40, num2: 40 }) => 80;
 * Example: getValueWithConditionOne({ num1: 20, num2: 30 }) => 100;
 * !!! ALL THREE functions must be exported !!!
 */

// Your code goes here...
export function getValueWithConditionOne({num1, num2}: {num1: number, num2: number}): number {
  let result: number = 0
  return result = ( num1 === 40 && num2 === 40) ? num1 + num2 : 2 * (num1 +num2)
}

export const getValueWithConditionTwo = ({num1, num2}: {num1: number, num2: number}): number => {
  let result: number = 0
  return result = ( num1 === 40 && num2 === 40) ? num1 + num2 : 2 * (num1 +num2)
}

export const getValueWithConditionThree = function ({num1, num2}: {num1: number, num2: number}): number {
  let result: number = 0
  return result = ( num1 === 40 && num2 === 40) ? num1 + num2 : 2 * (num1 +num2)
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
