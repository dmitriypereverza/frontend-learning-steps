Array.prototype.myReduce = function (cb, initialVal) {

};


const res = [1, 0, 5, 6].myReduce((acc, item) => {
    acc += item;
    return acc;
}, 0);
console.log(res === 12);


const res2 = [{ count: 1 }, { count: 3 }, { count: 1 }].myReduce((acc, item) => {
    acc += item.count;
    return acc;
}, 1);
console.log(res2 === 6);

const res3 = [].myReduce((acc, item) => {
    acc += item.count;
    return acc;
}, 55);
console.log(res3 === 55);
