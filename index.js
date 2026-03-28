const nav1 = document.getElementById('nav1')
const nav2 = document.getElementById('nav2')
const nav3 = document.getElementById('nav3')
const nav4 = document.getElementById('nav4')
const width = window.innerWidth
const height = window.innerHeight
const listceh = ['poroshki/', 'medeplav/', 'electroliz/']
const listnum = ['ques1.html', 'ques2.html', 'ques3.html', 'ques4.html', 'ques5.html', 'ques6.html', 'ques7.html', 'ques8.html', 'ques9.html', 'ques10.html']
htmlname = window.location.pathname.split('/').pop()

nav1.addEventListener('click', function () {
    window.location.href = '/index.html'
})
nav2.addEventListener('click', function () {
    window.location.href = '/about.html'
})
nav3.addEventListener('click', function () {
    window.location.href = '/play.html'
})
nav4.addEventListener('click', function () {
    window.location.href = '/videogame.html'
})

document.documentElement.style.setProperty('--width', width + 'px')
document.documentElement.style.setProperty('--height', height + 'px')

if (htmlname == 'play.html') {
    const ques = document.getElementById('playques')
    ques.addEventListener('click', function () {
        let randomItem = listceh[Math.floor(Math.random() * listceh.length)] + listnum[Math.floor(Math.random() * listnum.length)]
        window.location.href = randomItem
    })
}

console.log(width)
console.log(height)
