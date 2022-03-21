import { Equal, Expect } from '@type-challenges/utils'

type isEmptyObject<T> = T extends object
    ? keyof T extends never
        ? true
        : false
    : false;

type isTrue<T> =  T extends []
    ? false
    : T extends 0
        ? false
        : T extends ""
            ? false
            : T extends false
                ? false
                : isEmptyObject<T> extends true
                    ? false
                    :true;
    

type AnyOf<T extends readonly any[],R extends boolean = false> = T extends [infer first,...infer rest] 
    ? isTrue<first> extends true 
        ? true
        : AnyOf<rest,R>
    : R


type cases = [
    Expect<Equal<AnyOf<[1, 'test', true, [1], {name: 'test'}, {1: 'test'}]>, true>>,
    Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], {1: 'test'}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}, {1: 'test'}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
    Expect<Equal<AnyOf<[]>, false>>,
]

type judge<A,B> = A extends B ? true:false

type j1 = judge<1,{}> // true
type j2 = judge<[],{}>    // true
type j3 = judge<{},[]> // false
type j4 = judge<keyof [],never> // false
type j5 = judge<keyof {} ,never> // never
/**
 * 
 * 这里理解起来并不难。难在对于数组的每一项的判断true 还是 false    在这里的判断卡了很长时间
 * 因为自己对于 false extends boolean  与  boolean extends false 还不是很理解   更为离谱的是好几个例子都是无法接受的
 * 所以一个正确的泛型映射 isTrue<T>是核心
 *
 */