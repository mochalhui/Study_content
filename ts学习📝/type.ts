/**
 * type 的作用其实就是 给类型起一个新名字
 * 可以作用于基本类型，联合类型，元组以及其他任何需要手写的类型
 */

 type Second = number;
 let timeInSecond: number = 10;
 let time: Second = 10;

 /**
  * type和interface 相同点： 用来描述对象/函数的类型
  * ts编译成js后，所有的interace和type会被擦掉
  */

  type User = {
      name: string,
      age: number
  };
  type SetUser = (name: string, age: number) => void;

  /**
   * interface可以extends
   * type不能extends和implement
   * 但是type可以通过交叉类型实现interface的extends行为.
   * interface可以extendsytpe，type也可以与interface类型交叉
   */
  interface Name {
      name: string;
  }
  interface User1 extends Name {
      age: number;
  }
  let stu:User = {name: 'xiaopiaoliang', age: 1}
  console.log(stu)

  //上面的扩展可以用type交叉类型实现
  type Name_type = {
      name: string;
  }
  type Age_type = {
      age: number;
  }
  type User_type = Name_type &  Age_type;
  let stu_type: User_type = {name: 'xiaopiaoliang', age: 1}
  console.log(stu_type)

  //interface扩展type
  interface User_inter extends Name_type {
      age:number;
  }
  let stu_inter: User_inter = {name: 'xiaopiaoliang', age: 1}

  //type与interface交叉
  type User_type_two = Name & Age_type

  /**
   * interface可以被定义多次，但是type不可以,interface会觉得是合并
   */
  interface User11{
      name:string,
      age:number
  }
  interface User11{
    sex:string
  }
  let user: User11 = {name:'wang',age:1,sex:'man'};
  /**
   * type能使用in关键字生成映射类型,但interface不行
   */

   type Keys = "name" | "sex";
   type DulKey = {
       [key in Keys] : string;
   }
   let hihi : DulKey = {
       name:'zz',
       sex:"men"
   }