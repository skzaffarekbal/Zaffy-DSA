/*
56. Merge Intervals
Medium - 1463

Topics: Array, Sorting
Companies: Netflix, Grammarly, Yelp, Docusign, X, Wix, Zepto, Disney, TikTok, Oracle, Meta, Bloomberg, Salesforce, ServiceNow, ConsultAdd, IXL, Roblox, Morgan Stanley, Zoho, Yandex, Ozon, Microsoft, Cruise, J.P. Morgan, Amazon, LinkedIn, Siemens, Apple, Walmart Labs, Yahoo, Nvidia, Tencent, Atlassian, Expedia, eBay, Cisco, MakeMyTrip, Instacart, Uber, ByteDance, Palantir Technologies, Two Sigma, PhonePe, Samsung, Dropbox, Adobe, PayPal, Snap, Agoda, Turing, Accenture, Snowflake, Infosys, Media.net, Goldman Sachs, IBM, DE Shaw, Databricks, Airbnb, Citadel, Pinterest

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merge = [];
  for (let interval of intervals) {
    if (!merge.length || interval[0] > merge[merge.length - 1][1]) merge.push(interval);
    else merge[merge.length - 1][1] = Math.max(merge[merge.length - 1][1], interval[1]);
  }
  return merge;
};
