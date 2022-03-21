import { Equal, Expect} from '@type-challenges/utils'

// type DeepReadonly<T> = {readonly [key in keyof T]:T[key] extends object?(T[key] extends Function?T[key]:DeepReadonly<T[key]>):T[key]}

//下面的这种写法比较巧妙，上面的写法在object和function的判断 有些勉强了
type DeepReadonly<T>= T extends {[key:string]:{}}? {readonly[key in keyof T]:DeepReadonly<T[key]>}:T

type cases = [
    Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
    a: () => 22
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 'string'
                }
                k: 'hello'
            }
        }
    }
}

type Expected = {
    readonly a: () => 22
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: 'string'
                }
                readonly k: 'hello'
            }
        }
    }
}

/**
 * 这里的话就是对递归的使用。 简单的添加readonly，同时也可以用于清除所有的readonly（通过 ‘-’ 运算符）
 * 
 */