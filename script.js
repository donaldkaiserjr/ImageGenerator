/*https://source.unsplash.com/   
Simply add photo dimensions after the URL (ex: /800x600) */

'use strict'

const container = document.querySelector('.container')
const unsplashURL = `https://source.unsplash.com/`  //image site

const rows = 10

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${randSize()}`
    container.appendChild(img)
}
 

function randSize() {
    return `${randNum()}x${randNum()}`
}


function randNum() {
    return Math.ceil(Math.random() * 10) + 300
}
