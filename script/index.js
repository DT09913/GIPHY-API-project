const baseURL = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=GgkoILG3CdUAlen9NnwOITNoY0OOBaya'
const limit = '&limit='
const params = '&q='

const search = document.querySelector('#search')
const form = document.querySelector('form')
const input = document.querySelector('#inp')
const select = document.querySelector('#count')
const output = document.querySelector('#output')

const searchGIF = async () => {
    let API = baseURL + key + limit + select.value + params + input.value
    const req = await fetch(API)
    const res = await req.json()
    render(res.data);
    input.value = ''
}

const render = (data) => {
    output.innerHTML = ''
    data.map(e => {
        console.log(e);
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('h3')
        const gif = document.createElement('iframe')
        title.textContent = e.title
        gif.src = e.embed_url
        card.append(title, gif)
        output.append(card)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGIF()
})



//========== background ============
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

canvas.width = windowWidth
canvas.height = windowHeight

const fontSize = 16
const columns = Math.floor(windowWidth / fontSize)
const drops = []
for (let i = 0; i < columns; i++) {
    drops.push(0)
}

const string = 'JavaScript hacking effect'
function draw() {
    context.fillStyle = 'rgba(0,0,0,0.05)'
    context.fillRect(0, 0, windowWidth, windowHeight)
    context.fontSize = '700 ' + fontSize + 'px'
    context.fillStyle = '#00cc33'
    for (let i = 0; i < columns; i++) {
        let index = Math.floor(Math.random() * string.length)
        let x = i * fontSize
        let y = drops[i] * fontSize
        context.fillText(string[index], x, y)
        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0
        }
        drops[i]++
    }
}

draw()
setInterval(draw, 35)
// =================================

