(function() {
    const addButton = document.querySelector('#add-button')
    const addCurrentPositionButton = document.querySelector('#add-current-position-button')
    const nameInput = document.querySelector('#name-input')
    const amountInput = document.querySelector('#amount-input')
    const colorInput = document.querySelector('#color-input')
    const costPriceInput = document.querySelector('#cost-price-input')
    const sellPriceInput = document.querySelector('#sell-price-input')
    const sizeInput = document.querySelector('#size-input')
    const addSection = document.querySelector('.add-section')
    const addSectionInputs = document.querySelectorAll('.add-section input')
    const resultTable = document.querySelector('.result-section-table')

    const addButtonActiveText = 'Hide add section'
    const addButtonInitialText = 'Add good'

    const toggleAddSection = () => {
        addSection.classList.contains('hide') ? addButton.innerHTML = addButtonActiveText :
                                                addButton.innerHTML = addButtonInitialText
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

    addButton.addEventListener('click', toggleAddSection)
    addCurrentPositionButton.addEventListener('click', addCurrentPosition)
})()



