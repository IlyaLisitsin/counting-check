import Good from 'good'
import groupTpl from './group.tpl'

export default class Group {
    constructor(name) {
        this.name = name

        this.groupDomModel = null
        this.elementsMap = {}
        this.goodsMap = {}
        this.edittingLineId = ''
    }

    bindElements() {
        this.elementsMap.deleteButton = {
            element: this.groupDomModel.querySelector('.group-delete-button'),
            event: 'click',
            callback: this.destroy.bind(this),
        }

        this.elementsMap.groupMainButton = {
            element: this.groupDomModel.querySelector('.group-main-button'),
            event: 'click',
            callback: this.toggleGroupMainSection.bind(this),
        }

        this.elementsMap.addCurrentPositionButton = {
            element: this.groupDomModel.querySelector('.add-current-position-button'),
            event: 'click',
            callback: this.addCurrentPosition.bind(this),
        }

        this.elementsMap.editCurrentPositionButton = {
            element: this.groupDomModel.querySelector('.edit-current-position-button'),
            event: 'click',
            callback: this.editCurrentPosition.bind(this),
        }

        this.elementsMap.groupTable = {
            element: this.groupDomModel.querySelector('table'),
        }

        this.elementsMap.groupMainSection = {
            element: this.groupDomModel.querySelector('.group-main-section'),
        }

        this.elementsMap.nameInput = {
            element: this.groupDomModel.querySelector('.name-input'),
        }

        this.elementsMap.amountInput = {
            element: this.groupDomModel.querySelector('.amount-input'),
        }

        this.elementsMap.colorInput = {
            element: this.groupDomModel.querySelector('.color-input'),
        }

        this.elementsMap.sizeInput = {
            element: this.groupDomModel.querySelector('.size-input'),
        }

        this.elementsMap.costPriceInput = {
            element: this.groupDomModel.querySelector('.cost-price-input'),
        }

        this.elementsMap.sellPriceInput = {
            element: this.groupDomModel.querySelector('.sell-price-input'),
        }

        this.elementsMap.editNameInput = {
            element: this.groupDomModel.querySelector('.edit-name-input'),
        }

        this.elementsMap.editColorInput = {
            element: this.groupDomModel.querySelector('.edit-color-input'),
        }

        this.elementsMap.editSizeInput = {
            element: this.groupDomModel.querySelector('.edit-size-input'),
        }

        this.elementsMap.editCostPriceInput = {
            element: this.groupDomModel.querySelector('.edit-cost-price-input'),
        }

        this.elementsMap.editSellPriceInput = {
            element: this.groupDomModel.querySelector('.edit-sell-price-input'),
        }

        this.elementsMap.resultSectionTable = {
            element: this.groupDomModel.querySelector('.result-section-table'),
        }

        this.elementsMap.groupAddPanel = {
            element: this.groupDomModel.querySelector('.group-add-panel'),
        }

        this.elementsMap.groupEditPanel = {
            element: this.groupDomModel.querySelector('.group-edit-panel'),
        }
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

        this.elementsMap.nameInput.element.value = ''
        this.elementsMap.colorInput.element.value = ''
        this.elementsMap.sizeInput.element.value = ''
        this.elementsMap.amountInput.element.value = ''
        this.elementsMap.costPriceInput.element.value = ''
        this.elementsMap.sellPriceInput.element.value = ''
    }

    editButtonClick(edittingLineId) {
        this.edittingLineId = edittingLineId
        this.elementsMap.groupAddPanel.element.classList.add('hide')
        this.elementsMap.groupEditPanel.element.classList.remove('hide')

        this.elementsMap.groupTable.element.classList.add('editting-table')
    }

    editCurrentPosition() {
        this.goodsMap[this.edittingLineId].updateCurrentPositionValues({
            newName: this.elementsMap.editNameInput.element.value,
            newColor: this.elementsMap.editColorInput.element.value,
            newSize: this.elementsMap.editSizeInput.element.value,
            newCostPrice: this.elementsMap.editCostPriceInput.element.value,
            newSellPrice: this.elementsMap.editSellPriceInput.element.value,
        })

        this.elementsMap.groupAddPanel.element.classList.remove('hide')
        this.elementsMap.groupEditPanel.element.classList.add('hide')

        this.elementsMap.editNameInput.element.value = ''
        this.elementsMap.editColorInput.element.value = ''
        this.elementsMap.editSizeInput.element.value = ''
        this.elementsMap.editCostPriceInput.element.value = ''
        this.elementsMap.editSellPriceInput.element.value = ''

        this.elementsMap.groupTable.element.classList.remove('editting-table')
    }

    idGenerator() {
        const S4 = () =>(((1+Math.random())*0x10000)|0).toString(16).substring(1)
        return `_${S4()+S4()}`
    }

    addGood() {
        const newGoodId = this.idGenerator()
        const newGood = new Good({
            name: this.elementsMap.nameInput.element.value,
            color: this.elementsMap.colorInput.element.value,
            size: this.elementsMap.sizeInput.element.value,
            costPrice: this.elementsMap.costPriceInput.element.value,
            sellPrice: this.elementsMap.sellPriceInput.element.value,
            id: newGoodId,
            editButtonClick: this.editButtonClick.bind(this),
        }).create()

        this.goodsMap[newGoodId] = newGood

        this.elementsMap.resultSectionTable.element.appendChild(newGood.goodDomModel)
        this.elementsMap.resultSectionTable.element.classList.remove('hide')
    }

    create() {
        this.groupDomModel = document.createElement('div')
        this.groupDomModel.innerHTML = groupTpl({ groupName: this.name })
        this.bindElements()
        this.bindEventListeners()

        return this.groupDomModel
    }

    destroy() {
        this.groupDomModel.remove()
        this.groupDomModel = null
        this.unbindEventListeners()
    }
}