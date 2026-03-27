const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const confirm = document.getElementById('confirm')
htmlname = window.location.pathname.split('/').pop()
const modal = document.getElementById('modal')
const modal_content = document.getElementById('modal_content')
const button1 = document.getElementById('button1')
const textmodal = document.getElementById('textmodal')
let right = 0
let choice = 0
let NOanswer = true

if (htmlname == 'ques1.html') {
    console.log('ok')
    right = 2
}

confirm.style.backgroundColor = 'rgb(151, 151, 151)'

answer1.addEventListener('click', function () {
    if (NOanswer) {
        choice = 1
        answer1.style.backgroundColor = 'rgb(150, 47, 0)'
        answer2.style.backgroundColor = 'rgb(255, 81, 0)'
        answer3.style.backgroundColor = 'rgb(255, 81, 0)'
        answer4.style.backgroundColor = 'rgb(255, 81, 0)'
        confirm.style.backgroundColor = 'rgb(255, 81, 0)'
    }
})

answer2.addEventListener('click', function () {
    if (NOanswer) {
        console.log('ok')
        choice = 2
        answer2.style.backgroundColor = 'rgb(150, 47, 0)'
        answer1.style.backgroundColor = 'rgb(255, 81, 0)'
        answer3.style.backgroundColor = 'rgb(255, 81, 0)'
        answer4.style.backgroundColor = 'rgb(255, 81, 0)'
        confirm.style.backgroundColor = 'rgb(255, 81, 0)'
    }
})

answer3.addEventListener('click', function () {
    if (NOanswer) {
        choice = 3
        answer3.style.backgroundColor = 'rgb(150, 47, 0)'
        answer2.style.backgroundColor = 'rgb(255, 81, 0)'
        answer1.style.backgroundColor = 'rgb(255, 81, 0)'
        answer4.style.backgroundColor = 'rgb(255, 81, 0)'
        confirm.style.backgroundColor = 'rgb(255, 81, 0)'
    }
})

answer4.addEventListener('click', function () {
    if (NOanswer) {
        choice = 4
        answer4.style.backgroundColor = 'rgb(150, 47, 0)'
        answer2.style.backgroundColor = 'rgb(255, 81, 0)'
        answer1.style.backgroundColor = 'rgb(255, 81, 0)'
        answer3.style.backgroundColor = 'rgb(255, 81, 0)'
        confirm.style.backgroundColor = 'rgb(255, 81, 0)'
    }
})

confirm.addEventListener('click', function () {
    if (choice != 0) {
        NOanswer = false
        answer4.style.backgroundColor = 'rgb(255, 0, 0)'
        answer2.style.backgroundColor = 'rgb(255, 0, 0)'
        answer1.style.backgroundColor = 'rgb(255, 0, 0)'
        answer3.style.backgroundColor = 'rgb(255, 0, 0)'
        confirm.style.backgroundColor = 'rgb(150, 47, 0)'
        if (right == 1) {
            answer1.style.backgroundColor = 'rgb(0, 180, 30)'
        }
        if (right == 2) {
            answer2.style.backgroundColor = 'rgb(0, 180, 30)'
        }
        if (right == 3) {
            answer3.style.backgroundColor = 'rgb(0, 180, 30)'
        }
        if (right == 4) {
            answer4.style.backgroundColor = 'rgb(0, 180, 30)'
        }
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        modal.style.color = 'rgba(240, 248, 255, 1.0)'
        modal_content.style.backgroundColor = 'rgba(255, 81, 0, 1.0)'
        button1.style.backgroundColor = 'rgba(150, 47, 0, 1.0)'
        button1.style.pointerEvents = 'all'
        if (choice == right) {
            textmodal.textContent = "Молодец, это правильный ответ!"
        }
        else {
            textmodal.textContent = 'Ой! Ответ неправильный... Посмотри видео еще раз!'
        }
    }
})

button1.addEventListener('click', function () {
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    modal.style.color = 'rgba(240, 248, 255, 0.0)'
    modal_content.style.backgroundColor = 'rgba(255, 81, 0, 0.0)'
    button1.style.backgroundColor = 'rgba(150, 47, 0, 0.0)'
    button1.style.pointerEvents = 'none'
})