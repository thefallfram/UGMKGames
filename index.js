const width = window.innerWidth
const height = window.innerHeight

document.documentElement.style.setProperty('--width', width + 'px')
document.documentElement.style.setProperty('--height', height + 'px')

const ques = document.getElementById('playques')
ques.addEventListener('click', function () {
    window.location.href = 'ques1.html'
})

console.log(width)
console.log(height)