const initialGroupBlockGenerator = (groupName) => `
        <div class="group" id="${groupName}-group">
            <h2>${groupName}</h2>
            <button class="add-unit-button">Add unit</button>
            <div class="add-section hide">
                <input type="text" placeholder="Name" class="name-input">
                <input type="text" placeholder="Amount" class="amount-input">
                <input type="text" placeholder="Color" class="color-input">
                <input type="text" placeholder="Size" class="size-input">
                <input type="text" placeholder="Cost price" class="cost-price-input">
                <input type="text" placeholder="Sell price" class="sell-price-input">

                <button class="add-current-position-button">Add</button>
            </div>

            <div class="result-section">
                <table class="result-section-table">
                    <tr class="table-head">
                        <td>Name</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Price</td>
                        <td>Given</td>
                        <td>Sold</td>
                    </tr>
                </table>
            </div>
        </div>
`

const variablesInititalion = () => {
    const addUnitButton = document.querySelectorAll('.add-unit-button')
    const addCurrentPositionButton = document.querySelectorAll('.add-current-position-button')
    const addSection = document.querySelector('.add-section')
    const nameInput = document.querySelector('#name-input')
    const amountInput = document.querySelector('#amount-input')
    const colorInput = document.querySelector('#color-input')
    const costPriceInput = document.querySelector('#cost-price-input')
    const sellPriceInput = document.querySelector('#sell-price-input')
    const sizeInput = document.querySelector('#size-input')
    const resultTable = document.querySelector('.result-section-table')
}