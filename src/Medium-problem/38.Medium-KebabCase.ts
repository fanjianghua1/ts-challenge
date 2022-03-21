import { Equal, Expect } from '@type-challenges/utils'


type map = {
    'A':'a',
    'B':'b',
    'C':'c',
    'D':'d',
    'E':'e',
    'F':'f',
    'G':'g',
    'H':'h',
    'I':'i',
    'J':'j',
    'K':'k',
    'L':'l',
    'M':'m',
    'N':'n',
    'O':'o',
    'P':'p',
    'Q':'q',
    'R':'r',
    'S':'s',
    'T':'t',
    'U':'u',
    'V':'v',
    'W':'w',
    'X':'x',
    'Y':'y',
    'Z':'z',
}
type KebabCase<S,R extends string = ''> =  S extends `${infer first}${infer last}`
    ? first extends keyof map
        ? R extends '' 
            ? KebabCase<last,`${Lowercase<first>}`>
            : KebabCase<last,`${R}-${Lowercase<first>}`>
        : KebabCase<last,`${R}${first}`>
    : R

type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/**
 * 这是第一道自己写出来的涉及递归 以及 加了条件判断的中等题。
 * 就是使用到了ts的内置类型，减少了极大的编码量。
 */