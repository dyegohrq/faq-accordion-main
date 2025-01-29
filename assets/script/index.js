let buttonPLus = document.getElementById('plus');
let buttonMinus = document.getElementById('minus')
let titleCard = document.getElementById('title')
let p = document.getElementById('paragrapho')
let card = document.querySelectorAll('.card')
let mainContent = document.querySelectorAll('.main-content')

card.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('on')
    })

    console.log(item)
})


