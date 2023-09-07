function combos(num: number): number[][] {
  const result: number[][] = [];
  const stack: number[][] = [[]];

  while (stack.length > 0) {
    // Удаляем и получаем последнюю комбинацию
    const currentCombo = stack.pop()!;

    // Считаем сумму комбинации
    const currentSum = currentCombo.reduce((acc, val) => acc + val, 0);

    // Если сумма комбинации равна нашему числу - сохраняем
    if (currentSum === num) {
      result.push(currentCombo);

      // Если сумма комбинации больше нашего числа - ничего не делаем
    } else if (currentSum < num) {
      // Мы добавляем числа от 1 до num в текущую комбинацию.
      // Если сумма еще не достигла num, мы продолжаем добавлять числа.
      // Если сумма становится больше num, мы прекращаем добавление.
      for (let nextNumber = 1; nextNumber <= num; nextNumber++) {
        stack.push([...currentCombo, nextNumber]);
      }
    }
  }

  return result;
}

// Тест функции
console.log(combos(3));
console.log(combos(10));
