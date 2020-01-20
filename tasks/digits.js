// Day 4. Part 1
function main(start, end, callback) {
    new Array(end - start).fill("").forEach((item, index) => callback(index + 1 + start));
}

const result = [];
main(134792, 675810, (num) => {
    const seq = num.toString().split("");
    const str = seq.toString();

    if (str !== seq.sort().toString()) return;
    if (str.match(/(1,1|2,2|3,3|4,4|5,5|6,6|7,7|8,8|9,9)/)) {
        result.push(str);
    }
});

console.log(result, result.length);
