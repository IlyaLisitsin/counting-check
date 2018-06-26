import resultTableGenerator from 'dom-generators/resultTableGenerator'
import newGoodInit from 'js/newGoodInit'
import recountGroupTotal from 'js/recountGroupTotal'

const clearInputs = (addSectionInputs) => Array.from(addSectionInputs).forEach(el => el.value = '')

const addCurrentPosition = (inputValueObject, index, resultTableCollection, addSectionInputs) => {
    let {
        name,
        amount,
        color,
        size,
        costPrice,
        sellPrice,
        dataFor,
    } = inputValueObject

    if (!Number.isInteger(Number(amount))) {
        alert('Please choose numeric amount')
        return
    } else if (!Number.isInteger(Number(costPrice))) {
        alert('Please choose numeric cost price')
        return
    } else if (!Number.isInteger(Number(sellPrice))) {
        alert('Please choose numeric sell price')
        return
    }

    Array.from(resultTableCollection)[index].parentNode.classList.remove('hide')

    while (amount) {
        Array.from(resultTableCollection)[index].innerHTML += resultTableGenerator(name, color, size, costPrice, sellPrice, dataFor)
        amount--
    }

    clearInputs(addSectionInputs)
    newGoodInit(dataFor)
    recountGroupTotal(dataFor)
}

export default addCurrentPosition