/**
 * FUNCTIONS E9: Advanced function return types
 * =====================================================================================
 * @task
 * Create a function that works as follows:
 * * The function name is 'splitFirstAndLastNames' strictly.
 * * The function takes the str (first and last names as a string, separated by a space) as an argument
 * * The function returns an array of 2 items: [<firstName>, <lastNAme>]
 * * Argument types must be annotated
 * * The function return type must be annotated
 * * You can use any type of function syntax!
 * Example: splitFirstAndLastNames('Jonathan Higger') => ['Jonathan', 'Higger'];
 * Example: splitFirstAndLastNames('Andrei Obushnyi') => ['Andrei', 'Obushnyi'];
 * !!! The function must be exported !!!
 */

// Your code goes here...
export const splitFirstAndLastNames = (str: string): string[] => {
  let splStr: string[] = str.split('')
  let result: string[] = []
  let subStr1: string = ''
  let subStr2: string = ''
  let spaceIndex: number = 0


  for (let j: number = 0; j < splStr.length; j++) {
    if (splStr[j].charCodeAt(0) === 32) {
      spaceIndex = j
    }
  }
  for (let i: number = 0; i < splStr.length; i++) {
    if (i < spaceIndex) {
      subStr1 += `${splStr[i]}`
    } else if ( i > spaceIndex) {
      subStr2 += `${splStr[i]}`
    }
  }
  return result = [subStr1, subStr2]
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
