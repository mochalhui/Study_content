/**
 * 不如我们来学一下什么是柯里化
 * 
 * 
 */
function sum(a,b,c) {
    return a+b+c;
}
console.log(sum(1,2,3))

function currySum(a) {
    return function (b){
        return function(c) {
            return a+b+c;
        }
    }
}
let sum1 = currySum(1);
let sum2 = sum1(2);
console.log(sum2(3))

/**
 * 柯里化用途之一： 参数复用
 */

 function volume(length, width, height) {
    return function(width) {
        return function(height) {
            return length * width *height;
        }
    }
 }

 let length = volume(200);
 let width1 = length(20);
 let width2 = length(22);
 width1(22);
 width2(33);
 length(22)(33)


 //🌰
 function execOnce(fun) {
     let flag = true;
     return function() {
         if (flag) {
             fun && fun();
             flag = false;
         }
     }
 }
 let onceConsole = execOnce(function () {
     console.log('只打印一次')
 })
 onceConsole();
 onceConsole()
 //用柯里化实现
 let onceCurry = function () {
    
     if (flag) {
         (function(){
             console.log('只打印一次');
         })()
         flag = false;
     }
 }
//  onceCurry()
//  onceCurry()
