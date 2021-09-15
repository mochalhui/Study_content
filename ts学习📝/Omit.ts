type MyOmit<T,K> = {
    [P in Exclude<keyof T, K>]:T[P]
}

//如果你感觉和Exclude有什么区别 Exclude更像是key的联合 omit则是{key:value}联合