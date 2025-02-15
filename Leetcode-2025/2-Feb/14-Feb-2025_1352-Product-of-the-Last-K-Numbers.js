/*
1352. Product of the Last K Numbers
Medium - 1428

Design an algorithm that accepts a stream of integers and retrieves the product of the last k integers of the stream.

Implement the ProductOfNumbers class:

ProductOfNumbers() Initializes the object with an empty stream.
void add(int num) Appends the integer num to the stream.
int getProduct(int k) Returns the product of the last k numbers in the current list. You can assume that always the current list has at least k numbers.
The test cases are generated so that, at any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.

Example:

Input
["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]

Output
[null,null,null,null,null,null,20,40,0,null,32]

Explanation
ProductOfNumbers productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]
productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8);        // [3,0,2,5,4,8]
productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32 

Constraints:

0 <= num <= 100
1 <= k <= 4 * 104
At most 4 * 104 calls will be made to add and getProduct.
The product of the stream at any point in time will fit in a 32-bit integer.

Follow-up: Can you implement both GetProduct and Add to work in O(1) time complexity instead of O(k) time complexity?
*/

/**
 * @class ProductOfNumbers
 * This class maintains a prefix product array to efficiently compute the product of the last k elements.
 */
var ProductOfNumbers = function () {
  this.prefixProduct = []; // Stores the prefix product
};

/**
 * @param {number} num
 * @return {void}
 * Adds a number to the list and updates the prefix product.
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    // Reset prefix product if a zero is encountered
    this.prefixProduct = [];
  } else {
    if (this.prefixProduct.length === 0) {
      // First element case
      this.prefixProduct.push(num);
    } else {
      // Compute new prefix product
      let last = this.prefixProduct[this.prefixProduct.length - 1];
      this.prefixProduct.push(last * num);
    }
  }
};

/**
 * @param {number} k
 * @return {number}
 * Returns the product of the last k elements.
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  if (k === this.prefixProduct.length) {
    // Product of all elements in prefixProduct
    return this.prefixProduct[this.prefixProduct.length - 1];
  } else if (k > this.prefixProduct.length) {
    // If k is greater than available elements, return 0
    return 0;
  } else {
    // Compute the division of the prefix product
    return parseInt(
      this.prefixProduct[this.prefixProduct.length - 1] /
        this.prefixProduct[this.prefixProduct.length - k - 1]
    );
  }
};

/**
 * Dry Run for Input:
 * ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
 * [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
 */

// Step 1: Initialize the object
var obj = new ProductOfNumbers();
console.log('Output: [null]'); // First operation always returns null

// Step 2: Add(3)
obj.add(3);
// prefixProduct = [3]
console.log('null');

// Step 3: Add(0)
obj.add(0);
// A zero resets the prefixProduct
// prefixProduct = []
console.log('null');

// Step 4: Add(2)
obj.add(2);
// prefixProduct = [2]
console.log('null');

// Step 5: Add(5)
obj.add(5);
// prefixProduct = [2, 10] (2 * 5)
console.log('null');

// Step 6: Add(4)
obj.add(4);
// prefixProduct = [2, 10, 40] (10 * 4)
console.log('null');

// Step 7: getProduct(2)
console.log(obj.getProduct(2)); // Expected: 20
// Last 2 elements: [5, 4] → 5 * 4 = 20

// Step 8: getProduct(3)
console.log(obj.getProduct(3)); // Expected: 40
// Last 3 elements: [2, 5, 4] → 2 * 5 * 4 = 40

// Step 9: getProduct(4)
console.log(obj.getProduct(4)); // Expected: 0
// Since 0 was encountered earlier, any product involving it will be 0

// Step 10: Add(8)
obj.add(8);
// prefixProduct = [2, 10, 40, 320] (40 * 8)
console.log('null');

// Step 11: getProduct(2)
console.log(obj.getProduct(2)); // Expected: 32
// Last 2 elements: [4, 8] → 4 * 8 = 32

/*
  Final Output:
  [null,null,null,null,null,null,20,40,0,null,32]
  */
