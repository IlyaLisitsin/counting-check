import Good from 'good'
import goodTpl from './group.tpl'

const elementInterface = ({ element, event, callback }) => {
    return { element, event, callback }
}


export default class Group {
    constructor(name) {
        this.name = name

        this.domModel = null
        this.elementsMap = {}
    }

    bindElements() {
        const globalGroupScope = this

        this.elementsMap.deleteButton = elementInterface({
            element: this.domModel.querySelector('.group-delete-button'),
            event: 'click',
            callback: this.destroy.bind(globalGroupScope),
        })

        this.elementsMap.groupMainButton = elementInterface({
            element: this.domModel.querySelector('.group-main-button'),
            event: 'click',
            callback: this.toggleGroupMainSection.bind(globalGroupScope),
        })

        this.elementsMap.addCurrentPositionButton = elementInterface({
            element: this.domModel.querySelector('.add-current-position-button'),
            event: 'click',
            callback: this.addCurrentPosition.bind(globalGroupScope),
        })

        this.elementsMap.groupMainSection = elementInterface({
            element: this.domModel.querySelector('.group-main-section'),
        })

        this.elementsMap.nameInput = elementInterface({
            element: this.domModel.querySelector('.name-input'),
        })

        this.elementsMap.amountInput = elementInterface({
            element: this.domModel.querySelector('.amount-input'),
        })

        this.elementsMap.colorInput = elementInterface({
            element: this.domModel.querySelector('.color-input'),
        })

        this.elementsMap.sizeInput = elementInterface({
            element: this.domModel.querySelector('.size-input'),
        })

        this.elementsMap.costPriceInput = elementInterface({
            element: this.domModel.querySelector('.cost-price-input'),
        })

        this.elementsMap.sellPriceInput = elementInterface({
            element: this.domModel.querySelector('.sell-price-input'),
        })

        this.elementsMap.resultSectionTable = elementInterface({
            element: this.domModel.querySelector('.result-section-table'),
        })

        this.elementsMap.groupAddPanel = elementInterface({
            element: this.domModel.querySelector('.group-add-panel'),
        })

        this.elementsMap.groupEditPanel = elementInterface({
            element: this.domModel.querySelector('.group-edit-panel'),
        })
    }

    bindEventListeners() {
        Object.keys(this.elementsMap).map(domElKey => this.elementsMap[domElKey].element.addEventListener(this.elementsMap[domElKey].event, this.elementsMap[domElKey].callback))
    }

    unbindEventListeners() {
        Object.keys(this.elementsMap).map(domElKey => this.elementsMap[domElKey].element.removeEventListener(this.elementsMap[domElKey].event, this.elementsMap[domElKey].callback))
    }

    toggleGroupMainSection() {
        this.elementsMap.groupMainSection.element.classList.toggle('hide')
    }

    addCurrentPosition() {
        let interations = this.elementsMap.amountInput.element.value
        while (interations) {
            this.addGood()
            interations--
        }
    }

    editButtonClick() {
        this.elementsMap.groupAddPanel.element.classList.add('hide')
        this.elementsMap.groupEditPanel.element.classList.remove('hide')
    }

    addGood() {
        const newGood = new Good({
            name: this.elementsMap.nameInput.element.value,
            color: this.elementsMap.colorInput.element.value,
            size: this.elementsMap.sizeInput.element.value,
            costPrice: this.elementsMap.costPriceInput.element.value,
            sellPrice: this.elementsMap.sellPriceInput.element.value,
            dataFor: 'get rid of this key',
            editButtonClick: this.editButtonClick.bind(this),
        }).create()

        this.elementsMap.resultSectionTable.element.appendChild(newGood)
        this.elementsMap.resultSectionTable.element.classList.remove('hide')
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