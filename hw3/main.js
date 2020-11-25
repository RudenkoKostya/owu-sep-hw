// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// let dog = {
//     name: 'Lucky',
//     age: 3,
//     color: 'grey',
//     weight: 20,
//     height: 50
// };
// // - людину
// let user = {
//     name: 'John',
//     age: 23,
//     weight: 95,
//     height: 75,
//     country: 'USA'
// };
// // - автомобіль
// let car = {
//     marka: 'Opel',
//     model: 'Astra G',
//     year: 1998,
//     color: 'Grey-blue',
//     engine: 1.6
// };
// // - квартиру
// let flat = {
//     adres: 'Kyivska str. 31',
//     stage: 7,
//     room: 3,
//     level: 'Middle',
//     price: 30000
// };
// // - книгу
// let book = {
//     title: "Don't be stupid",
//     genres: 'Motivation',
//     page: 208,
//     author: 'Jen Cinsero',
//     year: 2020
// }
//
// //
// // -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// let dogs = ['Akita inu', 'Staff', 'Pit bull', 'Beagle', 'Boxer'];
// // - 3 5 людей
// let people = ['Kostya', 'Alisa', 'John', 'Sasha', 'Denis'];
// // - з 5 автомобілів
// let cars = ['Opel', 'Mazda', 'BMW', 'Mercedes-benz', 'Audi'];
// //
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// let house = {
//     square: 200,
//     stage: 2,
//     room: ['bad-room', 'living-room', 'dining-room', 'children-room', 'garage'],
//     garden: {
//         square: 50,
//         apple: 3,
//         cherry: 4,
//         peach: 2
//     }
// };
// // - водій
// let driver = {
//     name: 'Sergiy',
//     age: 25,
//     experience: 7,
//     auto: ['Man', 'Renault', 'Mercedes-benz', 'Volvo']
// }
// // - іграшку
// // - стіл
// // - сумка
// //
// //
// //
// // Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log(users[7].status);
// // - статус Максима
// console.log(users[4].status);
// // - ім'я передостаннього об'єкту
// console.log(users[users.length - 2].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[users.length - 2].age);
// // - вік + ім'я 5го об'єкта
// console.log(users[4].age + ' ' + users[4].name);
// // - вік + сатус Анни
// console.log(users[5].age + ' ' + users[5].status);
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
// //
// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// //
// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//
// // - отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content.innerText);
// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules.innerText);
// // - замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = 'Content out';
//
// // - замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = 'Rules off';
// // - змініть кожному елементу колір фону на червоний
// content.style.backgroundColor = 'Red';
// rules.style.backgroundColor = 'red';
// // - змініть кожному елементу колір тексту на синій
// content.style.color = 'blue';
// rules.style.color = 'blue';
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rules.classList);
// // - отримати всі елементи з класом fc_rules
// let fc_rules = document.getElementsByClassName('fc_rules');
// console.log(fc_rules);
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (const rule of fc_rules) {
//     rule.style.color = 'red';
// }
//
// ====================
// ====================
// ====================
//
// =================e
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_header = document.getElementById('main_header');
main_header.style.color = 'green';
// -- робить шириниу елементу ul 400 пікселів
let ul = document.getElementsByTagName('ul');
for (let ulka of ul){
    ulka.style.width = '400px';
}
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
console.log(linkList);
for (const link of linkList) {
    link.style.width = '50%';
}
// -- отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2);
for (const list of listElement2){
    console.log(list.innerText);
}
// -- отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
for (let lishka of li){
    lishka.style.backgroundColor = 'grey';
}
// -- отримує всі елементи 'a' та додає їм клас anchor
let anchor = document.getElementsByTagName('a');
for (let a of anchor){
    a.className = 'anchor';
}
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let a of anchor){
    if (a.innerText === 'link3'){
        a.style.fontSize = '40px';
    }
}
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let a of anchor){
    a.className = 'element_' + a.innerText;
}
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub_header = document.getElementsByClassName('sub-header');
for (let sub_h of sub_header){
    sub_h.style.backgroundColor = prompt('How color?');
    if (sub_h.innerText === 'content 2 segment'){
        sub_h.style.color = prompt('How color text?');
    }
}
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1');
for (let el of content_1){
    el.innerText = prompt('How text you want see here?');
}
// -- отримати елементи p та змінити їм paddin на довільне значення
let p = document.getElementsByTagName('p');
for (let el of p){
    el.style.padding = '10px';
}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2 = document.getElementsByClassName('text2');
for (let el of text2){
    el.innerText = 'yeah yeah yeah';
}