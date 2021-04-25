/*https://source.unsplash.com/   
Simply add photo dimensions after the URL (ex: /800x600) */

'use strict'

const div = document.querySelector('.container')
let a = document.createElement('a');
const textnode = document.createTextNode("Link")
a.appendChild(textnode)
a.href= `https://source.unsplash.com/${randNum}x${randNum}`
div.appendChild(a)



function randNum() {
    return Math.ceil(Math.random() * 3000)
}



