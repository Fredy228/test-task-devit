"use strict";
function combos(num) {
    const result = [];
    const stack = [[]];
    while (stack.length > 0) {
        const currentCombo = stack.pop();
        const currentSum = currentCombo.reduce((acc, val) => acc + val, 0);
        if (currentSum === num) {
            result.push(currentCombo);
        }
        else if (currentSum < num) {
            for (let nextNumber = 1; nextNumber <= num; nextNumber++) {
                stack.push([...currentCombo, nextNumber]);
            }
        }
    }
    return result;
}
console.log(combos(3));
console.log(combos(10));
//# sourceMappingURL=subtask-8.js.map