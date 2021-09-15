/**
 * 挑选一组属性组成新的值
 */
type MyPick<T,K extends keyof T> = {
    [P in  K]: T[P];
}