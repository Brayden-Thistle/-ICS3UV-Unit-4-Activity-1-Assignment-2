/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-18
 * @fileoverview this program creates a right angle triangle of numbers with a specific amount of rows given by the user.
 */

//variables
const rownumber: number = Number(prompt("How many Rows would you like?"));
let printer: string = "";

//nest loop
for (let scale = 1; scale <= rownumber; scale++) {
  for (let row = 1; row <= scale; row++) {
    printer += row + "";
  }
  //makes a new row so it turns into a right angle triangle
  printer += "\n";
}
//printing the numbers
console.log(printer);

console.log("\nDone.");

