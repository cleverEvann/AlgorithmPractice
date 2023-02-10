/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 现有矩阵 matrix 如下：
 * [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
   ]
   给定 target = 5，返回 true。
   给定 target = 20，返回 false。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//双重for循环
let findNumberIn2DArray = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] == target) {
                return true
            }
        }
    }
    return false
};
//优化
function findNumberIn2DArray(matrix, target) {
    let i = matrix.length-1
    let j = 0

    while( i>=0 && j <=matrix[0].length -1){
        if(matrix[i][j]>target){
            i--
        }else if(matrix[i][j] <target){
            j++
        }else return true
    }

    return false
};
