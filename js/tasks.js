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

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/
// function printInfo(names, phones){
//     names = names.split(',');
//     phones = phones.split(',');

//     for (let i = 0; i < names.length; ++i){
//         console.log(`${i + 1}. ${names[i]}: ${phones[i]}`)
//     }
// }

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');


//! Ітерація по масиву

//TODO: Напиши функцію findEvenNumbers(str), яка приймає рядок чисел і повертає новий масив, що містить лише парні числа.
// let evenArr = [];

// function findEvenNumber(str){
//     totalArr = str.split(', ');
    
//     for (let num of totalArr){
//         if (num % 2 === 0){
//             evenArr.push(num);
//         }
//     }

//     return evenArr;
// }

// console.log(findEvenNumber('5, 10, 4, 3, 9, 31, 6'));

//? Створи масив назв міст. Перебери масив за допомогою for...of або for, створюючи масив з тільки тими містами, які містять букву "a". Після перетвори масив на рядок та виведи в консоль.
// let cities = ['Odesa', 'Madrid', 'Donetsk', 'Lviv', 'Dnipro', 'Valencia', 'Algeciras', 'Vinnitsya'];
// let citiesWithA = [];

// function sortCitiesA(){
//     for(let city of cities){
//         if(city.toLowerCase().includes('a')){
//             citiesWithA.push(city);
//         }
//     }
    
//     // for(let i = 0; i < cities.length; ++i){
//     //     let city = cities[i].toLowerCase();
        
//     //     if (city.includes('a')) {
//     //         citiesWithA.push(cities[i]);
//     //     }
//     // }

//     return (`Here are cities with letter 'a': ${citiesWithA.join(', ')}`);
// }

// console.log(sortCitiesA());

//? Створи масив випадкових чисел (від 1 до 100) довжиною 10. Потім за допомогою циклу знайди та виведи найбільше число з масиву. Знайди менше число та середнє арифметичне.
// let numArr = [];
// for(let i = 0; i <= 10; ++i){
//     numArr.push(Math.floor(Math.random() * 100));
// }

// function findMax(){
//     let maxNum = numArr[0];

//     for(let num of numArr){
//         if (num > maxNum){
//             maxNum = num;
//         }
//     }

//     return maxNum;
// }

// function findMin(){
//     let minNum = numArr[0];

//     for(let num of numArr){
//         if (num < minNum){
//             minNum = num;
//         }
//     }

//     return minNum;
// }

// function findAritmethicAver(){
//     let sum = 0;
    
//     for(let num of numArr){
//         sum += num;
//     }

//     let average = Math.floor(sum / numArr.length);
//     return average;
// }

// console.log(`Array of numbers: ${numArr}`);

// console.log(`Max num is: ${findMax()}`);
// console.log(`Min num is: ${findMin()}`);

// console.log(`Arithmetic average num is: ${findAritmethicAver()}`);

//!  Функції

//TODO: Напиши функцію calculateAverage, яка приймає довільну кількість числових аргументів та повертає їх середнє значення. Використай псевдомасив arguments.

//? Створи анонімну функцію для обчислення квадрата числа та присвой її до змінної square. Використай цю функцію для обчислення квадрата числа 5.
//? Напиши функцію showCallStack, яка викликає іншу функцію secondFunction, яка в свою чергу викликає ще одну функцію thirdFunction. Кожна функція має виводити своє ім'я, щоб побачити порядок викликів у консолі.
//? Створи список доступних товарів та функцію додавання, видалення або оновлювання товарів

//? Напиши функцію add для складання довільної кількості аргументів (чисел)
// let sum = 0;

// let add = function(){
//     for(let num of arguments){
//         sum +=num;
//     }

//     return sum;
// }

// console.log(add(7 , 3));
