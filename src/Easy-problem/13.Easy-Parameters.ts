import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type MyParameters<T extends (...args: any[]) => any> = T extends ((...args:infer R)=>any) ? R:[]

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

type cases = [
    Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
    Expect<Equal<MyParameters<typeof bar>, [boolean, {a: 'A'}]>>,
    Expect<Equal<MyParameters<typeof baz>, []>>,
]

/**
 * 
 * 模式匹配的方式，采用了extends 与 infer 。 但自己的问题和之前使用keyof  和 typeof 一样 不太知道在 ‘=’ 左边还是右边 使用 
 * 
 * infer 其实就一个声明 声明了一个临时的泛型，用于存储你匹配到的类型 . 也就是说 extends 左右 看起来应该和字符串模式匹配一样：原值 和 捕获组 一一对应。 
 * 如果没有infer 的声明，则显示找不到left的名称
 * 
 * 
*/
//数组的使用
type arr = [1,2,3]
type pop<T extends any[]> = T extends [...infer rest,infer R] ? [...rest]:never
let arr1:pop<arr> = [1,2]

// 字符串的使用
type str = 'wo ai zyy'
type reverse<S extends string,From extends string,To extends string> = S extends `${infer left}${From}${infer right}` ? `${left}${To}${right}`:never

// wo love zyy
type str1 = reverse<str,'ai','love'>