const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const confirm = document.getElementById('confirm')
htmlname = window.location.pathname.split('/').pop()
const modal = document.getElementById('modal')
const modal_content = document.getElementById('modal_content')
const button1 = document.getElementById('button1')
const pngmodal = document.getElementById('quespng')
const q1 = ['ques1.html', 'ques5.html', 'ques9.html']
const q2 = ['ques2.html', 'ques6.html', 'ques10.html']
const q3 = ['ques3.html', 'ques7.html']
const q4 = ['ques4.html', 'ques8.html']
let right = 0
let choice = 0
let NOanswer = true

if (q1.includes(htmlname)) {
    right = 1
}
if (q2.includes(htmlname)) {
    right = 2
}
if (q3.includes(htmlname)) {
    right = 3
}
if (q4.includes(htmlname)) {
    right = 4
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
        pngmodal.style.visibility = 'visible'
        if (choice != right) {
            pngmodal.src = '../sasha.png'
        }
    }
})

button1.addEventListener('click', function () {
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    modal.style.color = 'rgba(240, 248, 255, 0.0)'
    modal_content.style.backgroundColor = 'rgba(255, 81, 0, 0.0)'
    button1.style.backgroundColor = 'rgba(150, 47, 0, 0.0)'
    button1.style.pointerEvents = 'none'
    pngmodal.style.visibility = 'hidden'
})