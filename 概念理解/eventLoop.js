//来源文章 https://juejin.cn/post/6844904100195205133

//同步代码  （书写顺序即执行顺序）
// const syncFunc = () => {
//     const time = new Date().getTime();
//     while(true) {
//         if (new Date().getTime() - time > 2000) {
//             break;
//         }
//     }
//     console.log(2);
// }
// console.log(1);
// syncFunc();
// console.log(3)


//异步代码 
// const asyncFunc = () => {
//     setTimeout(() => {
//         console.log(2)
//     },2000)
// }
// console.log(1);
// asyncFunc();
// console.log(3);

// console.log('1');//同步任务
// setTimeout(() => {
//   console.log('2');//宏任务
// },0);
// Promise.resolve().then(() => {
//   console.log('5');//微任务
// })
// new Promise((resolve) => {
//   console.log('3');//同步任务
//   resolve();
// }).then(() => {
//   console.log('4');//微任务
// })

// console.log('outer');

// setTimeout(() => {
//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('setImmediate');
//   });
// }, 0);

console.log('outer');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});
