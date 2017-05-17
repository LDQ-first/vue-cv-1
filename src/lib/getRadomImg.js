//import axios from 'axios'

export default () => {
    const leftSide = document.querySelectorAll('#leftSide');
    const LoadImageAscync = (url) => {
        let promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            }
            img.onerror = (error) => {
                reject(error);
            }
            img.src = url;
        })
        return promise;
    }
    for(let i of leftSide) {
        const now = Date.now();
        LoadImageAscync(`https://unsplash.it/250/400?random&time=${now}`)
            .then( img => {
               // console.log(img);
                img.classList.add('leftSideImg');
                i.appendChild(img);
               //  console.log(i);
            })
    }


}

