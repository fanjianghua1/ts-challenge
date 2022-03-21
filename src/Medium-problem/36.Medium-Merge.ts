
import { Equal, Expect } from '@type-challenges/utils'

type Merge<F, S,M= F & S> = { [key in keyof M]:M[key] extends never 
    ? key extends keyof Bar 
        ? Bar[key] 
        : never
    : M[key]
}

type Foo = {
    a: number;
    b: string;
};
type Bar = {
    b: number;
    c: boolean;
};

type cases = [
    Expect<Equal<Merge<Foo, Bar>, {
        a: number;
        b: number;
        c: boolean;
    }>>
]

/**
 * 
 * 这里注意demo中的类型声明在该例中也会被使用，涉及到ts的声明空间的问题。
 * 第二个点是 key extends keyof Bar  ， 必须是约束keyof 后的 联合类型，才可以使用Bar[key]
 * 以key作为索引使用
 * 
 */