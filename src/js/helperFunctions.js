const initialGroupBlockGenerator = (groupName) => `
    <div class="group" id="${groupName}-group">
        <h2>${groupName}</h2>
        <div class="group-content">
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
    </div>
`

const resultTableGenerator = (name, color, size, costPrice) => `
    <tr>
        <td>${name}</td>
        <td>${color}</td>
        <td>${size}</td>
        <td>${costPrice}</td>
        <td class="given"><input type="checkbox"></td>
        <td class="sold"><input type="checkbox"></td>
    <tr/>
`

export default {
    initialGroupBlockGenerator,
    resultTableGenerator
}