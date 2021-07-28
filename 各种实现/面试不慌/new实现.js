//new 操作
/**
 * 1、创建一个空的JavaScript对象{}
 * 2、将这个空对象的原型对象指向构造函数的原型属性，从而继承原型上的方法
 * 3、将步骤1新创建的对象作为this的上下文
 * 4、如果该对象没有返回对象，则返回this
 */
function myNew(){
    //1、用new Object()的方法创建了一个空对象
    let obj = new Object(),
    //2、取出第一个参数，就是我们传入的构造函数，因为shift会修改原数组，所以arguments会被去除第一个参数
    Constructor = [].shift.call(arguments);
    //3、将obj的原型指向构造函数，这样obj就能访问到Constructor的原型上的属性
    obj.__protp__ = Constructor.prototype;
    //4、使用apply，改变构造函数this的指向，到新建的对象，这样obj就可以访问到构造函数中的属性
    Constructor.apply(obj,arguments);
    //5、返回obj
    return obj;
}
//其实上面这种情况已经包含大多数了 是没有返回值的情况
//如果以后你来看你不明白什么是没有返回值 那我来举个例子
function Dog(name,age){
    this.name = name;
    this.age = age;
}
//再让我给你举个例子，什么是有返回值（其实这就是两个情况，返回值是一个对象或者只是一个基本类型）
//返回值是一个对象
function Cat(name,age){
    this.name = name;
    this.age = age;
    return{
        name:name,
        habit: 'fish'
    }
}//如果是这种，创建的实例只能读到name和habit，不能读到age

//返回值是一个基本类型
function Fish(name,age){
    this.name= name;
    this.age = age;
    return 'i am a fish';
}//如果是这种，他创建的实例能读到所有name age

function MyNewFinal () {
    let obj = new Object();
    Constructor = [].shift.call(arguments);
    obj.__protp__ = Constructor.prototype;
    let temp = Constructor.apply(obj,arguments);
    return typeof temp === Object ? temp : obj ;
}


