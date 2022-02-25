console.log("stranger things are coming! World!")
document.querySelector('h1').innerText = 'Welcome to The Upside Down'

const image = document.querySelector('img')
console.log(image)

const eggos = document.createElement('img')
document.querySelector('.container').appendChild(eggos)
eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')
eggos.style.width = '50%'

// eggos.remove()

