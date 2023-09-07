/*
Мы создаем функцию chunkArray, которая принимает два аргумента:
array (массив, который мы хотим разбить на части) и chunkSize (размер каждой части).
Звездочка * в объявлении функции, например, function*, указывает на то, что это функция-генератор (generator function) в JavaScript.
*/
function* chunkArray(
  array: number[],
  chunkSize: number,
): Generator<number[], void, void> {
  /* Создаем переменную index и инициализируем ее значением 0.
    Эта переменная будет использоваться для отслеживания текущей позиции в массиве */
  let index = 0;

  /* Мы используем цикл while, который будет выполняться до тех пор, пока index меньше длины массива array. */
  while (index < array.length) {
    /*
    Внутри цикла мы используем ключевое слово yield для возврата значения.
    Оно возвращает часть массива, начиная с текущей позиции index и заканчивая index + chunkSize.
    Таким образом, при первом вызове iterator.next(), мы получаем первую часть массива [1, 2, 3],
    затем [4, 5, 6], и, наконец, [7, 8].
    */
    yield array.slice(index, index + chunkSize);
    index += chunkSize;
  }
}

const iterator: Generator<number[], void, void> = chunkArray(
  [1, 2, 3, 4, 5, 6, 7, 8],
  3,
);

// Тест функции
console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log("iterator", iterator);
