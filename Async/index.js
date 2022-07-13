/*Условное задание: 
1. Получить массив данных с внешнего сервера (https://jsonplaceholder.typicode.com/)
2. Перебрать полученный массив
3. При помощи кнопок prev и next выводить на экран часть данных с массива, например фото.*/

const btnPrev = document.getElementById("prev")
const btnNext = document.getElementById("next")
const messageError = document.getElementById('error');
const titleInfo = document.getElementById('info');
let idNumber = 1;
let array = [];

// const postOnScreen = async () => {
//     let resultTitle;
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,);
//         const array = await response.json();
//         console.log(array);
//         array.forEach(({id, title, body}) => {
//             if (idNumber === id) {
//                 titleInfo.innerHTML = title;
//                 resultTitle = title;
//             return resultTitle
//         }else {
//             null;
//         }
//         })
//     } catch (error) {
//         messageError.innerHTML = 'Sorry!!! The posts is not available now('
//     }
//     return resultTitle;
// }

const postOnScreen = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,);
        console.log(response)
        if (response.redirected) {
            return 22
        }
        if (!response) {
            null
        }
        const json = await response.json();
        console.log(json);
        titleInfo.innerHTML = json.title;
    } catch (error) {
        messageError.innerHTML = 'Sorry!!! The posts is not available now('
    }
}

document.getElementById("prev").onclick = function() {
    if(+idNumber >= 2){
    idNumber--;
    button = idNumber;
    titleInfo.innerHTML = postOnScreen(idNumber);
    console.log(idNumber)
    }
}

document.getElementById("next").onclick = function() {
    if(+idNumber <= 4){ 
    idNumber++;
    button = idNumber;
    titleInfo.innerHTML = postOnScreen(idNumber);
    console.log(idNumber)
    }
}
postOnScreen(idNumber)
