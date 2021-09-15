type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new(...args: infer P) => any ? P : never;

/**
 * 约束T为拥有构造函数的类，一定要有这个abstract修饰符
 * 判断T是满足约束的类时候，利用infer P自动推导构造函数的参数类型，并最终返回该类型
 */

 /**
  * 为什么要有abstract
  * 什么是抽象类
  * 和普通类有什么区别
  */

  /**
   * 普通类
   */
  class MyClass {}

  /**
   * 抽象类
   */
  abstract class MyAbstractClass {}

  const c1 : typeof MyClass = MyClass;
  const c2 : typeof MyClass = MyAbstractClass// Cannot assign an abstract constructor type to a non-abstract constructor type.

  const c3 : typeof MyAbstractClass = MyClass;
  const c4 : typeof MyAbstractClass = MyAbstractClass;

  //由此看出，如果将类型定义为抽象类（抽象构造函数），则既可以赋值为抽象类，也可以赋值为普通类；而反之则不行。

  /**
   * 上面的typeof MyClass和MyClass有什么区别
   */

   /**
    * 定义一个类
    */
   class People {
       name: number;
       age: number;
       constructor(){}
   }

   const p1: People = new People();
   const p2: People = People;//Property 'age' is missing in type 'typeof People' but required in type 'People'

   const p3: typeof People = new People();//Property 'prototype' is missing in type 'People' but required in type 'typeof People'.
   const p4: typeof People = People;

   /**
    *当把类直接作为类型时， 该类型约束的时 该类型必须是类的实例 ，即该类型获取的时该类上的实例属性和实例方法（原型方法）
    */
   /**
    * 当把typeof Class作为类型时，该类型约束的是 满足该类的类型， 即 该类型获取的是该类上的静态属性和静态方法
    */