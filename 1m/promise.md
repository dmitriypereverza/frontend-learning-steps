## Задача 1

Есть недописаная функция "parallel(funcArray, doneAll)"

```typescript
function parallel(
  funcArray: ((done) => void)[], 
  doneAll: (results) => void
) {
    let res = [];
    funcArray.map((func, i) => {
        func(str => res[i] = str)
    });
    while(true) {
      if (res.length === funcArray.length) {
        doneAll(res);
        break;
      }
    }
}

var a = function(done) {
  setTimeout(function() {
    done('result a');
  }, 300);
};

var b = function(done) {
  setTimeout(function() {
    done('result b');
  }, 200);
};

parallel([a,b], function(results) {
  console.log(results); // ['result a', 'result b']
});
```

Нужно её дописать. Что-то вроде аналога promise.all. И не забудьте, что результирующий массив должен сохранять тот порядок, в котором передавались функции.


---

## Задача 2

Есть код:
```typescript
function makeDroids() {
  let droids = [];
  for (let i = 0; i < 10; i++) {
    droids.push(() => console.log("R2D" + i));
  }
  return droids;
}

for (let d of makeDroids()) {
  d();
}
```
Он выводит в консольлог 10 раз "R2D10", почему? Как его переписать, чтобы в консольлог выводилось:
```
"R2D0"
"R2D1"
"R2D2"
"R2D3"
"R2D4"
"R2D5"
"R2D6"
"R2D7"
"R2D8"
"R2D9"
```
