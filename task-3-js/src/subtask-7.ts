type TObject = {
  [key: string]: any;
};

function mapObject(obj: TObject, parentKey: string = ""): TObject {
  const result: TObject = {};
  /*
  Мы начинаем с объявления функции mapObject, которая принимает два аргумента:
   - obj: объект, который мы хотим преобразовать
   - parentKey (по умолчанию пустая строка): это ключ родительского объекта (если есть).
*/

  for (const key in obj) {
    // Здесь мы начинаем перебирать ключи объекта obj с помощью цикла for...in.
    if (obj.hasOwnProperty(key)) {
      /*
      Мы создаем переменную currentKey, которая представляет текущий ключ, с учетом уровня вложенности.
      Если у нас есть родительский ключ (parentKey не пустая строка), то мы добавляем текущий ключ к
      нему с использованием косой черты "/". Иначе, текущий ключ остается как есть.
      */
      const currentKey = parentKey ? `${parentKey}/${key}` : key;
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        // Если текущее значение является объектом, рекурсивно вызываем mapObject
        const nestedObject = mapObject(obj[key], currentKey);
        // Затем мы объединяем результаты рекурсивных вызовов с общим результатом, используя Object.assign.
        Object.assign(result, nestedObject);
      } else {
        // Иначе, просто добавляем значение в результат
        result[currentKey] = obj[key];
      }
    }
  }

  return result;
}

const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

//Тест функции
const flattenedMap = mapObject(obj);
console.log(flattenedMap);
