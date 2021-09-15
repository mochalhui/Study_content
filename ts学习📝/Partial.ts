/**
 * 将所有T的属性变成可选
 */
type MyPartial<T> = {
    [P in keyof T]? : T[P];
}