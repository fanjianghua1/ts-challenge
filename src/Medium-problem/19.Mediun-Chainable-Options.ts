import { Alike, Expect } from '@type-challenges/utils'

type Chainable<T extends object = {}>= {
    option<K extends string,V extends any>(key: K, value:V): V extends infer R? Chainable<{[key in K]: R} & T>: never
    get(): T
}

declare const a: Chainable
const result1 = a
.option('foo', 123)
.option('bar', { value: 'Hello World' })
.option('name', 'type-challenges')
.get()

const result2 = a
.option('name', 'another name')
// // @ts-expect-error
.option('name', 'last name')
.get()

type Expected1 = {
    foo: number
    bar: {
        value: string
    }
    name: string
}

type Expected2 = {
    name: string
}


type cases = [
    Expect<Alike<typeof result1, Expected1>>,
    Expect<Alike<typeof result2, Expected2>>,
]

/**
 * 
 * 这里有两个问题，一个是对于object对象的约束判断，因为函数也是对象类型
 * 一个是extends infer R ？的使用
 * 这个需要好好理解一下
 * 
 * 同时还有交叉类型 & 的使用 ，结合两种类型的合并后结果
 */