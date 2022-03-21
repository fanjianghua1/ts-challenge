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
    Expect<Equal<CamelCase<'😎'>, '😎'>>,
]

/**
 * 这里的问题是对于 a-b-c-  与  foo-Bar-baz   与 foo--bar----baz 的转变，剩余的可以实现
 * 
 * 如果不用内置的首字母大写的类型Capitalize 的话 ， 实现的代码会很多。
 */