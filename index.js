function hasTargetSum(array, target) {
  // let counter = 0;

  // Write your algorithm here
  for (let i = array.length - 1 ; i > 0 ; i--){
    // n - 1 steps
    for (let j = i-1 ; j >= 0 ; j--){
      // i - 1 steps
      // counter++;
      if ((array[i] + array[j]) === target){
        debugger;
        return true;
      }
    }
  }
  // console.log("Number of iterations: " + counter);
  return false;
}

/* 
  Write the Big O time complexity of your function here

  the initial two nested loops take a Quadratic Time: O(n²)

  After optimization:
  The outer loop will run from i=n to 1 so it will take time complexity of O(n - 1)
  The inner loop will run from j=i-1 to 0 so it will decrease the search by one after each itration.
  (For example, if n=5 (array length), i will start from 4 to 1, while j will start from (i-1) to 0, 
  the final result is the summation of itrations (j=0 to j=i-1) or (j=0 to j=n-2), 
  which is itrations= ∑(i-1) for the period i=[1-n], the total itrations for our example is 15) 
  So, in total it will take O(∑(i-1), i=[1-n]) which is less than Quadratic Time.
  Note: you can cancle comment on lines 2, 9 and 16 to see the total number of itrations.
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers from last number
  if the addition of this number with any other number behind it is equal to the target, return true
  if reaches the start of the array, return false
*/

/*
  Add written explanation of your solution here

  The program iterates through each element in the array starting from the end (n element) and checks all possible combinations to reach the target,
  in the next itration (n-1), we check every number except the nth element because we already checked all possible combinations for it
  the next itration (n-2) will skip checking (n-1) and (n) elements, and so on for next itrations.
  return true if any pair adds up to the target sum.
  if all itrations end without finding a pair that adds up to the target sum, the function returns false. 
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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));

  console.log("");

  console.log("Expecting: True");
  console.log("=>", hasTargetSum([4, 1, 3, 2, 5], 6));
}

module.exports = hasTargetSum;
