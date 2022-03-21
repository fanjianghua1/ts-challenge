import { Equal, Expect } from '@type-challenges/utils'

type LengthOfString<S extends string,T extends string[] = []> = S extends `${infer L}${infer R}`?
    LengthOfString<R,[...T , L]>:
    T['length']

type cases = [
    Expect<Equal<LengthOfString<''>, 0>>,
    Expect<Equal<LengthOfString<'kumiko'>, 6>>,
    Expect<Equal<LengthOfString<'reina'>, 5>>,
    Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/**
 * 
 * 这里停在了 T extends string[] =[] 上。 不同于js，这里参数必须要求有这个声明 ， 但是不可能在案例中添加
 * 所以通过给一个默认值 就 可以了。
 * 
 * 另一个就是把每一次的字符放在数组里， 采用rest运算符来实现 
 */
