//Elements---------------------------------------

//other elements
let display = document.getElementById('disp_sc')
let calcBody = document.getElementById('mc')
let all_btns = document.getElementsByClassName('sub_btn')
let starGroup = document.getElementById('bgs')

//special buttons
let btn_allclear = document.getElementById('b_allclear');
let btn_bye = document.getElementById('b_bye');
let btn_hello = document.getElementById('b_hello');
let btn_backspace = document.getElementById('b_backspace');

//operator buttons
let btn_add = document.getElementById('b_add');
let btn_sub = document.getElementById('b_sub');
let btn_mult = document.getElementById('b_mult');
let btn_div = document.getElementById('b_div');
let btn_equals = document.getElementById('b_equals');

//keypad buttons
let btn_one = document.getElementById('b_one');
let btn_two = document.getElementById('b_two');
let btn_three = document.getElementById('b_three');
let btn_four = document.getElementById('b_four');
let btn_five = document.getElementById('b_five');
let btn_six = document.getElementById('b_six');
let btn_seven = document.getElementById('b_seven');
let btn_eight = document.getElementById('b_eight');
let btn_nine = document.getElementById('b_nine');
let btn_zero = document.getElementById('b_zero');
let btn_dec = document.getElementById('b_dec');

let calcStatus = 1 //counter to detect is calc is on or off; 1 is on and 0 is off
let opr_counter = 0  //counter to avoid operator duplication
let maxChars = 20    // sets display limit
calcBody.classList.add('glow') //loads glow effect at start


//Functions and Event Listenerss--------------------------------------

function onCalc(){   // Turns on calculator
    calcStatus = 1
    Array.from(all_btns).forEach(e => {
        e.disabled = false
    })
    calcBody.style.opacity = '1'
    calcBody.classList.add('glow') // returns glow when on

}

function offCalc(){     // Turns off calculator
    calcStatus = 0
    display.value = ' '
    Array.from(all_btns).forEach(e => {
        e.disabled = true
    })
    calcBody.style.opacity = '0.3'
    calcBody.classList.remove('glow') // removes glow when off
    
}

function noDuplicateOprs(){  //function to check if there are duplicate operators side by side
    if(opr_counter > 0){
        alert('Invalid: Double Operators')
        return true
    }else{
        opr_counter = 1
        return false
    }
}

function dispVal(dispInput){   //function that limits display characters
    if(display.value.length < maxChars){
        display.value += dispInput
    }
}

//all clear button listener -----------------------------------
btn_allclear.addEventListener('click', () => {
    if (calcStatus == 0) {
        onCalc()
    }else{
        display.value = ' '
        opr_counter = 0
    }
})

//bye button listener-----------------------------
btn_bye.addEventListener('click', () => {
    display.value = 'GOODBYE'
    setTimeout(offCalc, 800)
})

//special buttons listeners ----------------------------
btn_hello.addEventListener('click', () => {
    let greetarr = ['Hello', 'Kamusta', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Ni Hao', 'Privet']
    let n = Math.floor(Math.random() * greetarr.length)
    display.value = greetarr[n]
})
btn_backspace.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1)
})

// operators button listeners ---------------------------
btn_add.addEventListener('click', () => {
    if (!noDuplicateOprs()) {
        dispVal('+')
    }
})
btn_sub.addEventListener('click', () => {
    if (!noDuplicateOprs()) {
        dispVal('-')
    }
})
btn_mult.addEventListener('click', () => {
    if (!noDuplicateOprs()) {
        dispVal('*')
    }
})
btn_div.addEventListener('click', () => {
    if (!noDuplicateOprs()) {
        dispVal('/')
    }
})
btn_equals.addEventListener('click', () => {
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = 'Error'
    }
})

//numeric button listeners -------------------------------
btn_one.addEventListener('click', () => {
    dispVal('1')
    opr_counter = 0
})
btn_two.addEventListener('click', () => {
    dispVal('2')
    opr_counter = 0
})
btn_three.addEventListener('click', () => {
    dispVal('3')
    opr_counter = 0
})
btn_four.addEventListener('click', () => {
    dispVal('4')
    opr_counter = 0
})
btn_five.addEventListener('click', () => {
    dispVal('5')
    opr_counter = 0
})
btn_six.addEventListener('click', () => {
    dispVal('6')
    opr_counter = 0
})
btn_seven.addEventListener('click', () => {
    dispVal('7')
    opr_counter = 0
})
btn_eight.addEventListener('click', () => {
    dispVal('8')
    opr_counter = 0
})
btn_nine.addEventListener('click', () => {
    dispVal('9')
    opr_counter = 0
})
btn_zero.addEventListener('click', () => {
    dispVal('0')
    opr_counter = 0
})
btn_dec.addEventListener('click', () => {
    if(!noDuplicateOprs()){
        dispVal('.')
    }
})

// Extra background stars animation -------------------
let star_counter = 300
let n = 0

while(n < star_counter){

    let star = document.createElement('div');
    star.classList.add('stars')

    let star_size = Math.random() * 3 + 1 // size randomizer from 1px to 3px
    star.style.height = `${star_size}px`
    star.style.width = star.style.height //make sure that stars have equal H and W

    //sets random positions
    star.style.top = `${Math.random() * 100}vh`
    star.style.left = `${Math.random() * 100}vw`

    let star_duration =  Math.random() * 6 + 1 //sets duration to 1s to 6s
    star.style.animationDuration = `${star_duration}s`

    starGroup.appendChild(star)
    n++
}
