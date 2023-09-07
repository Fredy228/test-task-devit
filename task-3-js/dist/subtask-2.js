"use strict";
function* chunkArray(array, chunkSize) {
    let index = 0;
    while (index < array.length) {
        yield array.slice(index, index + chunkSize);
        index += chunkSize;
    }
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//# sourceMappingURL=subtask-2.js.map