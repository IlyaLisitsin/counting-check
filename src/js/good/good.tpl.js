import variables from 'variables'

const {
    startEditModeText
} = variables


const goodTpl = ({ name, color, size, costPrice, sellPrice, dataFor }) => `
    <td class="name-cell">${name}</td>
    <td class="color-cell">${color}</td>
    <td class="size-cell">${size}</td>
    <td class="cost-price-cell">${costPrice}</td>
    <td class="sell-price-cell">${sellPrice}</td>
    <td class="edit-cell"><button class="edit-line-button mdc-button mdc-button--unelevated" data-for=${dataFor}>${startEditModeText}</button></td>
`

export default goodTpl