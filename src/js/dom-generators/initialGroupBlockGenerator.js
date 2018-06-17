import variables from 'variables'

const {
    unitButtonInitialText,
    editButtonActiveText,
} = variables

const initialGroupBlockGenerator = (groupName) => `
    <div class="group" id="${groupName}-group">
        <h2 class="group-heading active">${groupName}</h2>
        <button class="group-delete-button">Delete current group</button>
        <div class="group-content">
            <div class="group-settings-panel">
                <div class="group-add-panel">
                    <button class="group-main-button">${unitButtonInitialText}</button>
                    <div class="group-main-section hide">
                        <input type="text" placeholder="Name" class="name-input">
                        <input type="text" placeholder="Amount" class="amount-input">
                        <input type="text" placeholder="Color" class="color-input">
                        <select class="size-input">
                            <option value="s">s</option>
                            <option value="m">m</option>
                            <option value="l">l</option>
                            <option value="xl">xl</option>
                        </select>
                        <input type="text" placeholder="Cost price" class="cost-price-input">
                        <input type="text" placeholder="Sell price" class="sell-price-input">
        
                        <button class="add-current-position-button">Add</button>
                    </div>
                </div>

                <div class="group-edit-panel">
                    <button class="group-edit-button">${editButtonActiveText}</button>
                    <div class="group-edit-section">
                        <input type="text" placeholder="Name" class="edit-name-input">
                        <input type="text" placeholder="Color" class="edit-color-input">
                        <select class="edit-size-input">
                            <option value="s">s</option>
                            <option value="m">m</option>
                            <option value="l">l</option>
                            <option value="xl">xl</option>
                        </select>
                        <input type="text" placeholder="Cost price" class="edit-cost-price-input">
                        <input type="text" placeholder="Sell price" class="edit-sell-price-input">
        
                        <button class="edit-current-position-button">Update</button>
                    </div>
                </div>
            </div>
            <table class="result-section-table">
                <thead>
                    <tr class="table-head">
                        <td>Name</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Price</td>
                        <td>Given</td>
                        <td>Sold</td>
                    </tr>
                    <tbody source-data="${groupName}-group"></tbody>
                </thead>
            </table>
        </div>
    </div>
`

export default initialGroupBlockGenerator