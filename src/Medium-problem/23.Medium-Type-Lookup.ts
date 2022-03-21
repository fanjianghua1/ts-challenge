import { Equal, Expect } from '@type-challenges/utils'

type LookUp<U, T> = U extends {type:any} ?(U['type'] extends T ? U :never):never 

// 不知道下面这种写法有什么问题
// type LookUp<U extends { type:any }, T> = U['type'] extends T ? U :never


interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
    Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
    Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]

/**
 * 
 * 这里的话应该是类型分发，有类型保护判断。
 * Animal是联合类型 。当type值匹配时，则由两种选择变为一种明确的选择
 * 
 */