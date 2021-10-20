/**
 * toLocaleString() toString() valueOf() 区别
 * 
 * valueOf() 返回数组本身  「还是个数组」
 * toString() 返回由数组的每个值的等效字符串拼接而成的一个逗号分隔的字符串 「是个字符串了」
 *            会对数组的每个值调用toString()方法，以得到最终的字符串
 * 
 * toLocaleString() 可能跟toString()和valueOf()返回相同结果，但也不一定
 *                  会得到一个逗号分隔的数组值的字符串
 *                  和其他两个方法唯一区别，为了得到最终的字符串，会对数组每个值调用toLocalestring()方法。
 * 
 * tip： 如果数组中某一项是null/undefined，则在join()、toLocaleString()、toString()，valueOf()返回的结果会是个空字符串
 */

 let colors = ['red','green', 'blue'];
 console.log(colors); //[ 'red', 'green', 'blue' ]
 console.log(colors.toString()); //red,green,blue
 console.log(colors.valueOf());//[ 'red', 'green', 'blue' ]
 console.log(colors.toLocaleString())//red,green,blue

 let person1 = {
     toLocaleString() {
         return 'zzh';
     }, 
     toString() {
         return 'zhh'
     }
 }
 let person2 = {
     toLocaleString() {
         return 'hjz'
     }, 
     toString() {
         return 'hhz'
     }
 }
 let people = [person1,person2];
 console.log(people);
 console.log(people.toString());
 console.log(people.toLocaleString());
 console.log(people.valueOf());