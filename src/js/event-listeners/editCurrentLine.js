import variables from 'variables'
import toggleAddUnitSection from 'event-listeners/toggleAddUnitSection'

const {
    activeEditButton,
    exitEditModeText,
    startEditModeText,
} = variables


const editCurrentLine = (index, event) => {

    const id = event.target.getAttribute('data-for')
    const editLineButtonCollection = document.querySelectorAll(`#${id} .edit-line-button`)
    const currentEditButton = event.target
    const currentTr = event.target.parentNode.parentNode
    const currentTbody = document.querySelector(`[source-data="${id}"]`)

    currentEditButton.classList.toggle('active-edit-button')

    const activeEditButton = document.querySelector(`#${id} .active-edit-button`)

    currentTbody.classList.toggle('editting-tbody')
    currentTr.classList.toggle('editting-line')

    Array.from(editLineButtonCollection).map(el => {
        if (!activeEditButton) el.removeAttribute('disabled')
        else if (!el.classList.contains('active-edit-button')) el.setAttribute('disabled', true)
    })

    currentEditButton.innerHTML === exitEditModeText ? currentEditButton.innerHTML = startEditModeText : currentEditButton.innerHTML = exitEditModeText

    /*******************************************************************************************/

    const addPanel = document.querySelector(`#${id} .group-add-panel`)
    const editPanel = document.querySelector(`#${id} .group-edit-panel`)

    addPanel.classList.toggle('hide')

    /*******************************************************************************************/

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

    // editButton.classList.toggle('hide')
    //
    //
    // if (mainSection.classList.contains('hide')) editSection.classList.remove('hide')
    // else editSection.classList.add('hide')

    // mainSection.classList.toggle('hide')
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