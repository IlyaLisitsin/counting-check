const initialGroupBlockGenerator = (groupName) => `
    <div class="group" id="${groupName}-group">
        <h2 class="group-heading active">${groupName}</h2>
        <button class="group-delete-button">Delete current group</button>
        <div class="group-content">
            <div class="group-settings-panel">
                <button class="group-main-button">Add unit</button>
                <button class="group-edit-button hide">Edit unit</button>
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
                <div class="group-edit-section hide">
                    <input type="text" placeholder="Name" class="name-input">
                    <input type="text" placeholder="Color" class="color-input">
                    <select class="size-input">
                        <option value="s">s</option>
                        <option value="m">m</option>
                        <option value="l">l</option>
                        <option value="xl">xl</option>
                    </select>
                    <input type="text" placeholder="Cost price" class="cost-price-input">
                    <input type="text" placeholder="Sell price" class="sell-price-input">
    
                    <button class="edit-current-position-button">Update</button>
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