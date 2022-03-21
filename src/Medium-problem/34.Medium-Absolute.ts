import { Equal, Expect } from '@type-challenges/utils'

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`? `${R}`:`${T}`

type cases = [
    Expect<Equal<Absolute<0>, '0'>>,
    Expect<Equal<Absolute<-0>, '0'>>,
    Expect<Equal<Absolute<10>, '10'>>,
    Expect<Equal<Absolute<-5>, '5'>>,
    Expect<Equal<Absolute<'0'>, '0'>>,
    Expect<Equal<Absolute<'-0'>, '0'>>,
    Expect<Equal<Absolute<'10'>, '10'>>,
    Expect<Equal<Absolute<'-5'>, '5'>>,
    Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
    Expect<Equal<Absolute<9_999n>, '9999'>>,
]

type num = -1_000_000n
type s_num= `${num}`
//'-1000000'

/**
 * 
 * 这里的问题：一是没有想到可以 `${T}`
 * 二是最关键的就是 -1_000_000n . 没想到转为字符串 '_' 'n' 都没了。 一开始还想着怎么模式匹配去匹配出相应的数据 
 * 涨见识了
 * 
 */
