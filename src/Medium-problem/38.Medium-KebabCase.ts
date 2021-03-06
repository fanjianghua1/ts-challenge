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
    Expect<Equal<KebabCase<'ð'>, 'ð'>>,
]

/**
 * è¿æ¯ç¬¬ä¸éèªå·±ååºæ¥çæ¶åéå½ ä»¥å å äºæ¡ä»¶å¤æ­çä¸­ç­é¢ã
 * å°±æ¯ä½¿ç¨å°äºtsçåç½®ç±»åï¼åå°äºæå¤§çç¼ç éã
 */