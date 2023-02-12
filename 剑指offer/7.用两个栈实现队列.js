/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
 * [[],[3],[],[],[]]
 * 输出：[null,null,3,-1,-1]
 */

let CQueue = function () {
  this.stackA = [];
  this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stackB.length) {
    return this.stackB.pop();
  } else {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
    if (!this.stackB.length) {
      return -1;
    } else {
      return this.stackB.pop();
    }
  }
}
