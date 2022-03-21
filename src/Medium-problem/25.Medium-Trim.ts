import { Equal, Expect } from '@type-challenges/utils'

type TrimLeft<S extends string>=  S extends `${infer left}${infer mid}` ? 
    (left extends ' '|'\n'|'\t' ?TrimLeft<mid>:S):never

type TrimRight<S extends string>= S extends `${infer mid}${' '|'\n'|'\t'}` ? TrimRight<mid>: S

type Trim<S extends string> = TrimRight<TrimLeft<S>>

type cases = [
    Expect<Equal<Trim<'str'>, 'str'>>,
    Expect<Equal<Trim<' str'>, 'str'>>,
    Expect<Equal<Trim<'     str'>, 'str'>>,
    Expect<Equal<Trim<'str   '>, 'str'>>,
    Expect<Equal<Trim<'     str     '>, 'str'>>,
    Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]

/**
 * 
 * 这里需要注意的是对于右边的去处空格等字符时。
 * 其extends的模式匹配不同于 左边的 模式匹配方式。右边的话是贪婪匹配
 * 
 */