import variables from 'variables'
import toggleAddUnitSection from 'event-listeners/toggleAddUnitSection'

const {
    editButtonActiveText,
    editButtonCellText,
} = variables


const editCurrentLine = (index, event) => {

    const id = event.target.getAttribute('data-for')
    const editButton = document.querySelector(`#${id} .group-edit-button`)
    const mainButton = document.querySelector(`#${id} .group-main-button`)
    const mainSection = document.querySelector(`#${id} .group-main-section`)

    const nameInputCellCollection = document.querySelectorAll(`#${id} .name-cell`)
    const colorInputCellCollection = document.querySelectorAll(`#${id} .color-cell`)
    const costPriceInputCellCollection = document.querySelectorAll(`#${id} .cost-price-cell`)
    const sellPriceInputCellCollection = document.querySelectorAll(`#${id} .sell-price-cell`)
    const sizeInputCellCollection = document.querySelectorAll(`#${id} .size-cell`)

    const nameInputEditting = document.querySelector(`#${id} .group-edit-section .name-input`)
    const colorInputEditting = document.querySelector(`#${id} .group-edit-section .color-input`)
    const costPriceInputEditting = document.querySelector(`#${id} .group-edit-section .cost-price-input`)
    const sellPriceInputEditting = document.querySelector(`#${id} .group-edit-section .sell-price-input`)
    const sizeInputEditting = document.querySelector(`#${id} .group-edit-section .size-input`)

    nameInputEditting.value = nameInputCellCollection[index].innerText
    colorInputEditting.value = colorInputCellCollection[index].innerText
    costPriceInputEditting.value = costPriceInputCellCollection[index].innerText
    sellPriceInputEditting.value = sellPriceInputCellCollection[index].innerText
    sizeInputEditting.value = sizeInputCellCollection[index].innerText

    editButton.classList.toggle('hide')
    mainButton.classList.toggle('hide')
    mainSection.classList.toggle('hide')
    // const editSection = document.querySelector(`#${id} .group-edit-section`)

    // const handleClick = () => {
    //
    //     // mainSection.classList.toggle('hide')
    // }

    // editButton.addEventListener('click', () => toggleAddUnitSection(
    //     editSection,
    //     editButton,
    //     `${editButtonActiveText}${index += 1}`,
    //     editButtonCellText
    // ))



    // const mainSection = document.querySelector(`${id} .group-main-button`)
}

export default editCurrentLine