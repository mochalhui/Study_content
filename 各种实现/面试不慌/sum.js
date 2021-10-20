/**
 * @param {number} num
 */
function sum(num) {
    const fun2 = function(num1) {
        return num1? sum(num + num1) : num; 
    }
    fun2.valueOf = () => num;
    return fun2;
}
console.log(sum(1)(2) == 3)
  