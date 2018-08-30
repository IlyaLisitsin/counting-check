import goodTpl from './good.tpl'

const elementInterface = ({ element, event, callback }) => {
    return { element, event, callback }
}

export default class Good {
    constructor({ name, color, size, costPrice, sellPrice, editButtonClick, getCurrentGoodContext }) {
        this.name = name
        this.color = color
        this.size = size
        this.costPrice = costPrice
        this.sellPrice = sellPrice
        this.editButtonClick = editButtonClick
        this.getCurrentGoodContext = getCurrentGoodContext

        this.goodDomModel = null
        this.elementsMap = {}

        this.bindEventListeners = () => {
            Object.keys(this.elementsMap).map(domElKey => this.elementsMap[domElKey].element.addEventListener(this.elementsMap[domElKey].event, this.elementsMap[domElKey].callback))
        }

        this.bindElements = () => {
            const globalGoodScope = this

            this.elementsMap.editButton = elementInterface({
                element: this.goodDomModel.querySelector('.edit-line-button'),
                event: 'click',
                callback: this.editLine.bind(globalGoodScope),
            })
        }
    }

    bindElements() {
        const globalGoodScope = this

        this.elementsMap.editButton = elementInterface({
            element: this.goodDomModel.querySelector('.edit-line-button'),
            event: 'click',
            callback: this.editLine.bind(globalGoodScope),
        })
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

        this.goodDomModel.innerHTML = goodTpl({
            name: this.name,
            color: this.color,
            size: this.size,
            costPrice: this.costPrice,
            sellPrice: this.sellPrice,
        })

        this.bindElements()
        this.bindEventListeners()

        return this.goodDomModel
    }

    editLine() {
        this.goodDomModel.classList.add('editting-line')
        this.getCurrentGoodContext()
        this.editButtonClick()
    }

    destroyLine() {
        this.goodDomModel = null;
    }
}