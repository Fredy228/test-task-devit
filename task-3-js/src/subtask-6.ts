class NotificationException extends Error {}
class ErrorException extends Error {}

function primitiveMultiply(a: number, b: number): number {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a: number, b: number): number {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof ErrorException) {
        console.error("ErrorException: Невозможно выполнить умножение.");

        throw error; // Если это ErrorException, прекращаем выполнение
      } else if (error instanceof NotificationException) {
        console.log("NotificationException. Продолжаем выполнение.");

        continue; // Если это NotificationException, продолжаем выполнение
      } else {
        throw error; // Если это другое исключение, передаем его дальше
      }
    }
  }
}

//Тест функции
console.log(reliableMultiply(8, 8));
