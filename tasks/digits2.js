// Day 4. Part 2
function main(start, end, callback) {
    new Array(end - start + 1).fill("").forEach((item, index) => callback(index + start));
}

const result = [];
main(134792, 675810, (num) => {
    console.log(num)
    const seq = num.toString().split("");
    const str = seq.toString();

    if (str !== seq.sort().toString()) return;
    let matchesDigits = num.toString().match(/1{2,}|2{2,}|3{2,}|4{2,}|5{2,}|6{2,}|7{2,}|8{2,}|9{2,}/g);

    if (!matchesDigits) return;

    if (matchesDigits.filter(match => match.split("").length % 2).length) return;
});

console.log(result, result.length);
