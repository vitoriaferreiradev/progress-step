const circles = document.querySelectorAll('.circle')
const btnPrev = document.querySelector('#prev')
const btnNext = document.querySelector('#next')
const fill = document.querySelector('#line-fill')

let currentActive = 0
let lineFill = 0
const MAX_LENGTH = circles.length - 1

btnNext.addEventListener('click', () => {
    currentActive++
    btnPrev.disabled = false

    circles[currentActive].classList.add('active')
    fill.style.width = (lineFill += 33) + '%'

    updateBtn()
})

btnPrev.addEventListener('click', () => {
    circles[currentActive--].classList.remove('active')
    fill.style.width = (lineFill -= 33) + '%'

    updateBtn()
    console.log(currentActive)
})

function updateBtn(){
    // Updated prev button
    if (currentActive === MAX_LENGTH)
    {
        btnNext.disabled = true
        currentActive = MAX_LENGTH
    } else {
        btnNext.disabled = false
    }

    // Updated prev button
    if (currentActive === 0) {
        btnPrev.disabled = true
    }

    console.log(currentActive)
}

