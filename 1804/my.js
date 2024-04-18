/* 1.Фильтрация массива чисел для выбора чисел больше 5 с использованием
 функции высшего порядка :
 */

const numbers = [1, 6, 3, 8, 10, 4, 2, 7];

const numbersGreaterThan5 = numbers.filter(item => item > 5);

console.log(numbersGreaterThan5);



/*
Фильтрация массива продуктов для выбора продуктов с ценой выше 5000:

*/


const products = [
    { name: 'Лампа', price: 3500, manufacturer: 'A' },
    { name: 'Стол', price: 6000, manufacturer: 'B' },
    { name: 'Кресло', price: 4500, manufacturer: 'C' },
    { name: 'Шкаф', price: 7500, manufacturer: 'A' },
    { name: 'Ковер', price: 3000, manufacturer: 'B' }
];

const expensiveProducts = products.filter(item => item.price > 5000);

console.log(expensiveProducts);