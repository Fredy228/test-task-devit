function arrayToObject(arr: Array<any[]>): object {
    const obj: {
        [key: string]: any
    } = {};

    /* Затем мы запускаем цикл for...of, чтобы перебрать каждый элемент item массива arr. */
    for (const item of arr) {
        const [key, value] = item;

        if (Array.isArray(value) && item.length === 2 && typeof key === "string") {
            // Если значение - массив из которого можно сделать объект, рекурсивно вызываем arrayToObject
            obj[key] = arrayToObject(value);
        } else {
            // Иначе, добавляем ключ и значение в объект
            obj[key] = value;
        }
    }

    return obj;
}

const arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

// Тест функции
const result = arrayToObject(arr);

console.log(result);
/*
Outputs: {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
*/
