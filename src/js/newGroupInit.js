import variables from 'variables'
import deleteCurrentGroup from 'event-listeners/deleteCurrentGroup'
import addCurrentPosition from 'event-listeners/addCurrentPosition'
import toggleAddUnitSection from 'event-listeners/toggleAddUnitSection'

const {
    addSectionInputs,
    unitButtonActiveText,
    unitButtonInitialText,
    editButtonActiveText,
    editButtonInitialText,
} = variables

const newGroupInit = () => {

    const groupMainButtonCollection = document.querySelectorAll('.group-main-button')
    const addCurrentPositionButtonCollection = document.querySelectorAll('.add-current-position-button')
    const groupMainSectionCollection = document.querySelectorAll(`.group-main-section`)
    const groupEditSectionCollection = document.querySelectorAll(`.group-edit-section`)
    const resultTableCollection = document.querySelectorAll('.result-section-table tbody')
    const groupDeleteButtonCollection = document.querySelectorAll('.group-delete-button')
    const groupEditButtonCollection = document.querySelectorAll('.group-edit-button')
    const groupHeadingCollection = document.querySelectorAll('.group-heading')
    const groupCollection = document.querySelectorAll('.group')

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
            dataFor: Array.from(resultTableCollection)[index].getAttribute('source-data'),
        },
        index,
        resultTableCollection,
        addSectionInputs
    )))

    Array.from(groupMainButtonCollection).map((el, index) => el.addEventListener('click', () => toggleAddUnitSection(
        Array.from(groupMainSectionCollection)[index],
        Array.from(groupMainButtonCollection)[index],
        unitButtonActiveText,
        unitButtonInitialText
    )))

    Array.from(groupEditButtonCollection).map((el, index) => el.addEventListener('click', () => toggleAddUnitSection(
        Array.from(groupEditSectionCollection)[index],
        Array.from(groupEditButtonCollection)[index],
        editButtonActiveText,
        editButtonInitialText
    )))

    Array.from(groupDeleteButtonCollection).map((el, index) => el.addEventListener('click', () => deleteCurrentGroup(groupCollection[index])))
    Array.from(groupHeadingCollection).map(el => el.addEventListener('click', () => el.classList.toggle('active')))
}

export default newGroupInit