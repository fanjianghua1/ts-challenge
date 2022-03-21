import { Equal, Expect } from '@type-challenges/utils'

type Length<T extends readonly any[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const
type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    Expect<Equal<Length<[1,2,3]>,3>>,
    
    
    // // @ts-expect-error
    Length<5>,
    //  //@ts-expect-error
    Length<'hello world'>
]

type l1 = Length<typeof tesla>
type l2 = Length<[1,2,3]>
type l3=Length<5>

/**
 * 题目要求对于数组，返回长度。不是数组的会报错
 * 
 * as const 强制断言，类型前有readonly修饰. 这样的话符合元组的定义：个数、类型固定
 * 
 * 看了部分人的文章解析。发现他们都是用js的思路去求解
 * function length(a){
 *      if(!Array.isArray(a)) return ;
 *      return a.length
 * } 
 * 再结合上述的js逻辑。首先是知道 T['length'] 获取长度，但是没有加数组类型的约束 ， 于是在 extends 后 加上了 readonly [] 的约束 。
 * 这样满足了js的逻辑，ts类型代码
 * 
 * 
 */