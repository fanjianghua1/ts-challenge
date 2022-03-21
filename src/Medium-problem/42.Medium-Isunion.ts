import { Equal, Expect } from '@type-challenges/utils'

type IsUnion<T> = any

type cases = [
    Expect<Equal<IsUnion<string>, false >>,
    Expect<Equal<IsUnion<string|number>, true >>,
    Expect<Equal<IsUnion<'a'|'b'|'c'|'d'>, true >>,
    Expect<Equal<IsUnion<undefined|null|void|''>, true >>,
    Expect<Equal<IsUnion<{a: string}|{a: number}>, true >>,
    Expect<Equal<IsUnion<{a: string|number}>, false >>,
    Expect<Equal<IsUnion<[string|number]>, false >>,
    // Cases where T resolves to a non-union type.
    Expect<Equal<IsUnion<string|never>, false >>,
    Expect<Equal<IsUnion<string|unknown>, false >>,
    Expect<Equal<IsUnion<string|any>, false >>,
    Expect<Equal<IsUnion<string|'a'>, false >>,
]

/**
 * 
 * 联合类型的判断。问题是：像case中的案例(string|'a')，并不清楚是不是满足或不满足于联合类型
 * 
 */


