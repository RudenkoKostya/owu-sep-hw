console.log('Just do it!');
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
let arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);
// - з 5 стічкових значень
let arrStr = ['a', 'b', 'c', 'd', 'e'];
console.log(arrStr);
// - з 5 значень стрічкового, числового та булевого типу
let arr = ['asdf', 123, true, false, 84, 'sdf'];
console.log(arr);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'Zero index';
// console.log(array);
// array[2] = 'Two';
// console.log(array);
// array[1] = 'One';
// console.log(array);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let country = ['Ukraine', 'England', 'Germany', 'Spain', 'Italy', 'France', 'New Zealand', 'Japan', 'USA', 'Sweden'];
// for (let i = 0; i < 10; i++) {
//     document.write(country[i] + '  ');
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++){
//     document.write("<div> index </div>" + i);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write('<h1>Head</h1>');
//     i++;
// };
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let x = 0;
// while (x < 20) {
//     document.write('<h1>id</h1>' + x);
//     x++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numberArr.length; i++) {
//     console.log(numberArr[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','x'];
// for (let i = 0;i < strArr.length; i++){
//     console.log(strArr[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let asfdArr = ['asdf', 23, 84, false, true, 'kdjf', 2234, true, 'skdlfj', 248];
// for (let i=0;i < asfdArr.length;i++){
//     console.log(asfdArr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayType = [123, 'hello', true, 'man', 849, false, 'chica', 999, true, 'kkkk'];
// for (let i = 0; i < arrayType.length; i++){
//     if (typeof arrayType[i] === typeof true){
//         console.log(arrayType[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrType1 = [123, 'Jkv', true, 878, 'yiy', false, 574, 'lssqp',true, 234];
// for (let i = 0; i < arrType1.length; i++ ){
//     if (typeof  arrType1[i] === typeof i) {
//         console.log(arrType1[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrType2 = ['sdfkjdfj', 8483, false, 99834, 'dkjfsliv', 98, true, false, 'iwr', 'hello', 842];
// for (let i = 0; arrType2.length; i++) {
//     if (typeof arrType2[i] === typeof  ' '){
//         console.log(arrType2[i]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrayZero = [];
// arrayZero[0] = 'one';
// arrayZero[1] = 'two';
// arrayZero[2] = 'three';
// arrayZero[3] = 'four';
// arrayZero[4] = 'five';
// arrayZero[5] =  true;
// arrayZero[6] = 24;
// arrayZero[7] = 988;
// arrayZero[8] = false;
// arrayZero[9] = 345;
//
// for (let i = 0; i < arrayZero.length; i++) {
//     console.log(arrayZero[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0;i <= 10; i++) {
//     document.write(i);
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     document.write(i + ' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i = i + 2){
//     console.log(i);
//     document.write(i + ' ');
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i<=100;i++){
//     if (i % 2 > 0) {
//         console.log(i);
//         document.write(i);
//     }
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let min = 0;
// let sec = 0;
    // for (let i = 0; i <=2; i++){
    //
    //     for (let y = 1;y < 60; y++){
    //         sec++;
    //         console.log(sec + ' sec');
    //     }
    //     sec = 0;
    //     min++;
    //     console.log(min + ' min');
    // }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hour = 0;
// for(let x = 0; x < 3; x++){
//     for (let i = 1; i < 60; i++){
//
//         for (let y = 1;y < 60; y++){
//             sec++;
//             console.log( ' sec');
//         }
//         sec = 0;
//         min++;
//         console.log(min + ' min');
//         if ( hour === 2 && min === 20){
//             break
//         }
//     }
//     if (hour === 2){
//         console.log(hour  + ' h' + min + ' min');
//         break
//     }
//     min = 0;
//     hour++;
//     console.log(hour + ' h');
// }
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrAbc = ['a', 'b', 'c'];
// let string = ' ';
// for (let i = 0; i < arrAbc.length; i++){
//     string = string + arrAbc[i];
// }
// console.log(string);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// let str = ' ';
// while (i < arrAbc.length){
//     str = str + arrAbc[i];
//     i++;
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let abc = ' ';
// for (let value of arrAbc){
//     abc = abc + value;
// }
// console.log(abc);
//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let abcArr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     abcArr.push(i);
// }
// console.log(abcArr);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr123 = [1, 2, 3];
// let arr321 = arr123.reverse();
// console.log(arr321);
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array123 = [1, 2, 3];
// array123.push(4, 5, 6);
// console.log(array123);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let ar123ay = [1, 2, 3];
// ar123ay.unshift(4, 5, 6);
// console.log(ar123ay);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let techArr = ['js', 'css', 'jq'];
// let firstTech = techArr.shift();
// console.log(firstTech);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let lastTech = techArr.pop();
// console.log(lastTech);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arFiveEl = [1, 2, 3, 4, 5];
// let sliceAr = arFiveEl.slice(3);
// console.log(sliceAr);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arrayF = [1, 2, 3, 4, 5];
// let sliceF = arrayF.slice(0, 2);
// console.log(sliceF);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arFspl = arrayF.splice(1, 2);
// console.log(arFspl);
// console.log(arrayF);
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let oneTwo = [1, 2, 3, 4, 5];
// oneTwo.splice(3, 0, 'a', 'b', 'c');
// console.log(oneTwo);
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let fiveEl = [1, 2, 3, 4, 5];
// fiveEl.splice(1, 0, 'a', 'b');
// fiveEl.splice(6, 0, 'c');
// fiveEl.splice(8, 0, 'e');
// console.log(fiveEl);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrTenNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let value of arrTenNum) {
//     if(value % 2 == 0){
//         console.log(value);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let tenNumArr = [2,17,13,6,22,31,45,66,100,-18];
let zeroArray = [];
for (let value of tenNumArr) {
    zeroArray.push(value);
}
console.log(zeroArray);
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let tenValueArr = [2,17,13,6,22,31,45,66,100,-18];
let zArr = [];
for (let i = 0;i < tenValueArr.length; i++) {
    zArr.unshift(tenValueArr[i]);
}
console.log(zArr);
//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let tenVArr = [2,17,13,6,22,31,45,66,100,-18];

// let y = tenVArr.length - 1;
// while (y >= 0){
//     console.log(tenVArr[y]);
//     y--;
// }
// let xo = 0;
//
// while (xo < tenVArr.length){
//     console.log(tenVArr[xo]);
//     xo++;
// }
//     2. перебрати його циклом for
// for (let i = 0;i < tenVArr.length; i++){
//     console.log(tenVArr[i]);
// }

// for (let index = tenVArr.length - 1; index >=0; index--){
//     console.log(tenVArr[index]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = tenVArr.length - 1;
// while (i >= 0){
//     if (i % 2 > 0){
//         console.log(tenVArr[i]);
//     }
//     i--;
// }

// let ox = 0;
// while (ox < tenVArr.length){
//     if (ox % 2 > 0){
//         console.log(tenVArr[ox]);
//     }
//     ox++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = tenVArr.length - 1;i >=0; i--){
//     if (i % 2 > 0){
//         console.log(tenVArr[i]);
//     }
// }
// for (let i = 0; i < tenVArr.length; i++){
//     if (i % 2 > 0) {
//         console.log(tenVArr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let ind = tenVArr.length - 1;
while (ind >= 0){
    if (tenVArr[ind] % 2 === 0){
        console.log(tenVArr[ind]);
    }
    ind--;
}
// let ii = 0;
// while (ii < tenVArr.length){
//     if (tenVArr[ii] % 2 == 0){
//         console.log(tenVArr[ii]);
//     }
//     ii++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = tenVArr.length - 1; i >= 0; i--){
//     if (tenVArr[i] % 2 === 0){
//         console.log(tenVArr[i]);
//     }
// }

// for (let i = 0; i < tenVArr.length; i++){
//     if (tenVArr[i] % 2 == 0){
//         console.log(tenVArr[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
let index = tenVArr.length - 1;
while (index >= 0){
    if (tenVArr[index] % 3 === 0){
        console.log(tenVArr[index]);
    }
    index--;
}
// for (let i = 0; i < tenVArr.length; i++){
//     if (tenVArr[i] % 3 == 0) {
//         tenVArr[i] = 'okten';
//     }
// }
//
// console.log(tenVArr);
// 8. вивести масив в зворотньому порядку.
let anyArr = [23, 99, 44, -122, 18, 24, 843, 928324, 192,391];
// console.log(anyArr.reverse());
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// let arrayNul = [];
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//         arrayNul.push(i);
//     }
// }
// console.log(arrayNul);
// 2. заповнити його 50 непарними числами за допомоги циклу.
// let arNul = [];
// for (let i = 1; i <=100; i++){
//     if (i % 2 > 0){
//         arNul.push(i);
//     }
// }
// console.log(arNul);
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
let arra = [];
for (let i = 1; i < 100; i++){
    arra.push(Math.round(Math.random() * 732));
}
console.log(arra);
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// 2. вывести на консоль  каждый третий елемент
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.