/**
 * 看到标题不要迷茫，这是你学习new的时候偶然发现的辨析
 * Object.create(null)和new Object()到底有什么区别呢！
 */
let obj1 = new Object();
/**
 * {}
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
 */

 let obj2 = Object.create(null);
 /**
  * {}
No properties
  */

  //object.create(null) 的没有任何property 是不是因为 他创建的是真实的null null本来就是原型链的起点 null没办法 __protp__再去查找了，但是new Object()创建的其实是一个基础类型 {}, 他确实可以往上查找