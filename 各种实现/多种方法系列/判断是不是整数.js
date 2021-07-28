//方法一：typeof+取余
//tip：为啥要typeof呢 因为falsy！！！ [] {} '' true 
function isIntegerOne(obj){
    return typeof obj === 'number' && obj%1 === 0;
}
//方法二： Math.round /floor/ceil
//tip：整数取整之后还是自己
function isIntegerTwo(obj) {
    return obj === Math.floor(obj)
}
//方法三： 位运算 
//tip: 不能超过32位
function isIntegerThree(obj) {
    return (obj | 0) === obj
}
//方法四： es6 Number.isInteger
Number.isInteger(1)