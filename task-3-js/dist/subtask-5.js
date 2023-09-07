"use strict";
function objectToArray(obj) {
    const result = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === "object" && !Array.isArray(obj[key])) {
                result.push([key, objectToArray(value)]);
            }
            else {
                result.push([key, value]);
            }
        }
    }
    return result;
}
const inputObject = {
    name: "developer",
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5,
    },
};
const resultArray = objectToArray(inputObject);
console.log(resultArray);
//# sourceMappingURL=subtask-5.js.map