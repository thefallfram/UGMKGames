const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const confirm = document.getElementById('confirm')

let right = false
let click = false

confirm.style.backgroundColor = 'rgb(151, 151, 151)'

answer1.addEventListener('click', function () {
    right = false
    click = true
    answer1.style.backgroundColor = 'rgb(150, 47, 0)'
    answer2.style.backgroundColor = 'rgb(255, 81, 0)'
    answer3.style.backgroundColor = 'rgb(255, 81, 0)'
    answer4.style.backgroundColor = 'rgb(255, 81, 0)'
    confirm.style.backgroundColor = 'rgb(255, 81, 0)'
})

answer2.addEventListener('click', function () {
    right = true
    click = true
    answer2.style.backgroundColor = 'rgb(150, 47, 0)'
    answer1.style.backgroundColor = 'rgb(255, 81, 0)'
    answer3.style.backgroundColor = 'rgb(255, 81, 0)'
    answer4.style.backgroundColor = 'rgb(255, 81, 0)'
    confirm.style.backgroundColor = 'rgb(255, 81, 0)'
})

answer3.addEventListener('click', function () {
    right = false
    click = true
    answer3.style.backgroundColor = 'rgb(150, 47, 0)'
    answer2.style.backgroundColor = 'rgb(255, 81, 0)'
    answer1.style.backgroundColor = 'rgb(255, 81, 0)'
    answer4.style.backgroundColor = 'rgb(255, 81, 0)'
    confirm.style.backgroundColor = 'rgb(255, 81, 0)'
})

answer4.addEventListener('click', function () {
    right = false
    click = true
    answer4.style.backgroundColor = 'rgb(150, 47, 0)'
    answer2.style.backgroundColor = 'rgb(255, 81, 0)'
    answer1.style.backgroundColor = 'rgb(255, 81, 0)'
    answer3.style.backgroundColor = 'rgb(255, 81, 0)'
    confirm.style.backgroundColor = 'rgb(255, 81, 0)'
})

confirm.addEventListener('click', function () {
    if (click) {
        answer4.style.backgroundColor = 'rgb(255, 0, 0)'
        answer2.style.backgroundColor = 'rgb(0, 180, 30)'
        answer1.style.backgroundColor = 'rgb(255, 0, 0)'
        answer3.style.backgroundColor = 'rgb(255, 0, 0)'
        confirm.style.backgroundColor = 'rgb(150, 47, 0)'
        if (right) {
            confirm.textContent = 'Правильно, молодец'
        }
        else {
            confirm.textContent = 'Неправильно, не молодец'
        }
    }
})