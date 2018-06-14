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

export default resultTableGenerator