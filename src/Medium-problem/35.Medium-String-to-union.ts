import { Equal, Expect } from '@type-challenges/utils'

type StringToUnion<T extends string> = T extends '' 
    ? never
    : T extends `${infer first}${infer last}` 
    ? first | StringToUnion<last>
    :T

type cases = [
    Expect<Equal<StringToUnion<"">, never>>,
    Expect<Equal<StringToUnion<"t">, "t">>,
    Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
    Expect<Equal<StringToUnion<"coronavirus">, "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s">>,
]

/**
 * 
 * 这里的话感觉核心在于 first ｜ StringToUnion<last> 上 
 * 由前面刷的题来看，这种处理是类似于for循环的处理
 * 之后可以总结一下ts 中与 js类似的处理方法 ：for循环，if判断、对象遍历等等  
 * 
 */
