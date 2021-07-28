/**
 * Arguments对象只定义在函数体中，包括了函数的参数和其他属性，在函数题中，arguments指代该函数的Arguments对象
 */
function foo (name,age,sex) {
    console.log(arguments);
}
foo('name','age','sex')
/**
 * Arguments(3) ["name", "age", "sex", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    0: "name"
    1: "age"
    2: "sex"
    callee: ƒ foo(name, age, sex)
    length: 3
    Symbol(Symbol.iterator): ƒ values()
    __proto__: Object
 */

 //length属性--> 实参长度
 function func1(a,b,c){
     console.log('实参长度'+arguments.length);
 }
 console.log('形参长度'+func1.length);
 func1(1,2)

 //callee属性 --> 通过他可以调用函数自身

 //arguments和对应参数的绑定
 function func2 (name,age,sex,hobbit) {
     console.log(name,arguments[0]);//name name
     
     //改变形参
     name = 'new name';
     console.log(name, arguments[0]);//new name new name

     //改变arguments
     arguments[1] = 'new age';
     console.log(age, arguments[1]);// new age new age

     //测试未传入的是否会绑定
     console.log(sex);//undefined
     sex = 'new sex';
     console.log(sex, arguments[2]);//new sex undefined
     arguments[3] = 'new hobbit';
     console.log(hobbit, arguments[3]);// undefined new hobbit
 }

 func2('name', 'age')
 //总结： 传入的实参 会相互影响  形参 互不干扰 听不明白就看上面的代码

 //函数间参数传递 这个例子虽然牵强 但是好理解
 function a1(){
     a2.apply(this,arguments);
 }
 function a2(a){
     console.log(a);
 }
 a1(1)

 //es6 ...运算符 轻松转成数组 其实是因为 arguments是Symbol(Symbol.iterator)所以她是可迭代的
 function b(...arguments){
     console.log(arguments);//[1,2,3,4]
 }
 b(1,2,3,4)

