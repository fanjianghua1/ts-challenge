"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(m, ...n) {
    return n.map((x) => x * m);
}
console.log(fn(10, 1, 2, 3));
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.push(...arr2));
