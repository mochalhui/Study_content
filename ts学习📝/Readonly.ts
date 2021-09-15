/**
 * 将T所有属性变成只读
 */
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}