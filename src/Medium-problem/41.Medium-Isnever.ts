import { Equal, Expect } from '@type-challenges/utils'

// type IsNever<N>=  [N] extends [never] ? true:false
type IsNever<N>=  ( ()=>N ) extends ()=>never? true:false

type cases = [
    Expect<Equal<IsNever<never>, true>>,
    Expect<Equal<IsNever<never | string>, false>>,
    Expect<Equal<IsNever<"">, false>>,
    Expect<Equal<IsNever<undefined>, false>>,
    Expect<Equal<IsNever<null>, false>>,
    Expect<Equal<IsNever<[]>, false>>,
    Expect<Equal<IsNever<{}>, false>>,
]

// 下面的这种写法第一个案列是错误的
// type IsNever<N>=  N extends never ? true:false
/**
 * 这里涉及到之前的一道题的判断部分。还是 和 extends 的集合约束有关系 。 这部分可以加深一下。
 * 离谱 (()=>T) extends ()=>never 是正确的 。 但是不加括号是错误的。。。  
 */

