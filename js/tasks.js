// //! Знайомство з масивами

// //TODO: Створи масив із назвами кількох фруктів. Виведи в консоль перший і останній елемент масиву, використовуючи індекси.
// const fruits = ['apple' , 'banana', 'grapefruit', 'pineapple', 'mango', 'pear'];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// //? Заміни значення другого елемента в масиві на інше. Виведи масив у консоль.
// fruits[1] = 'limon';
// console.log(fruits);


// //? Створи змінну lastIndex та присвой їй індекс передостаннього елемента масиву. Використовуй властивість length масиву.
// const penultimateIndex = fruits.length - 1;
// console.log(fruits[penultimateIndex]);

//! Методи масивів

//TODO: Об'єднай масив із трьох рядків у рядок, розділений комами, використовуючи метод join.
// const arr = ['Hello', 'dear', 'world!']
// const str = arr.join(', ')

// console.log(str);

//? Напиши функцію splitWords(sentence), яка приймає рядок, розбиває його на слова та повертає масив цих слів, використовуючи split.
// function splitWords(sentence){
//     arr = sentence.split(', ');
//     return arr;
// }

// console.log(splitWords('Ono, Maruyama, Abe, Takato, Nagase, Saito, Nomura, Sasaki'));

//? Створи масив чисел від 1 до 10 за допомогою циклу. Виріж із нього підмасив від 3 до 7 включно, використовуючи slice.
// const maxNum = 10;
// let numArr = [];


// for(let i = 1; i <= maxNum; ++i){
//     numArr.push(i);
// }

// function sliceArr(startIndex, finishIndex){
//     numArr = numArr.slice(startIndex, finishIndex);
//     return numArr;
// }

// console.log(sliceArr(2 , 7));

//? З’єднай два масиви [1, 2, 3] та [4, 5, 6] у новий масив, використовуючи concat.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let totalArr = arr1.concat(arr2);
// console.log(totalArr);

//? Знайди індекс елемента "apple" у масиві ["banana", "apple", "grape"], використовуючи indexOf. Заміни його
// let fruit = ["banana", "apple", "grape"];
// let appleIndex = fruit.indexOf('apple');

// fruit[appleIndex] = 'melon';

// console.log(fruit);

//? Додай елемент "orange" у кінець масиву, використовуючи push. Видали перший елемент

// fruit.push('orange');
// console.log(fruit);

// fruit.shift();
// console.log(fruit);

//! Ітерація по масиву
//TODO: Створи масив чисел від 1 до 10. Виведи всі числа у консоль, використовуючи цикл for.
//? Перебери масив рядків (назви міст) за допомогою циклу for...of, вивівши кожне місто в консоль.
//? Напиши функцію findEvenNumbers(arr), яка приймає масив чисел і повертає новий масив, що містить лише парні числа.
// .....

//!  Функції
//TODO: Напиши функцію calculateAverage, яка приймає довільну кількість числових аргументів та повертає їх середнє значення. Використай псевдомасив arguments.
//? Створи анонімну функцію для обчислення квадрата числа та присвой її до змінної square. Використай цю функцію для обчислення квадрата числа 5.
//? Напиши функцію showCallStack, яка викликає іншу функцію secondFunction, яка в свою чергу викликає ще одну функцію thirdFunction. Кожна функція має виводити своє ім'я, щоб побачити порядок викликів у консолі.
// .....