import { Equal, Expect } from '@type-challenges/utils'

type First<T extends any[]> = T['length'] extends 0 ? never:T[0]

//或底下这种别人的解决办法
//type First<T extends any[]> = T extends [] ? never:T[0]

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>
]

/**
 * 
 * 条件类型 ： 类似于三元表达式 在左侧的约束中 满足返回真的分支类型  不满足返回假的分支类型。
 * extends 表示约束，类型于js 的‘ === ’ 运算符 
 * 
 * infer    声明了一个新的泛型类型变量 理解：加上infer 就不用自己去提供泛型的类型，其自动获得
 * 
 */

// 只要传入的类型变量不等于 数组类型 。 则得到该类型 ，否则就是 该数组类型访问符的类型
type Flatter<T> = T extends any[] ? T[number] : T 

// f1 => {name:string,age:number}
type f1 = Flatter<[{name:string,age:number}]>
type f2 = Flatter<number|string|boolean>

// 通过infer 实现了上述的功能 而没有通过类型访问符获得
type Flatter1<T> = T extends Array<infer Item> ? Item:T
type f3 = Flatter<['1',1,true]>
type f4 = Flatter<number|string>