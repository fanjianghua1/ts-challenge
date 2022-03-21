import { Equal, Expect } from '@type-challenges/utils'

type MyReturnType<T> = T extends (...args:any[])=>infer R ? R : never


type cases = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>,
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
    a: [12, 'foo']
    bar: 'hello'
    prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

/**
 * 考察点还是 infer 与 extends 的结合
 * 
 * 这里注意到了 。 对于返回值是三元表达式形式的：其typeof 后 的类型是 1｜2 （联合类型） 
 * 
 */

