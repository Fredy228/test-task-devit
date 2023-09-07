function deepEqual(objA: any, objB: any): boolean {
  // Проверка на примитивы или одинаковые объекты
  if (objA === objB) {
    return true;
  }

  // Проверка на типы данных
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // Получение ключей объектов
  const keysA: string[] = Object.keys(objA);
  const keysB: string[] = Object.keys(objB);

  // Проверка на количество ключей
  if (keysA.length !== keysB.length) {
    return false;
  }

  /* Вложенное сравнение значений.
  Функция deepEqual вызывает саму себя для сравнения значений внутри объектов.
  Это позволяет обрабатывать вложенные объекты или данные глубоко внутри других объектов.*/
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

// Тест функции
console.log(deepEqual({ name: "test" }, { name: "test" })); // true
console.log(deepEqual({ name: "test" }, { name: "test1" })); // false
console.log(
  deepEqual(
    { name: "test", data: { value: 1 } },
    { name: "test", data: { value: 2 } },
  ),
); // false
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 })); // false
