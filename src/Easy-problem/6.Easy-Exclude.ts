import { Equal, Expect} from '@type-challenges/utils'

type MyExclude<T, U> = T extends U ? never : T 

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

/**
 * 其作为ts 所内置的 预定义的条件类型
 * Exclude<T, U> - 用于从类型T中去除不在U类型中的成员
 * 
 * extends 的特性：类型分发， 如果裸类型 它会分开判断 再将结果联合起来：构成新的联合类型 。
 * 
 * 两者的区别应该就是有没有 [] 括起来。
 */

type nakedType<T>= T extends any? T[] : never
type noNakedType<T> = [T] extends [any]? T[]:never

//裸类型： string[]  | number[] 
let nt:nakedType<string|number>

//不是裸类型：  (string | number) []
let nnt:noNakedType<string|number>