import resultTableGenerator from '../dom-generetor-functions/resultTableGenerator'

const clearInputs = (addSectionInputs) => Array.from(addSectionInputs).forEach(el => el.value = '')

const addCurrentPosition = (inputValueObject, index, resultTableCollection, addSectionInputs) => {
    let {
        name,
        amount,
        color,
        size,
        costPrice,
        // sellPrice,
    } = inputValueObject

    if (!Number.isInteger(Number(amount))) {
        alert('Please choose correct amount')
        return
    }

    while (amount) {
        Array.from(resultTableCollection)[index].innerHTML += resultTableGenerator(name, size, color, costPrice)
        amount--
    }

    clearInputs(addSectionInputs)
}

export default addCurrentPosition