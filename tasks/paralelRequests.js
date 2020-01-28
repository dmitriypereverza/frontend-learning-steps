/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch или $.get
Ошибки обрабатывать не нужно
*/



function parallelLimit(urls, limit, callback) {
    let result = new Array(urls.length);

    if (limit > urls.length) {
        limit = urls.length;
    }

    let performElements = 0;
    let compliteElements = 0;

    function makeRequest (index) {
        fetch(urls[index]).then(data => {
            compliteElements++;
            result[index] = data;

            if (urls.length - 1 > performElements) {
                performElements++;
                makeRequest(performElements);
                return;
            }

            if (compliteElements === urls.length) {
                callback(result);
            }
        });
    }

    performElements = limit - 1;
    for (let i = 0; i < limit; i++) {
        makeRequest(i)
    }


}
