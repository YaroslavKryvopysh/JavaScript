

const getDataTwo = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,);
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error.message)
    }
    
}
// const url = 'https://jsonplaceholder.typicode.com/photos'

// try {
//     const dataTwo = async() => await getDataTwo(1)
//     console.log(dataTwo)
// } catch (error) {
//     console.log(error.message)
// }

getDataTwo(50)
    // .then(json => console.log(json))
    // .catch(err => console.log(err));


const getData = (url) =>
    new Promise((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error=>reject(error))
    )
getData('https://jsonplaceholder.typicode.com/photos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))


const getPost = async (id) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
    );
    const data = await response.json();
    return data;
}

getPost(1)
    .then(data => console.log(data))
    .catch(err => console.log(err));

fetch('https://api.github.com/users/YaroslavKryvopysh')
    .then(res => {
        return res.json();
    })
    .then(res => console.log(res))
    .catch(err => console.log('Error >>', err));

const getGitData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/YaroslavKryvopysh');
        const data = await response.json();
        console.log(data.name)
    } catch (err) {
        console.log('Error >>> ', err)
    }
}
getGitData()

const video = document.querySelector('video');
// const myVideo = navigator.mediaDevices.getUserMedia({ video: true })
//     .then(mediaStream => { video.srcObject = mediaStream; })
//     .catch(err => console.log('Video error >> ', err))
    
const getUserVideo = async () => {
    try {
        const response = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = response;
    } catch (err) {
        console.log('Video is not available >>> ', err)
    }
}

getUserVideo()

// const sleep = (time) => {
//     return new Promise((resolve, reject) => {
//         if (time < 500) {
//             reject('Is not enough sleep!');
//         }
//         setTimeout(()=>resolve(`Sleeped ${time}`), time)
//     })
// }

// sleep(1500)
//     .then(res => {
//         console.log(res);
//         return sleep(1000);
//     })
//     .then(res => {
//         console.log(res);
//         return sleep(500);
//     })
//     .then(res => {
//         console.log(res);
//         return sleep(200);
//     })
//     .then(res=>console.log(res))
//     .catch(err => console.log('Error >> ', err));