type Json = {
    [key:string]:number
};
enum Type {
    key = "key",
    value = "value",
}
// function fun(json:Json, type: Type) {
//     if (type === Type.key) {
//         return Object.keys(json);
//     }
//     if (type === Type.value) {
//         return Object.values(json);
//     }
//     return [];
// }
/**
 * 可以看到json的value是number类型
 * 最终希望得到的 传'key' 的时候返回string[], 传'value' 的时候返回number[]
 * 然后function fun的返回值就是一个联合类型了，string[]| number[]
 * 调用的时候就会出现下面的问题
 */
const json: Json = {
    'age' : 1
}
const values = fun(json,Type.value)
/**
 * 可以发现 values是一个联合类型了！，string[] | number[]
 * 如果想强制就要类型断言了 as string[]
 * 不妨试试函数重载
 */


 /**
  * 我们分别声明三个结果
  * 其中，结果1和结果2是函数的分支，代表两种不同的结果，这也是预期的结果
  * tip： 结果1和结果2 都只是声明！！！不是运行的函数！！！留意后面的冒号，没有花括号
  */
//结果1
function fun(json: Json, type: Type.key): string[];
//结果2
function fun(json: Json, type: Type.value): number[];
//包含以上所有结果的最终结果
function fun(json:Json, type: Type) {
    if (type === Type.key) {
        return Object.keys(json);
    }
    if (type === Type.value) {
        return Object.values(json);
    }
    return [];
}
/**
 * 也许你看到这里还不明白为什么「函数重载」的好处
 * 但是这真正开发过程中，会有一个函数有多种返回值，为了避免歧义，很必要有函数重载
 */
/**
 * 多嘴一句类型断言
 * 尽量避免使用 const ABC = function balabla() as string 
 * 这种很不好 不好看 不好用 很奇怪
 */