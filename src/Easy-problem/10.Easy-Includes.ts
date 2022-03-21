import { Equal, Expect } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = T extends [infer first,...infer rest] ? Equal<first,U>extends true ?true : Includes<rest,U>:false;
type cases = [
    Expect<Equal<Includes<['Kara', 'Eisdir', 'Wammus', 'Santana'], 'Kara'>, true>>,
    Expect<Equal<Includes<['Kara', 'Eisdir','Wammus', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
    Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
    Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
    Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
    Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
    Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
    Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
    Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
]


/**
 * 这里使用到了： 
 *  循环判断；
 *  ...rest操作符；
 *  已实现模块的复用 （ Equal ）
 * 
 * 这里还要去思考对于类型是否兼容的问题。 （ 因为最初写的只能通过部分的用例，原因就是部分用例涉及到了下述的问题 ）：
 * boolean extends false  true extends boolean 
 * { a: 'A'} extends {readonly a: 'A'}    {readonly a: 'A'} extends {a: 'A'}
 */