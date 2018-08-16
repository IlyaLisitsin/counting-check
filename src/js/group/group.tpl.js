import variables from 'variables'

const {
    unitButtonInitialText,
    editButtonActiveText,
    unitButtonInitialIconName,
} = variables

const groupTpl = ({ groupName }) => `
    <div class="group mdc-layout-grid__cell mdc-layout-grid__cell--align-middle" id="${groupName}-group">
        <i class="group-delete-button material-icons">clear</i>
        <h2 class="group-heading active mdc-typography--headline2">${groupName}</h2>
        <div class="total-group-counting">Total: <span class="money-amount">0</span></div>
        <div class="group-content">
            <div class="group-settings-panel">
                <div class="group-add-panel">
                    <button class="group-main-button mdc-button mdc-button--unelevated">
                        ${unitButtonInitialText}
                        <i class="material-icons">${unitButtonInitialIconName}</i>
                    </button>
                    <div class="group-main-section mdc-layout-grid__inner hide">
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input name-input">
                            <label class="mdc-floating-label">Name</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                         <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input amount-input">
                            <label class="mdc-floating-label">Amount</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input color-input">
                            <label class="mdc-floating-label">Color</label>
                            <div class="mdc-line-ripple"></div>
                        </div>                      
                        <div class="mdc-select mdc-select--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <select class="mdc-select__native-control size-input">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <label class="mdc-floating-label">Size</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input cost-price-input">
                            <label class="mdc-floating-label">Cost price</label>
                            <div class="mdc-line-ripple"></div>
                        </div>    
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input sell-price-input">
                            <label class="mdc-floating-label">Sell price</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                        <button class="add-current-position-button mdc-button mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-12-tablet">Add</button>

                    </div>
                </div>
                
                <div class="group-edit-panel">
                    <button class="group-edit-button mdc-button mdc-button--unelevated">
                        ${editButtonActiveText}
                        <i class="material-icons">${unitButtonInitialIconName}</i>
                    </button>
                    <div class="group-edit-section mdc-layout-grid__inner">
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input edit-name-input">
                            <label class="mdc-floating-label">Name</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input edit-color-input">
                            <label class="mdc-floating-label">Color</label>
                            <div class="mdc-line-ripple"></div>
                        </div>                      
                        <div class="mdc-select mdc-select--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <select class="mdc-select__native-control edit-size-input">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <label class="mdc-floating-label">Size</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input edit-cost-price-input">
                            <label class="mdc-floating-label">Cost price</label>
                            <div class="mdc-line-ripple"></div>
                        </div>    
                        <div class="mdc-text-field mdc-text-field--box mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop">
                            <input type="text" class="mdc-text-field__input edit-sell-price-input">
                            <label class="mdc-floating-label">Sell price</label>
                            <div class="mdc-line-ripple"></div>
                        </div>
                        <button class="edit-current-position-button mdc-button mdc-button--unelevated mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-12-tablet">Update</button>

                    </div>
                </div>

            </div>
            <table class="result-section-table hide">
                <thead>
                    <tr class="table-head">
                        <td>Name</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Cost price</td>
                        <td>Sell price</td>
                        <!--<td>Given</td>-->
                        <!--<td>Sold</td>-->
                    </tr>
                    <tbody source-data="${groupName}-group"></tbody>
                </thead>
            </table>
        </div>
    </div>
`

export default groupTpl