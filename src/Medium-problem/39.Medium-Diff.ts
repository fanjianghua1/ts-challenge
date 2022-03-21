import { Equal, Expect } from '@type-challenges/utils'

// 这是为了确保 A 是属性多的那一个
type Diff<O, O1> = O extends O1 ? { [K in Exclude<keyof O, keyof O1>]: O[K] } : Diff<O1, O>

type Foo = {
    name: string
    age: string
}
type Bar = {
    name: string
    age: string
    gender: number
}

type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar,Foo>, { gender: number }>>
]

type  obj1 ={
    name:string;
    age:number;
    sex:string
}
type obj2 ={
    name:string;
    age:number
}
type t1  = obj1 extends obj2 ? 1:2      // 1
type t2  = obj2 extends obj1 ? 1:2      // 2

/**
 * 
 * 第一个问题，泛型竟然会是 0 、 01 这种形式 。 而且自己打出来是错误的，直接复制过来就可以？？？
 * 
 * 第二个问题，对于extends 的分发机制不太清楚 。 总是想用 Exclude<Foo,Bar> ， 实际上上是  Exclude<keyof Foo,keyof Bar>
 * 
 * 第三个问题，对于目前来说，递归这种思想是随处可见的解决问题的办法。。。
 * 
 */