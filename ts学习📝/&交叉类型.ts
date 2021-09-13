/**
 * & 交叉类型取多个类型的并集，但是如果key相同类型不同，则为never
 */
interface A1{
    name:string;
    age:number;
}
interface A2{
    age:string;
    color:string;
}

/**
 * T的类型为 {name: string; age: number; age: never}
 * 注意，age因为Eg1和Eg2中的类型不一致，所以交叉后age的类型是never
 */
type T = A1 & A2
const val:T = {
    name: '',
    color: '',
    age: (function a() {
        throw Error()
    })(),
}