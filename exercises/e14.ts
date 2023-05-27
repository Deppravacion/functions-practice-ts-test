/**
 * FUNCTIONS E14: Additional practice
 * =====================================================================================
 * @task
 * Create a function that works as follows:
 * * The function name is 'sumOfTwoIntegers' strictly.
 * * The function takes an argument of an object of 2 items of type 'number both'
 * * The function returns:
 * * * The sum of the two given integers by default
 * * * If the two numbers are same, then returns triple their sum.
 * * Argument type must be annotated
 * * You must use argument destructuring
 * * You must use the exported Type Alias as you will need it imported in the next exercise
 * * You can use any type of function syntax!
 * Example: sumOfTwoIntegers({ num1: 13, num2: 14 }) => 27
 * Example: sumOfTwoIntegers({ num1: 12, num2: 12 }) => 72
 * !!! The function must be exported !!!
 */

// Your code goes here

export type Mytype = { 
  num1: number
  num2: number
}

export const sumOfTwoIntegers = ({num1, num2}: Mytype):number => {
  let result: number = 0
  if (num1 == num2) {
    result = 3 * (num1 + num2)
  } else {
    result = num1 + num2
  }
  return result
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
