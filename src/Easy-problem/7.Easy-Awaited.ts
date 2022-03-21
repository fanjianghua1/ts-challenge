import { Expect , Equal } from '@type-challenges/utils';

type MyAwaited<T> = T extends Promise<infer R> ?  MyAwaited<R>:T


type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
    Expect<Equal<MyAwaited<X>, string>>,
    Expect<Equal<MyAwaited<Y>, { field: number }>>,
    Expect<Equal<MyAwaited<Z>, string | number>>,
]

// // @ts-expect-error
type error = MyAwaited<number>

/**
 * 这里使用到了：infer 和 extends 的结合 。 文章上说这种是类似于字符串正则匹配的 ： 模式匹配
 * 
 * extends 的作用 和 之前的条件表达式的作用一样。而  infer 的作用是 ：声明了一个新的临时泛型，存储你匹配到的类型 （ 类似于$1,$2 捕获组的作用 ）
 *  
 */