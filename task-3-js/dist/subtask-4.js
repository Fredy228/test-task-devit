"use strict";
function arrayToObject(arr) {
    const obj = {};
    for (const item of arr) {
        const [key, value] = item;
        if (Array.isArray(value) && item.length === 2 && typeof key === "string") {
            obj[key] = arrayToObject(value);
        }
        else {
            obj[key] = value;
        }
    }
    return obj;
}
const arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];
const result = arrayToObject(arr);
console.log(result);
//# sourceMappingURL=subtask-4.js.map