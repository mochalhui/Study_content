/**
 * FuncitonKeys<T>获取T类型中所有类型为函数的key 组成的联合类型
 */

 /**
  * @desc NonUndefined 判断T是否为undefined
  */
 type NonUndefined<T> = T extends undefined ? never : T;


 /**
  * 1. 约束参数T类型为object
  * 2. 通过映射类型K in keyof T 遍历所有的key，先通过NonUndefined<T[K]>undefined|null的类型，不符合的返回never
  * 3. 若T[K]为有效类型，则判断是否为Function类型，是的话返回K，否则never
  * 4. 最后经过{......}[keyof T]索引访问
  */
 type MyFunctionKeys<T extends object> = {
     [K in keyof T]: NonUndefined<T[K]> extends Function ? K : never;
 }[keyof T];


 /**
  * 也许你突然不懂 为什么一定要NonUndefined<T[K]>
  * 因为null和undefined可以赋值给其他类型，所以需要NonUndefined判断
  */