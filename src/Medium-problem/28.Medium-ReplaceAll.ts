import { Equal, Expect } from '@type-challenges/utils'

type ReplaceAll<S extends string, From extends string, To extends string> = 
    From extends ''? S
    :  S extends `${infer left}${From}${infer right}` ? `${left}${To}${ReplaceAll<right,From,To>}`
    : S

type cases = [
    Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
    Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
    Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
    Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
    Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
    Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
    Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]

/**
 * 
 * 这里在做之前一道题后，三元判读上写的没有问题
 * 
 * 但是在递归上遇到了问题，我是直接去ReplaceAll<`${left}${To}${right}`,From,To>
 * 而答案是 ${left}${To}${ReplaceAll<right,From,To> 
 * 
 * 我的方式在一次后 foobar => fobar 这样就不符合要求了 
 * 所以应该截断，在替换后，对其后的内容递归（ 重复替换 ）
 * 
 */