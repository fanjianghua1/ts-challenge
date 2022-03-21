import { Alike, Expect ,MergeInsertions} from '@type-challenges/utils'

type MyExclude<T,K> = T extends K ? never:T
type MyReadonly2<T, K extends keyof T = keyof T> ={readonly [key1 in K]:T[key1] }  & {[key2 in MyExclude<keyof T,K>]:T[key2]}

type cases = [
    Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
    Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
    title: string
    description?: string
    completed: boolean
}

interface Todo2 {
    readonly title: string
    description?: string
    completed: boolean
}

interface Expected {
    readonly title: string
    readonly description?: string
    completed: boolean
}

/**
 * 
 * 这里学会的是 可以在泛型声明中 指出类型的默认值 
 * 想上述的可能 K 并没有去给特定的类型。此时就为默认值
 * 
 * 还有一部分就是 & 的使用 ： 交叉口类型 。 不同于之前一直使用的联合类型。 
 */