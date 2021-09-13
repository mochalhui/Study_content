/**
 * 用于interface，表示继承
 */
interface T1 {
    name:string;
}
interface T2 {
    sex:string;
}

interface T3 extends T1,T2{//T3 = {name: string, sex: number, age: number}
    age:number;
}
/**
 * interface支持多重继承 ,隔开
 * type实现继承，更可以说成取并集 & 连接（交叉类型）
 */


 /**
  * extends表示条件类型，可用于条件判断
  * 表示条件判断，如果前面的条件满足，则返回问号后的第一个参数，否则第二个，类似于js的三元运算
  */
 type X1 = 'x' extends 'x' ? 1 : 2; //1
 type X2 = 'x' | 'y' extends 'x' ? 1 : 2; //2
 type P<T> = T extends 'x' ? 1 : 2;
 type X3 = P<'x'|'y'>;//1｜2

 /**
  * X2和X3值不一样的原因：
  *  1. 如果是简单的类型判断，则是直接判断前面的类型是否🉑️分配给后面的类型
  *  2. 若extengs前面的类型是泛型，且泛型传入的是联合类型，则会依次判断该联合类型的所有子类型是否可分配给extends后面的类型 （是分发过程）
  */
 //如果不想被分解（分发），做法也很简单，可以通过简单的元组类型包裹以下：
 type P<T> = [T] extends ['x'] ? 1 : 2;
/**
 * type A4 = 2;
 */
type A4 = P<'x' | 'y'>

