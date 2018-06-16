import variables from 'variables'

const {
    startEditModeText
} = variables


const resultTableGenerator = (name, color, size, costPrice, sellPrice, dataFor) => `
    <tr>
        <td class="name-cell">${name}</td>
        <td class="color-cell">${color}</td>
        <td class="size-cell">${size}</td>
        <td class="cost-price-cell">${costPrice}</td>
        <td class="sell-price-cell">${sellPrice}</td>
        <td class="given-cell"><input type="checkbox"></td>
        <td class="sold-cell"><input type="checkbox"></td>
        <td class="edit-cell"><button class="edit-line-button" data-for=${dataFor}>${startEditModeText}</button></td>

    </tr>
`

export default resultTableGenerator