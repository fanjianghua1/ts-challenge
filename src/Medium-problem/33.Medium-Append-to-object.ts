import { Equal, Expect } from '@type-challenges/utils'

type AppendToObject<T , U extends string, V , R = T & {[key in U]:V}> ={[key in keyof R]:R[key]}

type test1 = {
    key: 'cat'
    value: 'green'
}

type testExpect1 = {
    key: 'cat'
    value: 'green'
    home: boolean
}

type test2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
}

type testExpect2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
    home: 1
}

type test3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
}

type testExpect3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    isMotherRussia: false | undefined
}

type cases = [
    Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
    Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
    Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]
/**
 * 
 * 这里的话对于对象的操作不熟悉。 还想着 {[U]:V}的形式，来追加 。
 * 也想到了 & 类型 ， 但是是在等号右边使用：{[key in keyof obj]:obj[key]} & {[U]:V}
 *
 * 由此可以看出还是容易把js和ts对于数组、对象等结构的使用搞混。 
 */