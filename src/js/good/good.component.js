import goodTpl from './good.tpl'

const elementInterface = ({ element, event, callback }) => {
    return { element, event, callback }
}

export default class Good {
    constructor({ name, color, size, costPrice, sellPrice, dataFor, editButtonClick }) {
        this.name = name
        this.color = color
        this.size = size
        this.costPrice = costPrice
        this.sellPrice = sellPrice
        this.dataFor = dataFor
        this.editButtonClick = editButtonClick

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

    create() {
        this.domModel = document.createElement('tr')

        this.domModel.innerHTML = goodTpl({
            name: this.name,
            color: this.color,
            size: this.size,
            costPrice: this.costPrice,
            sellPrice: this.sellPrice,
            dataFor: this.dataFor,
        })

        this.bindElements()
        this.bindEventListeners()

        return this.domModel
    }

    editLine() {
        this.editButtonClick()
    }
}