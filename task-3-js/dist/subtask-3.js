"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function bulkRun(functions) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const [func, params] of functions) {
            const result = yield new Promise((resolve) => {
                func((result) => {
                    resolve(result);
                }, ...params);
            });
            results.push(result);
        }
        return results;
    });
}
const f1 = (cb) => {
    cb(1);
};
const f2 = (cb, a) => {
    cb(a);
};
const f3 = (cb, a, b) => {
    setTimeout(() => cb([a, b]), 1000);
};
const functionsAndParams = [
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]],
];
bulkRun(functionsAndParams).then((result) => {
    console.log(result);
});
//# sourceMappingURL=subtask-3.js.map