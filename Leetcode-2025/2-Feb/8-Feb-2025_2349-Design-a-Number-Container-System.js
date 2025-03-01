// Sources: https://leetcode.com/problems/design-a-number-container-system/description/?envType=daily-question&envId=2025-02-08

/*
2349. Design a Number Container System
Medium - 1439

Design a number container system that can do the following:

Insert or Replace a number at the given index in the system.
Return the smallest index for the given number in the system.
Implement the NumberContainers class:

NumberContainers() Initializes the number container system.
void change(int index, int number) Fills the container at index with the number. If there is already a number at that index, replace it.
int find(int number) Returns the smallest index for the given number, or -1 if there is no index that is filled by number in the system.

Example 1:

Input
["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
[[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
Output
[null, -1, null, null, null, null, 1, null, 2]

Explanation
NumberContainers nc = new NumberContainers();
nc.find(10); // There is no index that is filled with number 10. Therefore, we return -1.
nc.change(2, 10); // Your container at index 2 will be filled with number 10.
nc.change(1, 10); // Your container at index 1 will be filled with number 10.
nc.change(3, 10); // Your container at index 3 will be filled with number 10.
nc.change(5, 10); // Your container at index 5 will be filled with number 10.
nc.find(10); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20. 
nc.find(10); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.

Constraints:

1 <= index, number <= 109
At most 105 calls will be made in total to change and find.
*/

var NumberContainers = function () {
  this.m = new Map();
  this.d = new Map();
};
NumberContainers.prototype.change = function (i, n) {
  if (this.m.has(i) && this.m.get(i) == n) return;
  this.m.set(i, n);
  if (!this.d.has(n)) this.d.set(n, new MinHeap());
  this.d.get(n).push(i);
};
NumberContainers.prototype.find = function (n) {
  if (!this.d.has(n)) return -1;
  let h = this.d.get(n);
  while (h.size() && this.m.get(h.peek()) !== n) h.pop();
  return h.size() ? h.peek() : -1;
};
function MinHeap() {
  this.a = [];
}
MinHeap.prototype.push = function (x) {
  this.a.push(x);
  let i = this.a.length - 1;
  while (i > 0) {
    let p = (i - 1) >> 1;
    if (this.a[p] <= this.a[i]) break;
    [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
    i = p;
  }
};
MinHeap.prototype.pop = function () {
  let r = this.a[0],
    l = this.a.pop();
  if (this.a.length) {
    this.a[0] = l;
    let i = 0,
      n = this.a.length;
    while (true) {
      let l = i * 2 + 1,
        r = i * 2 + 2,
        m = i;
      if (l < n && this.a[l] < this.a[m]) m = l;
      if (r < n && this.a[r] < this.a[m]) m = r;
      if (m === i) break;
      [this.a[i], this.a[m]] = [this.a[m], this.a[i]];
      i = m;
    }
  }
  return r;
};
MinHeap.prototype.peek = function () {
  return this.a[0];
};
MinHeap.prototype.size = function () {
  return this.a.length;
};
