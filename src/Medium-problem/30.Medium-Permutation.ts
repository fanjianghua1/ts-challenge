import { Equal, Expect } from '@type-challenges/utils'

// 或采用 [T] extends [never] 的形式也可以
type Permutation<T , U = T > = (()=>T) extends ()=>never ? [] :
    T extends U ? [T,...Permutation<Exclude<U,T>>]
    : []

type cases = [
    Expect<Equal<Permutation<'A'>, ['A']>>,
    Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<never>, []>>,
]

/**
 * 
 * 这里的问题是对于联合类型的操作还是不行 。 之后明白了 T extends U . 就看做 T 的 每一项去匹配 集合 （'a' | 'b' | 'c '），然后匹配后，再传入排除类型后的T 
 * 这个过程就有点想嵌套for循环遍历。
 * 
 * 但是 有个问题 就是 (()=>T) extends ()=> never 为什么只有这种形式才能通过案例， T extends never 就不可以。
 * 因为 never 作为 extends 的判断是永远为false 的 ， never 的集合 是永远不可能包含 要判断的类型的。 
 * 所以 就像ts 内置的 Equal 类型一样 ， 他采用 [T] extends [never]  或者  (()=>T) extends ()=>never 的形式来判断。   
 */