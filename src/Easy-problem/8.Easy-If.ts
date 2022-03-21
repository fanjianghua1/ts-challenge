import { Expect,Equal } from '@type-challenges/utils';


type If<C extends boolean,T,F> = C extends true ? T : F 

// 底下这个是别人的实现
// type If<C, T, F> = C extends true ? (C extends null? F:T ) : F;

type cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
]

// // @ts-expect-error
type error = If<null, 'a', 'b'>

/**
 * 这里主要考察的是条件类型的使用 
 * 
 * 而条件类型的使用的关键就是extends  同时可以了解下 ts还有  ？？ 的操作符的使用
 * a ?? 10  ：判断a的条件错的直接就是10
 * 
 */