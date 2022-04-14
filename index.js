function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const sum = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === sum) return true

    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  space: O(n)
*/

/* 
  Add your pseudocode here
  loop through array
  if target - a number = a number in array return true
  if not return false
*/

/*
  Add written explanation of your solution here
  we are looping through the array and taking the target target number and subtracting one of the index numbers in a loop, if the result equals another number in the index, then the function should return true. Otherwise, it should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
