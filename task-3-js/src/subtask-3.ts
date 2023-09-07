//Описываем типы
type TCallback = (result: any) => void;
type TFunction = (cb: TCallback, ...args: number[]) => void;
type TFuncAndParam = [TFunction, number[] | []];

async function bulkRun(functions: Array<TFuncAndParam>): Promise<any[]> {
  const results: any[] = [];

  // 1. Мы проходимся по каждой паре функции и ее параметров в массиве functions.
  for (const [func, params] of functions) {
    // 2. Создаем промис, который будет выполняться при вызове функции с параметрами.
    const result = await new Promise((resolve) => {
      // 3. Вызываем функцию с параметрами и функцией обратного вызова (cb), которая разрешает промис.
      func(
        (result: any) => {
          resolve(result);
        },
        ...params,
      );
    });

    // 4. Результат выполнения функции добавляется в массив результатов.
    results.push(result);
  }

  // 5. После завершения цикла мы возвращаем массив результатов выполнения функций.
  return results;
}

// Функции для тестирования
const f1: TFunction = (cb: TCallback) => {
  cb(1);
};

const f2: TFunction = (cb: TCallback, a: number) => {
  cb(a);
};

const f3: TFunction = (cb: TCallback, a: number, b: number) => {
  setTimeout(() => cb([a, b]), 1000);
};

const functionsAndParams: Array<TFuncAndParam> = [
  [f1, []], // Вызовет f1 без параметров и добавит 1 в результаты.
  [f2, [2]], // Вызовет f2 с параметром 2 и добавит 2 в результаты.
  [f3, [3, 4]], // Вызовет f3 с параметрами 3 и 4 через задержку и добавит [3, 4] в результаты.
];

bulkRun(functionsAndParams).then((result: any[]) => {
  // 6. После выполнения всех функций, результаты выводятся в консоль.
  console.log(result);
  // Output: [1, 2, [3, 4]]
});
