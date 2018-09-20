const headerTpl = () => `
    <h1 class="mdc-typography--headline1">Counting</h1>
    <div class="main-panel">
        <div class="add-group-block">
            <button id="add-group-button" class="mdc-button mdc-button--unelevated">Add new group</button>
            <div class="add-group-input-block hide">
                <div class="mdc-text-field mdc-text-field--outlined">
                <input type="text" id="new-group-name-input" class="mdc-text-field__input">
                <label for="new-group-name-input" class="mdc-floating-label">Type new section name</label>
                <div class="mdc-notched-outline">
                    <svg>
                        <path class="mdc-notched-outline__path"/>
                    </svg>
                </div>
                <div class="mdc-notched-outline__idle"></div>
            </div>
                <button id="new-group-confirm-button" class="mdc-button mdc-button--unelevated">Ok!</button>
            </div>
        </div>
    </div>
`

export default headerTpl