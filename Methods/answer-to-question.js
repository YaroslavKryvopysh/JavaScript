/*
1. В чем разница между null и undefined?
    Null и undefined принадлежат к простым типам данных в js, однако undefined это неопределенный тип, тоесть тип данных не определен, в свою очередь null это отсутствие значения, тоесть пустое место (данные отсутствуют).
2. Для чего используется оператор "&&"?
3. Для чего используется оператор "||"?
4. Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?
    Да.
5. Что такое DOM?
6. Что такое распространение события (Event Propogation)?
7. Что такое всплытие события (Event Bubbling)?
8. Что такое погружение события (Event Capturing)?
9. В чем разница между методами event.preventDefault() и event.stopPropagation()?
10. Как узнать об использовании метода event.preventDefault()?
11. Почему obj.someprop.x приводит к ошибке?
12. Что такое цель события или целевой элемент (event.target)?
13. Что такое текущая цель события (event.currentTarget)?
14. В чем разница между операторами "==" и "==="?
    Строгое и не строгое равенство, строгое равенство "===" проверяет данные и по их значению и по их типу, тоесть при строгом сравнении 1 и "1" будет false, так как данные имеют разные типы, а именно строка и число. Если же проверять данные при помощи нестрогого равенства "==", то сравниваться будет только их значение, по этому при нестрогом равенстве 1 и "1" выдаст true,так как сравниваться будет только значение данных, тип данных не будет сравниваться.
15. Почему результатом сравнения двух похожих объектов является false?
16. Для чего используется оператор "!!"?
17. Как записать несколько выражений в одну строку?
18. Что такое поднятие (Hoisting)?
19. Что такое область видимости (Scope)?
20. Что такое замыкание (Closures)?
21. Какие значения в JS являются ложными?
22. Как проверить, является ли значение ложным?
23. Для чего используется директива «use strict»?
    Строгий режим, запрещает автоматическое объявление переменных.
    Нельзя присваивать значения или обращаться к необъявленным переменным.
    Запрещено присваивать значения глобальный переменным, доступным только для чтения или записи.
    Нельзя удалить «неудаляемое» свойство объекта.
    Запрещено дублирование параметров.
    Нельзя создавать функции с помощью функции eval.
    Значением «this» по умолчанию является undefined.
24. Какое значение имеет this?
25. Что такое прототип объекта?
    Это способ обмена свойствами и функциональностью между объектами. Тоесть все объекты имеют глобальные прототипы к которым можно обратиться, таким образом любой объект имеет ряд свойств и функций к которым можно обращаться, в независимости от того создавали мы их или нет. Помимо этого мы можем и состоятельно создавать свои прототипы как для объектов так и для массивом, так и для функций. синтаксис следующий Object.prototype.имя метода что хотим создать, для массивов и функций тоже самое только глобальный класс объект меняем на массив или функцию.
26. Что такое IIFE?
27. Для чего используется метод Function.prototype.apply?
28. Для чего используется метод Function.prototype.call?
29. В чем разница между методами call и apply?
30. Для чего используется метод Function.prototype.bind?
31. Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?
32. Что такое функции высшего порядка (Higher Order Functions)?
33. Почему функции в JS называют объектами первого класса (First-class Objects)?
34. Как бы Вы реализовали метод Array.prototype.map?
    Суть метода map заключаеться в том что он создает новый массив и содержит в себе функцию которая будет применена к каждому элементу массиву. 
    Запись такова:
    const array = arr.map(item)=>{return console.log(item)};
35. Как бы Вы реализовали метод Array.prototype.filter?
36. Как бы Вы реализовали метод Array.prototype.reduce?
37. Что такое объект arguments?
38. Как создать объект, не имеющий прототипа?
39. Почему в представленном коде переменная b становится глобальной при вызове функции?
40. Что такое ECMAScript?
41. Что нового привнес в JS стандарт ES6 или ECMAScript2015?
42. В чем разница между ключевыми словами «var», «let» и «const»?
43. Что такое стрелочные функции (Arrow Functions)?
44. Что такое классы (Classes)?
45. Что такое шаблонные литералы (Template Literals)?
46. Что такое деструктуризация объекта (Object Destructuring)?
47. Что такое модули (Modules)?
48. Что такое объект Set?
49. Что такое функция обратного вызова (Callback Function)?
50. Что такое промисы (Promises)?
51. Что такое async/await?
52. В чем разница между spread-оператором и rest-оператором?
53. Что такое параметры по умолчанию (Default Parameters)?
54. Что такое объектная обертка (Wrapper Objects)?
55. В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?
56. Что такое NaN? Как проверить, является ли значение NaN?
57. Как проверить, является ли значение массивом?
58. Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора "%")?
59. Как определить наличие свойства в объекте?
60. Что такое AJAX?
61. Как в JS создать объект?
    При помощи ключевого слова new и глобального объекта Object, или же при помощи {},
62. В чем разница между методами Object.freeze и Object.seal?
63. В чем разница между оператором «in» и методом hasOwnProperty?
64. Какие приемы работы с асинхронным кодом в JS Вы знаете?
65. В чем разница между обычной функцией и функциональным выражением?
66. Как в JS вызвать функцию?
67. Что такое запоминание или мемоизация (Memoization)?
68. Как бы Вы реализовали вспомогательную функцию запоминания?
69. Почему typeof null возвращает object? Как проверить, является ли значение null?
70. Для чего используется ключевое слово «new»?
*/