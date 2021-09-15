type MyParameters<T extends (...args:any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * @example
 * type Eg = [arg1: string, arg2: number];
 */
type Eg = MyParameters<(arg1: string, arg2: number) => void>;

/**
 * 1. T extends (...args: any) => any 是想要约束T是个函数类型，可以理解成 T extends Function
 * 2. 整个意思就是 判断T是否是函数类型，如果是函数类型，就使用infer P让ts自己推导出函数的参数类型，并将推导的结果存到类型P上，否则就返回never
 */

 /**
  * 重点！！！！
  * 1. infer关键词作用是让Ts自己推导类型，并将推导结果存储在其参数绑定的类型上。 infer P就是将结果存在类型P 上，供使用
  * 2. infer关键词只能在extends类型上使用，不能在其他地方使用
  */

  /**
   * 重点++++++！！
   * 1. type Eg = [arg1: string, arg2: number];是一个元组。是一个「具名」方式的元组
   */
/**
 * 具名方式
 */
type Tuple2 = [name: string, age?: number];
const b: Tuple2 = ['aa', 11];
const b2: Tuple2 = ['aa'];

/**
 * 普通方式
 */
type Tuple1 = [string, number?];
const a: Tuple1 = ['aa', 11];
const a2: Tuple1 = ['aa'];


