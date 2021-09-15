type MyRecord<T extends keyof any,K> = {
    [P in T]: K;
}
//keyof any 得到string|number|symbol