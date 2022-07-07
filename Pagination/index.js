
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

const ulTagPrev = document.querySelector(".prev")
const ulTagNext = document.querySelector(".next")
const pTitlePrev =  document.querySelector(".title")
let idNumber = 1;

const prev = () => {
    let buttonPrev = '';
    buttonPrev = `<button class="btn prev" onclick="prev(${idNumber -= 1})"><span>Prev</span></button>`;
    
    array.forEach(({ id, content, title }) => {
        if (idNumber == id) {
            pTitlePrev.innerHTML = `<div key = ${id}><div>${title}, ${content}</div></div>`;
    } else {
        null;
        }
});
    ulTagPrev.innerHTML = buttonPrev;
}
prev()

const next = () => {
    let buttonNext = '';
    buttonNext = `<button class="btn next" onclick="next(${idNumber += 1})"><span>Next</span></button>`;
    array.forEach(({ id, content, title }) => {
        if (idNumber == id) {
            pTitlePrev.innerHTML = `<div key = ${id}><div>${title}, ${content}</div></div>`;
    } else {
        null;
        }
});
    ulTagNext.innerHTML = buttonNext;
}
next()
