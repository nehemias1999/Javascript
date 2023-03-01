
/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = [];
    let nums1Index = 0;
    let nums2Index = 0;

    let maxLength = (nums1.length + nums2.length) % 2 === 0? ( 
        ((nums1.length + nums2.length) / 2) + 1
    ) : (
        (nums1.length + nums2.length) / 2
    );

    while(sortedArray.length < maxLength) {
        if((nums1[nums1Index] <= nums2[nums2Index]) || (nums2Index >= nums2.length)) {
            sortedArray.push(nums1[nums1Index]);
            nums1Index++;
        }

        else if((nums1[nums1Index] >= nums2[nums2Index]) || (nums1Index >= nums1.length)) {
            sortedArray.push(nums2[nums2Index]);
            nums2Index++;
        }
    }

    return (nums1.length + nums2.length) % 2 === 0? (
        (sortedArray[sortedArray.length - 2] + sortedArray[sortedArray.length - 1]) / 2
    ) : (
        sortedArray[sortedArray.length - 1]
    );
};

const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2));