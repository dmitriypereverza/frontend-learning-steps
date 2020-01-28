"use strict";
function sum(arg) {
    const accumulator = this || 0;
    if (arg === undefined) return accumulator;
    return sum.bind(arg + accumulator);
}

console.log(sum() === 0);
console.log(sum(0)(0)() === 0);
console.log(sum(8)() === 8);
console.log(sum(1)(1)() === 2);
console.log(sum(2)(2)(1)(1)() === 6);
