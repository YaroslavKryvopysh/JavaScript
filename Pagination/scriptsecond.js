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

const btnPrev = document.getElementById("prev")  //ссылка на html tаg с конкретным id
const btnNext = document.getElementById("next")  //ссылка на html tаg с конкретным id
const titlePrev = document.getElementById("title")  //ссылка на html tаg с конкретным id
let idNumber = 1;
let button = '';

const iteration = () => {
    let resultTitle;
    array.forEach(({ id, content, title }) => {
        if (idNumber === id) {
            console.log(idNumber)
            console.log(title)
            titlePrev.innerHTML = `${title}`;
            resultTitle = title;
            return resultTitle
        }else {
            null;
        }
    })
    return resultTitle;
}
iteration()

document.getElementById("prev").onclick = function() {
    if(+idNumber >= 2){ //здесь мы в инструкции ИФ задали условие, что если значение кнопки (числовое) меньше або равно 3, то значение переменной idNumber должно увеличиваться на 1
    idNumber--;
    button = idNumber;
    titlePrev.innerHTML = iteration(); // здесь у нас мы в html файл с tаg calculate передаем значение функции calculation c аргументом в виде значения переменной buttonPrev которая равна значению переменной idNumber
    console.log(idNumber)
    }
}

document.getElementById("next").onclick = function() {
    if(+idNumber <= 4){ //здесь мы в инструкции ИФ задали условие, что если значение кнопки (числовое) больше або равно 2, то значение переменной idNumber должно уменьшаться на 1
    idNumber++;
    button = idNumber;
    titlePrev.innerHTML = iteration();
    console.log(idNumber)
    }
}