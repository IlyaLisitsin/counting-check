import Good from 'good'
import goodTpl from './group.tpl'

const elementInterface = ({ element, event, callback }) => {
    return { element, event, callback }
}


export default class Group {
    constructor(name) {
        this.name = name

        this.domModel = null
        this.elements = {}
    }

    bindElements() {
        const globalGroupScope = this

        this.elements.deleteButton = elementInterface({
            element: this.domModel.querySelector('.group-delete-button'),
            event: 'click',
            callback: this.destroy.bind(globalGroupScope),
        })

        this.elements.groupMainButton = elementInterface({
            element: this.domModel.querySelector('.group-main-button'),
            event: 'click',
            callback: this.toggleGroupMainSection.bind(globalGroupScope),
        })

        this.elements.addCurrentPositionButton = elementInterface({
            element: this.domModel.querySelector('.add-current-position-button'),
            event: 'click',
            callback: this.addCurrentPosition.bind(globalGroupScope),
        })

        this.elements.groupMainSection = elementInterface({
            element: this.domModel.querySelector('.group-main-section'),
        })

        this.elements.nameInput = elementInterface({
            element: this.domModel.querySelector('.name-input'),
        })

        this.elements.amountInput = elementInterface({
            element: this.domModel.querySelector('.amount-input'),
        })

        this.elements.colorInput = elementInterface({
            element: this.domModel.querySelector('.color-input'),
        })

        this.elements.sizeInput = elementInterface({
            element: this.domModel.querySelector('.size-input'),
        })

        this.elements.costPriceInput = elementInterface({
            element: this.domModel.querySelector('.cost-price-input'),
        })

        this.elements.sellPriceInput = elementInterface({
            element: this.domModel.querySelector('.sell-price-input'),
        })

        this.elements.resultSectionTable = elementInterface({
            element: this.domModel.querySelector('.result-section-table'),
        })
    }

    bindEventListeners() {
        Object.keys(this.elements).map(domElKey => this.elements[domElKey].element.addEventListener(this.elements[domElKey].event, this.elements[domElKey].callback))
    }

    unbindEventListeners() {
        Object.keys(this.elements).map(domElKey => this.elements[domElKey].element.removeEventListener(this.elements[domElKey].event, this.elements[domElKey].callback))
    }

    toggleGroupMainSection() {
        this.elements.groupMainSection.element.classList.toggle('hide')
    }

    addCurrentPosition() {
        const newGood = new Good({
            name: 'mame',
            color: 'red',
            size: 'xl',
            costPrice: 2345,
            sellPrice: 56787,
            dataFor: 'get rid of this key',
        }).create()

        this.elements.resultSectionTable.element.appendChild(newGood)
        this.elements.resultSectionTable.element.classList.toggle('hide')
    }

    create() {
        this.domModel = document.createElement('div')
        this.domModel.innerHTML = goodTpl({ groupName: this.name })
        this.bindElements()
        this.bindEventListeners()

        return this.domModel
    }

    destroy() {
        this.domModel.remove()
        this.domModel = null
        this.unbindEventListeners()
    }
}