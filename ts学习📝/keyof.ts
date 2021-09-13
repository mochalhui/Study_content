/**
 * keyof 索引查询
 * 对应「任何类型T」,keyof T的结果为T上所有「共有」属性key的联合
 */
interface Eg1 {
    name: string,
    readonly age: number,
}

type T1 = keyof Eg1 ;//type T1 = "name" | "age"
class Eg2 {
    private name: string;
    public readonly age: number;
    protected home:string;
}
type T2 = keyof Eg2;//type T2 = "age"
//因为name和home不是公有属性，所以不能被keyof获取到