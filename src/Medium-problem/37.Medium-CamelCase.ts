import { Equal, Expect } from '@type-challenges/utils'


type CamelCase<S> = S extends `${infer F}-${infer E}`
    ? E extends `${Capitalize<E>}`
        ? `${F}-${CamelCase<E>}`
        : `${F}${CamelCase<Capitalize<E>>}`
    : S

type cases = [
    Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
    Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
    Expect<Equal<CamelCase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
    Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
    Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
    Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
    Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
    Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
    Expect<Equal<CamelCase<'-'>, '-'>>,
    Expect<Equal<CamelCase<''>, ''>>,
    Expect<Equal<CamelCase<'ð'>, 'ð'>>,
]

/**
 * è¿éçé®é¢æ¯å¯¹äº a-b-c-  ä¸  foo-Bar-baz   ä¸ foo--bar----baz çè½¬åï¼å©ä½çå¯ä»¥å®ç°
 * 
 * å¦æä¸ç¨åç½®çé¦å­æ¯å¤§åçç±»åCapitalize çè¯ ï¼ å®ç°çä»£ç ä¼å¾å¤ã
 */