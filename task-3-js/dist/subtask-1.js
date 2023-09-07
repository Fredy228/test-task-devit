"use strict";
function deepEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" ||
        typeof objB !== "object" ||
        objA === null ||
        objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual({ name: "test" }, { name: "test" }));
console.log(deepEqual({ name: "test" }, { name: "test1" }));
console.log(deepEqual({ name: "test", data: { value: 1 } }, { name: "test", data: { value: 2 } }));
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 }));
//# sourceMappingURL=subtask-1.js.map