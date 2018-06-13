const newGroupInit = (groupName) => {

    const addUnitButton = document.querySelector(`#${groupName}-group .add-unit-button`)
    const addCurrentPositionButton = document.querySelector(`#${groupName}-group .add-current-position-button`)
    const addSection = document.querySelector(`#${groupName}-group .add-section`)
    const nameInput = document.querySelector(`#${groupName}-group .name-input`)
    const amountInput = document.querySelector(`#${groupName}-group .amount-input`)
    const colorInput = document.querySelector(`#${groupName}-group .color-input`)
    const costPriceInput = document.querySelector(`#${groupName}-group .cost-price-input`)
    const sellPriceInput = document.querySelector(`#${groupName}-group .sell-price-input`)
    const sizeInput = document.querySelector(`#${groupName}-group .size-input`)
    const resultTable = document.querySelector(`#${groupName}-group .result-section-table`)

    const toggleAddUnitSection = () => {
        addSection.classList.contains('hide') ? addUnitButton.innerHTML = addUnitButtonActiveText :
            addUnitButton.innerHTML = addUnitButtonInitialText
        addSection.classList.toggle('hide')
    }

    const clearInputs = () => Array.from(addSectionInputs).forEach(el => el.value = '')

    const generateResultPosition = (obj) => {
        let {
            name,
            amount,
            color,
            size,
            costPrice,
            // sellPrice,
        } = obj

        while (amount) {
            resultTable.innerHTML += `<tr><td>${name}</td><td>${color}</td><td>${size}</td><td>${costPrice}</td><td class="given"><input type="checkbox"></td><td class="sold"><input type="checkbox"></td><tr/>`
            amount--
        }
    }

    const addCurrentPosition = () => {
        let name = nameInput.value
        let amount = amountInput.value
        let color = colorInput.value
        let size = sizeInput.value
        let costPrice = costPriceInput.value
        let sellPrice = sellPriceInput.value

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
        })

        clearInputs()
    }

    addUnitButton.addEventListener('click', toggleAddUnitSection)
    addCurrentPositionButton.addEventListener('click', addCurrentPosition)
}