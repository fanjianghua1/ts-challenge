import { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}
type MyReadOnly<T> = { readonly [K in keyof T]:T[K]} 

type cases = [
    Expect<Equal<MyReadOnly<Todo1>, Readonly<Todo1>>>,
]

type m = MyReadOnly<{name:string,age:number}>
/**
 *  感觉和之前的题目考察的一样。都是对  keyof 与 in 操作符 的操作
 * 
 *  这里是MyReadOnly<T> T 加不加extends 约束都是可以的，
 */
