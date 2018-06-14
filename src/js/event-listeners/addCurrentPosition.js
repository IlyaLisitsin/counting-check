import resultTableGenerator from '../dom-generetor-functions/resultTableGenerator'

const clearInputs = (addSectionInputs) => Array.from(addSectionInputs).forEach(el => el.value = '')
const inputValidator = (amount, costPrice, sellPrice) => {}

const addCurrentPosition = (inputValueObject, index, resultTableCollection, addSectionInputs) => {
    let {
        name,
        amount,
        color,
        size,
        costPrice,
        sellPrice,
    } = inputValueObject

    if (!Number.isInteger(Number(amount))) {
        alert('Please choose correct amount')
        return
    } else if (!Number.isInteger(Number(costPrice))) {
        alert('Please choose correct cost price')
        return
    } else if (!Number.isInteger(Number(sellPrice))) {
        alert('Please choose correct sell price')
        return
    }

    while (amount) {
        Array.from(resultTableCollection)[index].innerHTML += resultTableGenerator(name, color, size, costPrice)
        amount--
    }

    clearInputs(addSectionInputs)
}

export default addCurrentPosition