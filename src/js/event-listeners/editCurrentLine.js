import variables from 'variables'
import toggleAddUnitSection from 'event-listeners/toggleAddUnitSection'

const {
    activeEditButton,
    exitEditModeText,
    startEditModeText,
} = variables


const editCurrentLine = (index, event) => {

    const id = event.target.getAttribute('data-for')
    const editButton = document.querySelector(`#${id} .group-edit-button`)
    const mainButton = document.querySelector(`#${id} .group-main-button`)
    const mainSection = document.querySelector(`#${id} .group-main-section`)
    const editSection = document.querySelector(`#${id} .group-edit-section`)

    const editLineButtonCollection = document.querySelectorAll(`#${id} .edit-line-button`)

    const currentEditButton = event.target
    const currentTr = event.target.parentNode.parentNode
    const currentTbody = document.querySelector(`[source-data="${id}"]`)

    currentEditButton.classList.toggle('active-edit-button')

    const activeEditButton = document.querySelector(`#${id} .active-edit-button`)

    currentTbody.classList.toggle('editting-tbody')
    currentTr.classList.toggle('editting-line')

    Array.from(editLineButtonCollection).map(el => {
        // if (el.classList.contains('active-edit-button')) console.log(el)
        if (!activeEditButton) el.removeAttribute('disabled')
        else if (!el.classList.contains('active-edit-button')) el.setAttribute('disabled', true)
    })

    currentEditButton.innerHTML === exitEditModeText ? currentEditButton.innerHTML = startEditModeText : currentEditButton.innerHTML = exitEditModeText

    /*******************************************************************************************/

    const addPanel = document.querySelector(`#${id} .group-add-panel`)

    addPanel.classList.toggle('hide')

    /*******************************************************************************************/

    const nameInputCellCollection = document.querySelectorAll(`#${id} .name-cell`)
    const colorInputCellCollection = document.querySelectorAll(`#${id} .color-cell`)
    const costPriceInputCellCollection = document.querySelectorAll(`#${id} .cost-price-cell`)
    const sellPriceInputCellCollection = document.querySelectorAll(`#${id} .sell-price-cell`)
    const sizeInputCellCollection = document.querySelectorAll(`#${id} .size-cell`)

    const nameInputEditting = document.querySelector(`#${id} .group-edit-section .edit-name-input`)
    const colorInputEditting = document.querySelector(`#${id} .group-edit-section .edit-color-input`)
    const costPriceInputEditting = document.querySelector(`#${id} .group-edit-section .edit-cost-price-input`)
    const sellPriceInputEditting = document.querySelector(`#${id} .group-edit-section .edit-sell-price-input`)
    const sizeInputEditting = document.querySelector(`#${id} .group-edit-section .edit-size-input`)

    const updateButton = document.querySelector(`#${id} .group-edit-section .edit-current-position-button`)

    nameInputEditting.value = nameInputCellCollection[index].innerText
    colorInputEditting.value = colorInputCellCollection[index].innerText
    costPriceInputEditting.value = costPriceInputCellCollection[index].innerText
    sellPriceInputEditting.value = sellPriceInputCellCollection[index].innerText
    sizeInputEditting.value = sizeInputCellCollection[index].innerText

    updateButton.addEventListener('click', () => {
        nameInputCellCollection[index].innerText = nameInputEditting.value
        colorInputCellCollection[index].innerText = colorInputEditting.value
        costPriceInputCellCollection[index].innerText = costPriceInputEditting.value
        sellPriceInputCellCollection[index].innerText = sellPriceInputEditting.value
        sizeInputCellCollection[index].innerText = sizeInputEditting.value
    })

}

export default editCurrentLine