/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  
 * 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
 * 输入：numbers = [3,4,5,1,2]
 * 输出：1
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
//最简单的  排序后的第一个值就是最小的  但肯定不是这样解
let minArray = function(numbers) {
    return  numbers.sort((a,b)=>a-b)[0]
};

let minArray2 = function(numbers) {
    //这个地方改进后是个优化后的题目，有点难度的，主要是由于输入的数组是升序排列的，并且旋转次数比较少，因此我们可以用二分法来判断旋转
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        } else if (numbers[mid] < numbers[high]) {
            high = mid
        } else {
            high -= 1;
        }
    }
    return numbers[low]
};
