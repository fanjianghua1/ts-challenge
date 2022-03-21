import { Equal, Expect } from '@type-challenges/utils'

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}

type MyPick<T,K extends keyof T> ={[P in K]:T[P]}

type cases = [

    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    
    // // //@ts-expect-error
    // MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

/**
 * 这里考察的是过滤出特定类型的接口 
 * 
 * 这里做的时候会无从下手，所以借鉴网上的说法：用js的逻辑去看待 ：但是在第6题中发现，又想的复杂了
 * function MyPink(todo,key){
 *      let result ={}
 *      for(let k in key){
 *          if(todo[k]!==undefined){
 *              result[k] = todo[k]
 *          }
 *      } 
 *      return result
 * }
 * 
 * 这里把接口看作对象，js中没有接口的概念
 */