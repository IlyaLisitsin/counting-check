import headerTpl from './header.tpl'
import Group from 'js/group'

export default class Header {
    constructor() {
        this.headerDomModel = null
        this.elementsMap = {}
    }

    bindElements() {
        const globalHeaderScope = this

        this.elementsMap.addGroupButton = {
            element: this.headerDomModel.querySelector('#add-group-button'),
            event: 'click',
            callback: this.toggleInputBlockView.bind(globalHeaderScope),
        }

        this.elementsMap.newGroupConfirmButton = {
            element: this.headerDomModel.querySelector('#new-group-confirm-button'),
            event: 'click',
            callback: this.newGroup.bind(globalHeaderScope),
        }

        this.elementsMap.addGroupInput = {
            element: this.headerDomModel.querySelector('#new-group-name-input'),
        }

        this.elementsMap.addGroupInputBlock = {
            element: this.headerDomModel.querySelector('.add-group-input-block'),
        }
    }

    bindEventListeners() {
        Object.keys(this.elementsMap).map(domElKey => this.elementsMap[domElKey].element
            .addEventListener(this.elementsMap[domElKey].event, this.elementsMap[domElKey].callback))
    }

    toggleInputBlockView() {
        this.elementsMap.addGroupInputBlock.element.classList.toggle('hide')
    }

    newGroup() {
        let newGroupValue = this.elementsMap.addGroupInput.element.value
        document.body.appendChild(new Group(newGroupValue).create())
        newGroupValue = ''
    }

    create() {
        this.headerDomModel = document.createElement('div')
        this.headerDomModel.innerHTML = headerTpl()
        this.bindElements()
        this.bindEventListeners()

        document.querySelector('header').appendChild(this.headerDomModel)
    }
}