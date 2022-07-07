import {myLastName} from '../Variables/function.js';
myLastName()

//! Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
//Решение
const arr = ['a', 'b', 'c']
// alert(arr)/*вывод всего массива в модальное окно*/

//! С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
//Решение
arr.map((n)=>document.write(`<div>${n}</div>`))// тут мы перебрали массив и вывели все его значения с новой строки.
document.write(`<ul><li>${arr}</li></ul>`)//тут мы вывели сразу весь массив (все его значеня) используя ключевое слово document и с помощью точечной записи обратились к методу write, а далее при помощи темплейт строки передали некий стиль, а именно маркированный и заключив массив в ${} мы получили массив как одна строка ввиде маркированного списка.
arr.map((n)=>document.write(`<ul><li>${n}</li></ul>`))//а тут мы провели перебор массива и результатом такого перебора являеться вывод на экран содержимого массивы (каждое значение по отдельности) в виде маркированного списка.
//Перебор массива и вывод значеней через функцю alert в модальное окно.
// arr.map((n)=>alert(n))/* тут перебор массива и поочередное выведение значений в модальное окно*/

//!Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
//Решение
const arrTwo = ['a', 'b', 'c', 'd']
document.write(`'${arrTwo[0]}+${arrTwo[1]}, ${arrTwo[2]}+${arrTwo[3]}'`)//тоесть тут мы что сделали, мы при выводе на экран при помощи темплейт строки, а также скобочной записи [] обратились к каждому элементу массива и провели канкатенацию строк. Все знак после темплейт строки только как орфографические элементы.

//!Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
//Решение
const arrThree = [2, 5, 3, 9]
const result = arrThree[0] * arrThree[1] + arrThree[2] * arrThree[3]
document.write(`<h3>${result}</h3>`)

//!Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
const obj = {
    a: 1,
    b: 2,
    c: 3
}
document.write(obj.c)//Первый способ при помощи точечной записи
document.write(`<div>${obj["c"]}</div>`) //Второй способ при помощи [""], для того чтобы обратится к тому или иному свойству объекта, имя свойства (ключ) необходмо обернуть в "", темплейт строка, div и ${} для того чтобы вывести элемент на экран с новой строки, в ином случае все будет сложено в одну строку.

//!Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
const objA = {
    Kolya: '1000',
    Vasya: '500',
    Petya: '200'
}
document.write(`<div>${objA.Kolya}</div> <div>${objA.Petya}</div>`)

//! Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
const objDay = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}
document.write(objDay[1])
//!Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day
let day = objDay[3]
document.write(`${day}`)

//!Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const arrFour = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
document.write(`<div>${arrFour[1][0]}</div>`)

//!Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
const objB = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
document.write(objB.js[0])