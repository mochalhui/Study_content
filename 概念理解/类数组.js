/**
 * 类数组对象：拥有一个length属性和若干索引属性的对象！重点！！length和索引！！
 * 
 */
//举个🌰
var arr = ['name','age','sex'];
var arrLike = {
    0:'name',
    1:'age',
    2:'sex',
    length: 3
}
//读写
console.log(arr[0]);//name
console.log(arrLike[0]);//name

arr[0] = 'new name';
arrLike[0] = 'new name';

//长度
console.log(arr.length)//3
console.log(arrLike.length)//3

//遍历
for (let i = 0; i < arr.length; i++) {

}
for (let i = 0; i < arrLike.length; i++) {

}
//看到这里 就觉得 类数组是个小流氓
//人家数组是真真切切调方法，类数组对象就是仗着自己的索引key和length key假装和人家一样
//如果类数组非要数组的方法就用Function.call

console.log(Array.prototype.join.call(arrLike,'&&'))//new name&&age&&sex

console.log(Array.prototype.slice.call(arrLike))//[ 'new name', 'age', 'sex' ]

//如果类数组想要转数组怎么办呢！
//1\slice
Array.prototype.slice.call(arrLike);
//2\splice
Array.prototype.splice.call(arrLike,0);
//3\Array.from
Array.from(arrLike);
//4、apply
Array.prototype.concat.apply([],arrLike);
