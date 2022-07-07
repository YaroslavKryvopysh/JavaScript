
const array = [
    {
        id: 1,
        title: 'First title',
        content: 'Text of the text to the text',
    },
    {
        id: 2,
        title: 'Second title',
        content: 'Text of the text to the text',
    },
    {
        id: 3,
        title: 'Third title',
        content: 'Text of the text to the text',
    },
    {
        id: 4,
        title: 'Fourth title',
        content: 'Text of the text to the text',
    },
    {
        id: 5,
        title: 'Fifth title',
        content: 'Text of the text to the text',
    },
];

//Нужно чтобы при клике на одну из кнопок выводился один из тайтлов из общего массива
//как вариант для того чтобы сократить весь код можно в качестве данных использовать длинну массива, по аналогии как в примере установлено общее количество страниц

const ulTagPrev = document.querySelector(".prev")
const ulTagNext = document.querySelector(".next")
const pTitlePrev = document.querySelector(".title")
const totalIds = array.length
let idNumber = 1;

const iteration = () => {
    array.forEach(({ id, content, title }) => {
        if (idNumber == id) {
            pTitlePrev.innerHTML = `<div key = ${id}><div>${title}, ${content}</div></div>`;
        } else {
            null;
        }
    })
}

const prev = () => {
    if (idNumber < 0) {
        idNumber += 1;
    } else {
        let buttonPrev = `<button class="btn prev" onclick="prev(${idNumber-=1})"><span>Prev</span></button>`;
        iteration();
        ulTagPrev.innerHTML = buttonPrev;
    }
}
prev()
const next = () => {
    if (totalIds <= idNumber) {
        null;
    } else {
        let buttonNext = `<button class="btn next" onclick="next(${idNumber+=1})"><span>Next</span></button>`;
        iteration();
        ulTagNext.innerHTML = buttonNext;
    }
}
next()

// const button = document.querySelector(".button")
// const buttonPrev = document.querySelector(".prev")
// const buttonNext = document.querySelector(".next")
// const pTitlePrev = document.querySelector(".title")
// let idNumber = 1;
// let allIds = array.length

// const showTitle = () => {
//     let buttonPrev = '';
//     let buttonNext = '';
//     if (idNumber == 0) {
//         idNumber=1;
//     } else {
//         buttonPrev = `<button class="btn prev" onclick="showTitle(${idNumber -= 1})"><span>Prev</span></button>`;
//     }
//     array.forEach(({ id, content, title }) => {
//         if (idNumber == id) {
//             pTitlePrev.innerHTML = `<div key = ${id}><div>${title}, ${content}</div></div>`;
//     } else {
//         null;
//         }
//     });
//     if (totalIds <= idNumber) {
//         null;
//     } else {
//         buttonNext = `<button class="btn next" onclick="showTitle(${idNumber += 1})"><span>Next</span></button>`;
//     }
//     buttonPrev.innerHTML = buttonPrev;
//     buttonNext.innerHTML = buttonNext;
// }
// showTitle()
