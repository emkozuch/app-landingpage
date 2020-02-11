const monthlyBtn = document.getElementById('monthly-button')
const yearlyBtn = document.getElementById('yearly-button')

let state = {
    period: "monthly",
    monthlyPrices: [10, 25, 15],
    yearlyPrices: [100, 250, 150]

}
const changeState = (button) => {
    state.period = button.value
}

const updateCards = () => {
    const cards = document.getElementsByClassName('plan-card')
    let pricesArr = []
    let pricesPeriodArr = []
    for (let i = 0; i < cards.length; i++) {
        pricesArr.push(cards[i].getElementsByClassName('plan-price'))
        pricesPeriodArr.push(cards[i].getElementsByClassName('plan-price-period'))
        cards[i].classList.add('animated')
        if (state.period === "monthly") {
            pricesArr[i][0].innerHTML = `$${state.monthlyPrices[i]}`
            pricesPeriodArr[i][0].innerHTML = "Per Month"
            monthlyBtn.classList.add('active')
            yearlyBtn.classList.remove('active')
        } else if (state.period === "yearly") {
            pricesArr[i][0].innerHTML = `$${state.yearlyPrices[i]}`
            pricesPeriodArr[i][0].innerHTML = "Per Year"
            monthlyBtn.classList.remove('active')
            yearlyBtn.classList.add('active')
        }
        setTimeout(() => {
            cards[i].classList.remove('animated')
        }, 600);
    }
   

}

monthlyBtn.addEventListener('click', () => {
    changeState(monthlyBtn)
    updateCards()
})
yearlyBtn.addEventListener('click', () => {
    changeState(yearlyBtn)
    updateCards()
})