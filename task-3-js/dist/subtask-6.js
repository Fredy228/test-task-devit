"use strict";
class NotificationException extends Error {
}
class ErrorException extends Error {
}
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    }
    else if (rand > 0.85) {
        throw new ErrorException();
    }
    else {
        throw new NotificationException();
    }
}
function reliableMultiply(a, b) {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        }
        catch (error) {
            if (error instanceof ErrorException) {
                console.error("ErrorException: Невозможно выполнить умножение.");
                throw error;
            }
            else if (error instanceof NotificationException) {
                console.log("NotificationException. Продолжаем выполнение.");
                continue;
            }
            else {
                throw error;
            }
        }
    }
}
console.log(reliableMultiply(8, 8));
//# sourceMappingURL=subtask-6.js.map