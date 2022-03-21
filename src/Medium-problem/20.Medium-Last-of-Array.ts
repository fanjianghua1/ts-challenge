import { Equal, Expect } from '@type-challenges/utils'

type Last<T extends any[]> = T extends [...infer rest,infer R] ? R:never

type cases = [
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
/**
 * 
 * 这里一开始我在使用时。想着 any[...infer rest,infer R] 的形式
 * 但是那样的话只能有一个infer的声明。
 * 
 */