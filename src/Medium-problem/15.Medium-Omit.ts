import { Equal, Expect } from '@type-challenges/utils'

// 采用ts的内置模块完成。
// type MyOmit<T, K> =Pick<T,Exclude<keyof T,K>>
type MyExclude<T,K> =T extends K ? never : T 
type  MyOmit<T,K>= { 
    [key in MyExclude<keyof T, K>]:T[key] 
}

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}

/**
 * 
 * Pick ：从第一个类型中，选出与第二个类型所有的共同属性
 * Exclude ： 用于从类型T中去除不在U类型中的成员
 * 因此可以两者结合，组成 Omit 。 同样也作为一种内置类型
 * 
 * 但是这里有个问题：为什么同样的逻辑，重新声明一个类型MyExclude就可以 。直接使用却会报错（ 这里可能是ts的bug，所以需要另外用一个MyExclude 来映射一下 ）
 * 
 */