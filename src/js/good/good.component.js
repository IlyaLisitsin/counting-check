import goodTpl from './good.tpl'

export default class Good {
    constructor({ name, color, size, costPrice, sellPrice, id, editButtonClick }) {
        this.name = name
        this.color = color
        this.size = size
        this.costPrice = costPrice
        this.sellPrice = sellPrice
        this.id = id
        this.editButtonClick = editButtonClick

        this.goodDomModel = null
        this.elementsMap = {}
    }

    bindElements() {
        const globalGoodScope = this

        this.elementsMap.editButton = {
            element: this.goodDomModel.querySelector('.edit-line-button'),
            event: 'click',
            callback: this.editLine.bind(globalGoodScope),
        }
    }

    bindEventListeners() {
        Object.keys(this.elementsMap).map(domElKey => this.elementsMap[domElKey].element.addEventListener(this.elementsMap[domElKey].event, this.elementsMap[domElKey].callback))
    }

    updateCurrentPositionValues({ newName, newColor, newSize, newCostPrice, newSellPrice }) {
        this.goodDomModel.innerHTML = goodTpl({
            name: newName || this.name,
            color: newColor || this.color,
            size: newSize || this.size,
            costPrice: newCostPrice || this.costPrice,
            sellPrice: newSellPrice || this.sellPrice,
        })

        this.name = newName || this.name
        this.color = newColor || this.color
        this.size = newSize || this.size
        this.costPrice = newCostPrice || this.costPrice
        this.sellPrice = newSellPrice || this.sellPrice

        this.bindElements()
        this.bindEventListeners()
    }

    create() {
        this.goodDomModel = document.createElement('tr')
        this.goodDomModel.id = this.id

        this.goodDomModel.innerHTML = goodTpl({
            name: this.name,
            color: this.color,
            size: this.size,
            costPrice: this.costPrice,
            sellPrice: this.sellPrice,
        })

        this.bindElements()
        this.bindEventListeners()

        return this
    }

    editLine() {
        this.goodDomModel.classList.add('editting-line')
        this.editButtonClick(this.id)
    }

    destroyLine() {
        this.goodDomModel = null;
    }
}