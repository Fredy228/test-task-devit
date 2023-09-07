"use strict";
function add(x) {
    const inner = (y) => {
        return add(x + y);
    };
    inner.valueOf = () => {
        return x;
    };
    return inner;
}
console.log(Number(add(1)(2)));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
//# sourceMappingURL=subtask-9.js.map