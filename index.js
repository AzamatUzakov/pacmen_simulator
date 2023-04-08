let d22 = document.querySelector('.d22')
let food = document.querySelector('.food')
let food_pos = food.getBoundingClientRect()
let eyes = document.querySelector('eyes')
let food_two = document.querySelector('.food_two')
let food_three = document.querySelector('.food_three')
let food_for = document.querySelector('.food_for')
let food_five = document.querySelector('.food_five')
let red_food = document.querySelectorAll('#red')
let p = document.querySelector('#p')
let modal_bg_two = document.querySelector('.modal_bg_two')
let close_two = document.querySelector('h5')
let modal_bg = document.querySelector('.modal_bg')
let close = document.querySelector('h3')

console.log(red_food);
setInterval(() => {
    d22.classList.toggle('mouse_open')

}, 300);



window.onmousemove = (event) => {

    let x = event.clientX
    let y = event.clientY
    d22.style.top = `${y}px`
    d22.style.left = `${x}px`

}


setInterval(() => {
    d22.classList.toggle('mouse_open')

}, 300);



close.onclick = () => {
    modal_bg.style.display = 'none'
    modal_bg.style.opacity = 0
}





let time = 30;
let countDownEl = document.querySelector('.minet p')

setInterval(updateCountdown, 1000)

function updateCountdown() {
    let minut = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownEl.innerHTML = `${minut}:${seconds}`;
    time--;
    if (time === 0) {
        modal_bg_two.style.display = 'block'

    }
}






close_two.onclick = () => {
    modal_bg_two.style.display = 'none'

}
let s = 5
food.ondblclick = () => {
    food.style.display = 'none'

    p.innerHTML = `${s--} шт`
    
if (s === 0) {
    modal_bg.style.display = 'block'

}
}


food_two.ondblclick = () => {
    food_two.style.display = 'none'
    p.innerHTML = `${s--} шт`
    
if (s === 0) {
    modal_bg.style.display = 'block'

}
}


food_three.ondblclick = () => {
    food_three.style.display = 'none'
    p.innerHTML = `${s--} шт`
    
if (s === 0) {
    modal_bg.style.display = 'block'

}
}

food_for.ondblclick = () => {
    food_for.style.display = 'none'
    p.innerHTML = `${s--} шт`
    
if (s === 0) {
    modal_bg.style.display = 'block'

}
}
food_five.ondblclick = () => {
    food_five.style.display = 'none'
    p.innerHTML = `${s--} шт`
    
if (s === 0) {
    modal_bg.style.display = 'block'

}
}


console.log(modal_bg)


/* 
<div class="food_three"></div>
<div class="food_for"></div>
<div class="food_five"></div> */

/* let body = window
let x = 100
let y = 100

window.onkeydown = (event) => {
    switch (event.which) {
        case 38:
            y -= 25
            d22.style.rotate = "270deg"
            moveD22()
            break;
        case 40:
            y += 25
            moveD22()
            d22.style.rotate = "90deg"
            break;
        case 37:
            x -= 25
            d22.style.rotate = "180deg"
            moveD22()
            break;
        case 39:
            x += 25
            d22.style.rotate = "0deg"
            moveD22()
            break;
    }
}

function moveD22() {
    d22.style.translate = `${x}px ${y}px`

    let d22_pos = d22.getBoundingClientRect()

    if (d22_pos.x >= food_pos.x - 40 && d22_pos.x <= food_pos.x + 40 && d22_pos.y >= food_pos.y - 40 && d22_pos.y <= food_pos.y + 40) {
        p.innerHTML = food.length
    }

}

setInterval(() => {
    let xRand = Math.floor(Math.random() * 600).toString()
    let yRand = Math.floor(Math.random() * 600).toString()
    food.style.top = `${xRand}`
    food.style.left = `${yRand}`
}, 2000); */

