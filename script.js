const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')

const calculateBtn = document.querySelector('.button')

const dateContainer = document.querySelector('.date-container')

const example = document.getElementById('example')


calculateBtn.addEventListener('click', () => {

    example.value = `${yearInput.value}-${monthInput.value}-${dayInput.value}`

    let todayTime = new Date().getTime()
    let inpDate = new Date(`${example.value}`).getTime()

    if (todayTime > inpDate) {
        if (example.value) {
            correct(dayInput)
            correct(monthInput)
            correct(yearInput)

            calculate()

        } else {
            error(dayInput)
            error(monthInput)
            error(yearInput)
        }
    } else {
        error(dayInput)
        error(monthInput)
        error(yearInput)
    }

})

function error(inp) {
    if (inp.value == '') {
        inp.parentElement.classList.add('error1')
        inp.parentElement.classList.remove('error2')
        dateContainer.classList.add('invalid')
        dateContainer.classList.remove('valid')
    } else {
        inp.parentElement.classList.add('error2')
        inp.parentElement.classList.remove('error1')
        dateContainer.classList.add('invalid')
        dateContainer.classList.remove('valid')
    }
}

function correct(inp) {
    inp.parentElement.classList.remove('error1')
    inp.parentElement.classList.remove('error2')
    dateContainer.classList.remove('invalid')
    dateContainer.classList.add('valid')
}


function calculate() {
    let birtDate = new Date(example.value)

    let d1 = birtDate.getDate()
    let m1 = birtDate.getMonth() + 1
    let y1 = birtDate.getFullYear()

    const today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()


    let d3, m3, y3

    y3 = y2 - y1

    if (m2 >= m1) {
        m3 = m2 - m1
    } else {
        y3--
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1
    } else {
        m3--
        d3 = new Date(y1, m1, 0).getDate() + d2 - d1
    }

    if (m3 < 0) {
        m3 = 11
        y3--
    }

    const contentDay = document.getElementById('contentDay')
    const contentMonth = document.getElementById('contentMonth')
    const contentYear = document.getElementById('contentYear')


    contentDay.innerHTML = 0
    contentMonth.innerHTML = 0
    contentYear.innerHTML = 0



    let inttervalDay = setInterval(countDayInt, 10)
    let inttervalMonth = setInterval(countMonthInt, 10)
    let inttervalYear = setInterval(countYearInt, 10)

    function countDayInt() {
        if (!d3 == 0) {
            contentDay.innerHTML++
            if (contentDay.textContent == d3) {
                clearInterval(inttervalDay)
            }
        }
    }

    function countMonthInt() {
        if (!m3 == 0) {
            contentMonth.innerHTML++
            if (contentMonth.textContent == m3) {
                clearInterval(inttervalMonth)
            }
        }
    }

    function countYearInt() {
        if (!y3 == 0) {
            contentYear.innerHTML++
            if (contentYear.textContent == y3) {
                clearInterval(inttervalYear)
            }
        }
    }

    const bodyBackground = document.querySelector('body')
    const birthDay = document.querySelector('.birthday')
    if (d3 == 0 && m3 == 0) {
        bodyBackground.style.backgroundImage = "url(assets/images/happy-birthday.gif)"
        birthDay.style.display = 'block'
    } else {
        bodyBackground.style.backgroundImage = ""
        birthDay.style.display = 'none'
    }

}









