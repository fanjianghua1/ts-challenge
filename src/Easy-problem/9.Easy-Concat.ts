import { Expect,Equal } from '@type-challenges/utils';

type Concat<T extends any[], U extends any[]> =[...T,...U]

type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

/**
 * function concat(arr1,arr2){
 *      return [...arr1,...arr2]
 * }
 * 
 * 这里是关于函数的rest参数的使用。之前看的时候并有注意 .
 * 同时还有函数解构参数的 用法 : 具体题目在细看
 * function fn({a,b,c}:{a:number,b:number,c:number}){
 *      console.log(a+b+c)
 * }
 */

function fn(m:number,...n:number[]){
    return n.map((x)=>x*m)
}
// [10,20,30,40]
console.log(fn(10,1,2,3));

let arr1  = [1,2,3]
let arr2 = [4,5,6]
console.log(arr1.push(...arr2));
