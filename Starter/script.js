/* 
Victor is trying to build his tip calculator, using the rules: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above.
2. Create an array 'bills' containing all 10 test bill values
3. Create empty arrays for the tips and the totals ('tips' and 'totals')
4. Use the 'calcTip' function you before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

5. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
  5.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  5.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  5.3. Call the function with the 'totals' array
*/
