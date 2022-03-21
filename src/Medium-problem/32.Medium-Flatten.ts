import { Equal, Expect } from '@type-challenges/utils'

type Flatten<A extends any[],R extends any[]=[]> = A extends [infer item , ...infer R] 
    ? item extends any[]
        ? [...Flatten<item>,...Flatten<R>]
        : [item,...Flatten<R>]
    :[]


type cases = [
    Expect<Equal<Flatten<[]>, []>>,
    Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
    Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
    Expect<Equal<Flatten<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar']>>,
]

/**
 * 
 * infer 模式匹配的用法还是不熟练
 * 而且即使知道了 [infer item,...infer R] 也不知道 下一步的三元表达式如何书写
 * 
 * 如果用js的思路就是遍历数组，预先一个存储空间，如果是数组则递归，不是则直接放入。
 * 上述的写法是使用的三点运算符的结构形式
 *  
 */