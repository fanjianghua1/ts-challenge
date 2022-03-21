import {Equal,Expect} from '@type-challenges/utils';

let tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]:K
} 
type cases =[
    Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
] 
type error = TupleToObject<[[1, 2], {}]>

/**
 * extends : 用在别处表述扩展（常见于类的继承上） 用在泛型这 表示约束：T 约束于readonly any[] 也就是说 T类型在结构上要 满足 后面的类型
 * 
 * as const : 后缀的作用类似于const但对于类型系统，确保为所有属性分配文字类型，而不是更通用的版本。 
 * 如下面的例子。如果没有as const ，req.method会被解析为string，更通用的类型。从而与 之前的联合类型 不匹配 
 * 
 * T[number] : 类型访问符 [number] 用于获取数组的类型
 * 
 * in : map映射 。 通过上述获取到所有类型  然后用in （内部使用for...in...）来依次获得类型，映射为【类型】：类型
 * type xxx = typeof tuple[number] => 'tesla' | 'model 3' | 'model X' | 'model Y'
 */

// 类型断言的使用 
function get(url:string,method:'get'|'post'){
    console.log(url,method);
}
// req的类型: {readonly url:'123' ; readonly method:"get" }
const req = {url:'123',method:'get'} as const 
get(req.url,req.method)


// typeof 的使用 及 其与索引访问符的结合使用
type obj = [string,number]   
type p  = obj[number]   // string | number
const myArray = [{name:'fjh',age:18},{name:'zyy',age:18}]   // {name:string;age:number}[] 
type ma =typeof myArray[number]  // {name:string,age:number} 
