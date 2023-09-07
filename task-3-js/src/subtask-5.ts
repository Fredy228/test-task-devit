type TObj = {
    [key: string]: any
}
function objectToArray(obj: TObj): any[] {
    const result: any[] = [];

    //Перебираем объект методом for ... in
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === "object") {
                // Если значение - объект (не массив), рекурсивно вызываем objectToArray
                result.push([key, objectToArray(value)]);
            } else {
                // Иначе, добавляем ключ и значение в массив
                result.push([key, value]);
            }
        }
    }

    return result;
}

const inputObject = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};

//Тест функции
const resultArray = objectToArray(inputObject);
console.log(resultArray);
