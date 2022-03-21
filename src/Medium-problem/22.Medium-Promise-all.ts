import { Equal, Expect } from '@type-challenges/utils'

declare function PromiseAll<T extends any[] = any[]> (values:readonly [...T]):
    Promise<
        {
            [key in keyof T]:T[key] extends Promise<infer R>
                ?R
                :T[key]
        }
    >

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])


type cases = [
    Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
    Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
    Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
]

/**
 * 
 * 这个的话主要是一开始没有读懂题意。Promise不知道从哪引入的类型。
 * 而且对于readonly 的判定不是很明确 
 * 就是对于结果不是很清楚。 [1, 2, number]  和 [number, number, number] 是怎么得到的。
 * 
 */