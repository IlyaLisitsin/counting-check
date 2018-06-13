const addGroupButton = document.querySelector('#add-group-button')
const newGroupConfirmButton = document.querySelector('#new-group-confirm-button')
const newGroupNameInput = document.querySelector('#new-group-name-input')

const addSectionInputs = document.querySelectorAll('.add-section input')
const resultTable = document.querySelector('.result-section-table')
// const mainPanel = document.querySelector('.main-panel')
const mainSection = document.querySelector('.main-section')
const addGroupInputBlock = document.querySelector('.add-group-input-block')


const addUnitButtonActiveText = 'Hide add section'
const addUnitButtonInitialText = 'Add good'

const initialResultTable = `
    <tr class="table-head">
        <td>Name</td>
        <td>Color</td>
        <td>Size</td>
        <td>Price</td>
        <td>Given</td>
        <td>Sold</td>
    </tr>
`


