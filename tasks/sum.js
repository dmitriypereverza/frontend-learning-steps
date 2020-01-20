function sum(number) {
    if (number === undefined) {
        return 0
    }
    let acc = number
    const func = (arg) => {
        if (arg === undefined) {
            return acc
        }
        acc += arg
        return func
    }

    return func
}

console.log(sum() === 0);
console.log(sum(0)(0)() === 0);
console.log(sum(8)() === 8);
console.log(sum(1)(1)() === 2);
console.log(sum(2)(2)(1)(1)() === 6);
