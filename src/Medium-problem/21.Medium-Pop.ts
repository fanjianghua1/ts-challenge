import { Equal, Expect } from '@type-challenges/utils'

type Pop<T extends any[]> = T extends [...infer rest, infer R] ? rest:never

type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<['a', 'b', 'c', 'd', ]>, ['a', 'b', 'c']>>,
]

/**
 * 
 * 原理和获得数组最后一个元素类似。
 * 
 */