/**
 * 同步任务队列：队列中都是同步函数，reduce可以很容易遍历
 */
const fn1 = function (i) {
    return i + 1;
}
const fn2 = function (i) {
    return i * 2;
}
const fn3 = function (i) {
    return i * 100;
}

const taskList = [fn1, fn2, fn3];
let a = 1;
const res = taskList.reduce((sum, fn) => {
    sum = fn(sum);
    return sum;
},a);

console.log(res);//400

/**
 * 异步任务队列：队列中都是异步函数 需要依次执行
 */

 const f1 = function () {
     return new Promise((res,rej) => {
         setTimeout(function(){
             console.log('f1');
             res();
         },2000);
     })
 }
 const f2 = function () {
     return new Promise((res,rej) => {
         setTimeout(function () {
             console.log('f2');
             res();
         },1000);
     })
 }
 const f3 = function () {
     console.log('f3');
     return Promise.resolve('1')
 }
 const asyncTaskList = [f1, f2, f3];

 (async function(){
     for (let fn of asyncTaskList) {
         await fn();
     }
 })();