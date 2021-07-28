var data = [];
for (let i = 0; i < 3; i++) {
    (data[i] = function () {
        console.log(arguments.callee.i)
    }).i = i;
}
data[0]();//0
data[1]();//1
data[2]();//2

//这是我学习arguments的时候看到的 但是我现在完全不理解

//开始理解了
//明确函数也是一个对象，可以给函数加属性
var fun1 = function(){}

fun1.test = 'test';

console.log(fun1.test)//给fun1这个函数加属性
//同理可得 上面的data[i]是一个函数 加了一个属性i 值是i
//我懂了！

