/*Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

Return true if these subarrays exist, and false otherwise.

A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [4,2,4]
Output: true
Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.

*/

var findSubarrays = function(nums) {
    let sum =[] 
    for(let i = 0; i < nums.length-1; i++){
        sum[i] = nums[i]+nums[i+1]
    }
    const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
    if(sum.length<=1){
        return false
    }else{
        return toFindDuplicates(sum).length>0?true:false
    }
};
console.log(findSubarrays([1,2,3,4,5])) 
