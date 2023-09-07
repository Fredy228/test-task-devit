"use strict";
function mapObject(obj, parentKey = "") {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const currentKey = parentKey ? `${parentKey}/${key}` : key;
            if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                const nestedObject = mapObject(obj[key], currentKey);
                Object.assign(result, nestedObject);
            }
            else {
                result[currentKey] = obj[key];
            }
        }
    }
    return result;
}
const obj = {
    a: {
        b: {
            c: 12,
            d: "Hello World",
        },
        e: [1, 2, 3],
    },
};
const flattenedMap = mapObject(obj);
console.log(flattenedMap);
//# sourceMappingURL=subtask-7.js.map