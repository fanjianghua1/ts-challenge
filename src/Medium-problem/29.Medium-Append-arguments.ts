import { Equal, Expect } from '@type-challenges/utils'

type AppendArgument<Fn, A> = Fn extends (...args:infer P)=>infer R ? (...args:[...P,...[x:A]])=>R:never


type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
]

/**
 * 
 * 这里的问题是 （...args:infer P） 的写法问题 ， 只知道可以模式匹配 函数的参数， 于是直接使用了 infer P
 * 
 * 第二个问题是在求结果：（）=》R 时 ， 感觉和参数的模式匹配的问题一样，这里不知道如何传入 模式匹配到的参数 再 加上多出的参数。
 * ...args:[... , ...] 。 猜测这种形式是涉及到了 数组结构，这样类型就会分发。 
 * 
 */