/**
 * call: call()方法在使用一个指定的this值和若干指定的参数值的前提下调用某个函数和方法
 * this指向改变！！！
 * 
 */
const foo = {
    value: 1
};
function bar(){
    console.log(this.value);
}
bar.call(foo)//call改变了this的指向 指向了foo 并且调用了bar函数！

/**
 * 经过作者（不是我 是这个github的作者！的想法
 * 他觉得模拟的步骤可以分为
 * 1.将函数设为对象的属性 foo.fn = bar
 * 2.执行该函数 foo.fn()
 * 3.删掉该函数（因为你不能给人家对象新增一个函数吧 delete foo.fn
 */

 //第一版call函数
 Function.prototype.myCall = function (context) {
     //首先要获取调用call的函数，用this可以获取
     context.fn = this;
     context.fn();
     delete context.fn()
 }
//那如果传入参数不确定咋办呢 ？很好你可能不知道什么是传入参数不确定
const para1 = {
    value : 2
};
function func1 (name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
func1.call(para1, 'kevin', 18);//看到这 突然懂了call 记得复习啊宝！
//别害怕！不确定就arguments!这也是arguments的好
//就看这个例子
//对于func1来说 他的arguments
// arguments = {
//     0: foo,
//     1: 'kevin',
//     2: 18,
//     length: 3
// }
var args = [];
for (let i = 1; i < arguments.length; i++) {
    args.push('arguments['+ i + ']');//取第二个到最后一个参数
}
//那怎么把参数数组给执行函数呢
//第二版
Function.prototype.myCall2 = function (context){
    context.fn = this;
    var args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments['+ i + ']');//取第二个到最后一个参数
    }
    eval('context.fn('+ args + ')');//eval()会把传入的str当成JavaScript指令执行 这里的args会自动调用toString()这个方法
    delete context.fn;
}
//注意⚠️：this参数可以传null，当传null的时候，默认指向window
//🌰
var value = 'window';
function func2 () {
    console.log(this.value);
}
bar.call(null);
//注意： 函数是可以有返回值的！！！
//🌰
var obj = {
    value: 'hihi'
};
function func3 (name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}
// Object {
//     value: 'hihi',
//     name: 'kevin',
//     age: 18
// }

//第三版代码
Function.prototype.myCall3  = function (context) {
    let context = context || window;
    context.fn = this;

    var args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments['+ i + ']');
    }

    var result = eval('context.fn('+ args + ')');
    delete context.fn;
    return result;
}

//同理可得apply实现
Function.prototype.myApply = function (context) {
    let context = context || window;
    context.fn = this;

    var args = arguments[1] ? [] : arguments[1];
    var result = eval('context.fn('+ args + ')');
    delete context.fn;
    return result;

}