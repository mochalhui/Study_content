/**
 * SymmetricDifference<T,U> 获取没有同时存在与T与U内的类型
 * 核心实现：（3点）分发是联合类型、交叉类型、Exclude
 * 1. Exclude第二个参数T&U获取的是所有类型的交叉类型
 * 2. Exclude第一个参数是T｜U 这是利用「联合类型在extends中的分发特性」,可以理解为 Exclude<T,T&U> | Exclude<U,T&U>
 */
type MySymmetricDifference<T,K> = Exclude<T|K,T&K>
