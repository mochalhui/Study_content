//async function 会返回一个AsyncFunction对象的异步函数--> 隐 promise
//async function 返回的不是promsie，包装成promise.resolve//抛出异常，包装成promise.reject

//🌰
async function aa() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve('aaa');
        },1000);
    });
}
aa().then(res => {
    console.log(res);
})
console.log(typeof aa === 'function');//true
console.log(Object.prototype.toString(aa) );//[object Object]
console.log(Object.prototype.toString(aa()) );//[object Object]

//返回一个非Promise
async function a(){
    return 1;
}
const b = a();
console.log(b);// Promise {<resolved>: 1}
a().then(res => {
    console.log(res); // 1
})

// async function a(){
//     return bbb;
// }

// a()
// .then(res => {
//     console.log(res);
// })
// .catch( e => {
//     console.log(e); // ReferenceError: bbb is not defined
// });

//await 用于等待promise对象，只能在async function里用，await会暂停当前async知道promise执行完成
//若promise resolve， 则回调的resolve参数会作为await函数的值
//若reject，会抛出异常
//如果后面不是一个promise，就返回该值

//🌰
const p = function() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(1)
        },1000)
    })
}
const fn = async function() {
    const res = await p();
    console.log("res",res);
    const res2 = await 2;
    console.log(res2);
}
fn()

//把await放在try catch中捕获错误
const p2 = function() {
    return new Promise((res,rej)=>{
        console.log(ppppadsapfpasdfp);
        res();
    });
}
const f2 = async function() {
    try{
        await p2();
    }catch(e){
        console.log(e)
    }
}
f2();