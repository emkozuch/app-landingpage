import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
const accordion = document.getElementsByClassName('accordion')
const accordionIcon = document.getElementsByClassName('accordion-icon')

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
        const content = this.nextElementSibling
        if (this.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px"
            accordionIcon[i].src = minus
        } else {
            content.style.maxHeight = "0"
            accordionIcon[i].src = plus
        }
    })
}