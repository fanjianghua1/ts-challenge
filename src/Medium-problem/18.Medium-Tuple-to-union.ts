import { Equal, Expect } from '@type-challenges/utils'


// type TupleToUnion<T> = T extends Array<infer R> ? R :never
type TupleToUnion<T> = T extends (infer R)[] ? R : never
type cases = [
    Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
]
/**
 * 这里的话。还是关于extends分发的特性。只不过这里的类型是个元祖类型。
 * 所以一开始并不知道使用 Array<infer R> 的形式
 * 还是infer使用不熟练
 * 
 * 这里就好比两种创建数组类型的方式。 然后通过 infer 的模式匹配的相似原理来获得联合类型
 */