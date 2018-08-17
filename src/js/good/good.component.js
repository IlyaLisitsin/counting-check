import goodTpl from './good.tpl'

export default class Good {
    constructor({ name, color, size, costPrice, sellPrice, dataFor }) {
        this.name = name
        this.color = color
        this.size = size
        this.costPrice = costPrice
        this.sellPrice = sellPrice
        this.dataFor = dataFor

        this.domModel = null
        this.elements = {}
    }

    create() {
        const tr = document.createElement('tr')

        tr.innerHTML = goodTpl({
            name: this.name,
            color: this.color,
            size: this.size,
            costPrice: this.costPrice,
            sellPrice: this.sellPrice,
            dataFor: this.dataFor,
        })

        return tr
    }
}