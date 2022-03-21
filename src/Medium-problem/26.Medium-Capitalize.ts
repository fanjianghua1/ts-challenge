import { Equal, Expect } from '@type-challenges/utils'

// type MyCapitalize<S extends string> = S extends `${infer left}${infer right}`? `${Uppercase<left>}${right}`: S

type map = {
    ' ':' ';
    'a':'A';
    'b':'B';
    'c':'C';
    'd':'D';
    'e':'E';
    'f':'F';
    'g':'G';
    'h':'H';
    'i':'I';
    'j':'J';
    'k':'K';
    'l':'L';
    'm':'M';
    'n':'N';
    'o':'O';
    'p':'P';
    'q':'Q';
    'r':'R';
    's':'S';
    't':'T';
    'u':'U';
    'v':'V';
    'w':'W';
    'x':'X';
    'y':'Y';
    'z':'Z';
}

type MyCapitalize<S extends string> = S extends `${infer left}${infer right}`? left extends keyof map ? `${map[left]}${right}` : S : S



type cases = [
    Expect<Equal<MyCapitalize<'foobar'>, 'Foobar'>>,
    Expect<Equal<MyCapitalize<'FOOBAR'>, 'FOOBAR'>>,
    Expect<Equal<MyCapitalize<'foo bar'>, 'Foo bar'>>,
    Expect<Equal<MyCapitalize<''>, ''>>,
    Expect<Equal<MyCapitalize<'a'>, 'A'>>,
    Expect<Equal<MyCapitalize<'b'>, 'B'>>,
    Expect<Equal<MyCapitalize<'c'>, 'C'>>,
    Expect<Equal<MyCapitalize<'d'>, 'D'>>,
    Expect<Equal<MyCapitalize<'e'>, 'E'>>,
    Expect<Equal<MyCapitalize<'f'>, 'F'>>,
    Expect<Equal<MyCapitalize<'g'>, 'G'>>,
    Expect<Equal<MyCapitalize<'h'>, 'H'>>,
    Expect<Equal<MyCapitalize<'i'>, 'I'>>,
    Expect<Equal<MyCapitalize<'j'>, 'J'>>,
    Expect<Equal<MyCapitalize<'k'>, 'K'>>,
    Expect<Equal<MyCapitalize<'l'>, 'L'>>,
    Expect<Equal<MyCapitalize<'m'>, 'M'>>,
    Expect<Equal<MyCapitalize<'n'>, 'N'>>,
    Expect<Equal<MyCapitalize<'o'>, 'O'>>,
    Expect<Equal<MyCapitalize<'p'>, 'P'>>,
    Expect<Equal<MyCapitalize<'q'>, 'Q'>>,
    Expect<Equal<MyCapitalize<'r'>, 'R'>>,
    Expect<Equal<MyCapitalize<'s'>, 'S'>>,
    Expect<Equal<MyCapitalize<'t'>, 'T'>>,
    Expect<Equal<MyCapitalize<'u'>, 'U'>>,
    Expect<Equal<MyCapitalize<'v'>, 'V'>>,
    Expect<Equal<MyCapitalize<'w'>, 'W'>>,
    Expect<Equal<MyCapitalize<'x'>, 'X'>>,
    Expect<Equal<MyCapitalize<'y'>, 'Y'>>,
    Expect<Equal<MyCapitalize<'z'>, 'Z'>>,
]

/**
 * 
 * 这里卡在了类型怎么大写上。
 * 然后知道了 ts 自带的类型 有大写 、首字母大写的内置类型。 还知道有一种map映射的方式，也可以实现
 * 第二种实现问题在于 索引访问的原因。left 必须 extends 于 keyof map ，之后才可以 map[left] 
 * 
 */