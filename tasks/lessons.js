// 1)
//Что произойдёт в результате выполнения следующего кода?
({
    method: function () {
        (
            function () {
                alert(this);
            }
        )();
    }
}).method();

// Что будет в консоли после выполнения фрагмента кода?
// var i = 10;
// var array = [];
//
// while (i--) { // i === 1 //
//     array.push(function () { // i === 0
//         return i + i;
//     });
// }
// console.log([
//     array[0](),
//     array[1](),
// ])

// 3)
//В чём разница между promise.then(a, b); и promise.then(a).catch(b); ?

// 4)
//Как завернуть в промис JSON.parse?
parseJson('{"foo":"bar"}')
    .then(console.log)
    .catch(console.error);


const parseJson = json => new Promise((resolve, reject) => {
    try {
        resolve(JSON.parse(json))
    } catch (e) {
        reject(e)
    }
});

// 5)
new Promise((resolve, reject) => {
    throw new Error('error')
}).then(console.log);


// 6)
//
// Дана
// строка(возможно, пустая), состоящая
// из
// букв
// A - Z
// :
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно
// написать
// функцию
// RLE, которая
// на
// выходе
// даст
// строку
// вида:
//     A4B3C2XYZD4E3F3A6B28
// И
// сгенерирует
// ошибку, если
// на
// вход
// пришла
// невалидная
// строка.Пояснения
// :
// Если
// символ
// встречается
// 1
// раз, он
// остается
// без
// изменений;
// Если
// символ
// повторяется
// более
// 1
// раза, к
// нему
// добавляется
// количество
// повторений.const
getCountString = counter => counter > 1 ? counter.toString() : "";
const RLE = text => {
    if (typeof text !== "string") {
        throw new Error("Invalid text")
    }
    const seq = text.split("");
    if (!seq.length) {
        return "";
    }
    let currentChar;
    let counter = 0;

    return seq.reduce((char, acc, index) => {
        if (currentChar === undefined) {
            currentChar = char;
            acc += char;
        }
        if (char === currentChar) {
            counter++;
            if (seq.length === (index + 1)) {
                acc += getCountString(counter);
            }
            return acc;
        }
        acc += char + getCountString(counter);
        counter = 0;
        currentChar = char;
        return acc;
    }, "").join();
};
