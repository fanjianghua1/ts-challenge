import { Equal, Expect } from '@type-challenges/utils'

type Replace<S extends string, From extends string, To extends string> = 
    From extends '' ? S 
    : S extends `${infer left}${From}${infer right}` ?`${left}${To}${right}`
    : S

type cases = [
    Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
    Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'', '', ''>, ''>>,
]

/**
 * 
 * 这个感觉完全就是 字符串正则模版匹配的应用 主要是对于 From 匹配不到的类型显示的 判断。 为：‘’ 
 * 
 * 写法上对于三元条件表达式而言。有几个 ？ 分支 就得有 几个 ：
 * 而且尽量把要嵌套判断的逻辑放在第二个选择位置，这样就可以冒号捋下来。 
 */