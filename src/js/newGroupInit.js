import variables from 'variables'
import deleteCurrentGroup from './event-listeners/deleteCurrentGroup'
import addCurrentPosition from './event-listeners/addCurrentPosition'
import toggleAddUnitSection from './event-listeners/toggleAddUnitSection'

const {
    addSectionInputs,
} = variables


const newGroupInit = () => {

    const addUnitButtonCollection = document.querySelectorAll('.add-unit-button')
    const addCurrentPositionButtonCollection = document.querySelectorAll('.add-current-position-button')
    const addSectionCollection = document.querySelectorAll(`.add-section`)
    const resultTableCollection = document.querySelectorAll('.result-section-table')
    const groupDeleteButtonCollection = document.querySelectorAll('.group-delete-button')
    const groupHeadingCollection = document.querySelectorAll('.group-heading')
    const groupCollection = document.querySelectorAll('.group')
    const editButtonCollection = document.querySelectorAll('.editButton')

    const nameInputCollection = document.querySelectorAll('.name-input')
    const amountInputCollection = document.querySelectorAll('.amount-input')
    const colorInputCollection = document.querySelectorAll('.color-input')
    const costPriceInputCollection = document.querySelectorAll('.cost-price-input')
    const sellPriceInputCollection = document.querySelectorAll('.sell-price-input')
    const sizeInputCollection = document.querySelectorAll('.size-input')



    Array.from(addCurrentPositionButtonCollection).map((el, index) => el.addEventListener('click', () => addCurrentPosition(
        {
            name: Array.from(nameInputCollection)[index].value,
            amount: Array.from(amountInputCollection)[index].value,
            color: Array.from(colorInputCollection)[index].value,
            size: Array.from(sizeInputCollection)[index].options[Array.from(sizeInputCollection)[index].selectedIndex].value,
            costPrice: Array.from(costPriceInputCollection)[index].value,
            sellPrice: Array.from(sellPriceInputCollection)[index].value,
        },
        index,
        resultTableCollection,
        addSectionInputs
    )))

    Array.from(addUnitButtonCollection).map((el, index) => el.addEventListener('click', () => toggleAddUnitSection(
        index,
        addSectionCollection,
        addUnitButtonCollection
    )))
    Array.from(editButtonCollection).map((el, index) => el.addEventListener('click', () => editCurrentLine(index)))
    Array.from(groupDeleteButtonCollection).map((el, index) => el.addEventListener('click', () => deleteCurrentGroup(groupCollection[index])))
    Array.from(groupHeadingCollection).map(el => el.addEventListener('click', () => el.classList.toggle('active')))
}

export default newGroupInit