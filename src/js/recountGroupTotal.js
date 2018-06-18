
const recountGroupTotal = (id) => {
    const moneyAmount = document.querySelector(`#${id} .money-amount`)
    const currentCostPriceCellCollection = document.querySelectorAll(`#${id} .cost-price-cell`)
    const currentSellPriceCellCollection = document.querySelectorAll(`#${id} .sell-price-cell`)

    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue)

    const totalCostPrice = Array.from(currentCostPriceCellCollection).map(el => el.innerHTML).reduce(reducer, 0)
    const totalSellPrice = Array.from(currentSellPriceCellCollection).map(el => el.innerHTML).reduce(reducer, 0)

    const profit = totalSellPrice - totalCostPrice

    moneyAmount.innerHTML = profit

    if (profit > 0) {
        moneyAmount.classList.remove('loss')
        moneyAmount.classList.add('profit')
    } else if (profit < 0) {
        moneyAmount.classList.remove('profit')
        moneyAmount.classList.add('loss')
    } else {
        moneyAmount.classList.remove('profit')
        moneyAmount.classList.remove('loss')
    }
}

export default recountGroupTotal