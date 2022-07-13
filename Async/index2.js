/*
1. Получить с сервера массив данных,
2. Вывести на экран данные,
3. Изменять их при помощи кнопок
*/

const buttonPrev = document.getElementById('btnPrev');
const buttonNext = document.getElementById('btnNext');
const showPhoto = document.querySelector('.photo');
const errorPhoto = document.querySelector('.error_photo');
let idPhoto = 1;

// const photoOnScreen = async () => {
//     let resultPhoto;
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//         const array = await response.json();
//         console.log(array);
//         array.forEach(({ id, title, url }) => {
//             if (idPhoto === id) {
//                 showPhoto.innerHTML = `<image src="${url}"></image>`;
//                 resultPhoto = url;
//                 return resultPhoto;
//             } else {
//                 null;
//             }
//         })
//     } catch (err) {
//         errorPhoto.innerHTML='Sorry!!! The photo is not availeble now ((('
//     }
//     return resultPhoto;
// }

const photoOnScreen = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const resolve = await response.json();
        const url = resolve.url;
        console.log(url);
        showPhoto.innerHTML = `<image src="${url}"></image>`;
    } catch (err) {
        errorPhoto.innerHTML='Sorry!!! The photo is not availeble now ((('
    }
}

document.getElementById('btnPrev').onclick = () => {
    if (+idPhoto>=2) {
        idPhoto--;
        btn = idPhoto;
        showPhoto.innerHTML = photoOnScreen(idPhoto);
        console.log(idPhoto)
    }
}

document.getElementById('btnNext').onclick = () => {
    if (+idPhoto <= 5) {
        idPhoto++;
        btn = idPhoto;
        showPhoto.innerHTML = photoOnScreen(idPhoto);
        console.log(idPhoto)
    }
}

photoOnScreen(idPhoto)