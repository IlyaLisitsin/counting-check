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

        this.domModel = null
        this.elementsMap = {}
    }

    bindElements() {
        const globalGroupScope = this

        this.elementsMap.editButton = elementInterface({
            element: this.domModel.querySelector('.edit-line-button'),
            event: 'click',
            callback: this.editLine.bind(globalGroupScope),
        })

    }

    bindEventListeners() {
        Object.keys(this.elementsMap).map(domElKey => this.elementsMap[domElKey].element.addEventListener(this.elementsMap[domElKey].event, this.elementsMap[domElKey].callback))
    }

    updateValues({ newName, newColor, newSize, newCostPrice, newSellPrice  }) {
        this.domModel.innerHTML = goodTpl({
            name: newName || this.name,
            color: newColor || this.color,
            size: newSize || this.size,
            costPrice: newCostPrice || this.costPrice,
            sellPrice: newSellPrice || this.sellPrice,
        })
    }

    create() {
        this.domModel = document.createElement('tr')

        this.domModel.innerHTML = goodTpl({
            name: this.name,
            color: this.color,
            size: this.size,
            costPrice: this.costPrice,
            sellPrice: this.sellPrice,
        })

        this.bindElements()
        this.bindEventListeners()

        return this.domModel
    }

    editLine() {
        console.log('good', this)
        this.domModel.classList.add('editting-line')
        this.editButtonClick()
        this.getCurrentGoodContext()


    }
}