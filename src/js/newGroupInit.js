import helperFunctions from './helperFunctions'
import variables from './variables'

const {
    unitButtonActiveText,
    unitButtonInitialText,
    addSectionInputs,
} = variables

const {
    resultTableGenerator
} = helperFunctions

const newGroupInit = () => {

    const addUnitButtonCollection = document.querySelectorAll('.add-unit-button')
    const addCurrentPositionButtonCollection = document.querySelectorAll('.add-current-position-button')
    const addSectionCollection = document.querySelectorAll(`.add-section`)
    const resultTableCollection = document.querySelectorAll('.result-section-table')

    const nameInputCollection = document.querySelectorAll('.name-input')
    const amountInputCollection = document.querySelectorAll('.amount-input')
    const colorInputCollection = document.querySelectorAll('.color-input')
    const costPriceInputCollection = document.querySelectorAll('.cost-price-input')
    const sellPriceInputCollection = document.querySelectorAll('.sell-price-input')
    const sizeInputCollection = document.querySelectorAll('.size-input')

    const toggleAddUnitSection = (index) => {
        Array.from(addSectionCollection)[index].classList.contains('hide') ? Array.from(addUnitButtonCollection)[index].innerHTML = unitButtonActiveText :
                                                                             Array.from(addUnitButtonCollection)[index].innerHTML = unitButtonInitialText
        Array.from(addSectionCollection)[index].classList.toggle('hide')
    }

    const clearInputs = () => Array.from(addSectionInputs).forEach(el => el.value = '')

    const generateResultPosition = (obj, index) => {
        let {
            name,
            amount,
            color,
            size,
            costPrice,
            // sellPrice,
        } = obj

        while (amount) {
            Array.from(resultTableCollection)[index].innerHTML += resultTableGenerator(name, size, color, costPrice)
            amount--
        }
    }

    const addCurrentPosition = (index) => {
        let name = Array.from(nameInputCollection)[index].value
        let amount = Array.from(amountInputCollection)[index].value
        let color = Array.from(colorInputCollection)[index].value
        let size = Array.from(sizeInputCollection)[index].value
        let costPrice = Array.from(costPriceInputCollection)[index].value
        let sellPrice = Array.from(sellPriceInputCollection)[index].value

        if (!Number.isInteger(Number(amount))) {
            alert('Please choose correct amount')
            return
        }

        generateResultPosition({
            name,
            amount,
            color,
            size,
            costPrice,
            sellPrice,
        }, index)

        clearInputs()
    }

    Array.from(addUnitButtonCollection).map((el, index) => el.addEventListener('click', () => toggleAddUnitSection(index)))
    Array.from(addCurrentPositionButtonCollection).map((el, index) => el.addEventListener('click', () => addCurrentPosition(index)))
}

export default newGroupInit