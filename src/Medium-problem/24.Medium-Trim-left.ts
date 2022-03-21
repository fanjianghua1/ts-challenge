import { Equal, Expect } from '@type-challenges/utils'

type TrimLeft<S extends string>=  S extends `${infer left}${infer mid}` ? 
    (left extends ' '|'\n'|'\t' ?TrimLeft<mid>: S):never

type cases = [
    Expect<Equal<TrimLeft<'str'>, 'str'>>,
    Expect<Equal<TrimLeft<' str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
    Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]

/**
 * 
 * 这里的话就简单的是模式匹配 。 然后递归判断
 * 
 */