/**
 * FUNCTIONS E11: Additional practice
 * =====================================================================================
 * @task
 * Create a function that works as follows:
 * * The function name is 'isNameInArray' strictly.
 * * The function takes two arguments:
 * * * An array of string values (an array of names)
 * * * A name (a string value)
 * * Argument types must be annotated
 * * You can use any type of function syntax!
 * Example: isNameInArray(['Jon', 'Michael', 'Andrey'], 'Michael') => true;
 * Example: isNameInArray(['Jon', 'Michael', 'Andrey'], 'James') => false;
 * !!! The function must be exported !!!
 */
  // your code goes here...



  export const isNameInArray = (arr: string[], name: string) => {
    let result: boolean = false
    for (const item of arr) {
      if (item == name) {
        result = true
      }
    }
    return result
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
