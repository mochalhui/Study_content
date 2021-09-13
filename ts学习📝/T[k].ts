/**
 * T[keyof T]的方式，可以获取到T所有key的类型组成的联合类型
 * T[keyof K]的方式，获取到的是T中的key且同时存在与K的类型组成的联合类型
 * 如果[]重的key有不存在T中的是any； 因为ts也不知道是什么类型，就是any，并且会报错
 */
interface Eg1{
    name:string;
    readonly age:number;
}
type V1 = Eg1['name'];//string
type V2 = Eg1['name'|'age'] ;//string|number
type V3 = Eg1['name'|'hihih'];// Property 'hihih' does not exist on type 'Eg1'.


class Eg3{
    private name:string;
    protected age: number;
}
type V4 = Eg3['name'|'hih'];