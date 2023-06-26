/**
 * 请你编写一个函数，检查给定的对象是否是给定类或超类的实例。
 * 可以传递给函数的数据类型没有限制。
 * 示例 1：
 * 输入：func = () => checkIfInstance(new Date(), Date)
 * 输出：true
 * 解释：根据定义，Date 构造函数返回的对象是 Date 的一个实例。
 */

/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === undefined || obj === null) return false;
    while(obj!==null) {
        if(obj.constructor === classFunction) return true;
        obj = Object.getPrototypeOf(obj);
    } 
    return false;   
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */  