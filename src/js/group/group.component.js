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

        // this.elements.mainButton = this.domModel.querySelector('.group-main-button')
        this.elements.deleteButton = elementInterface({
            element: this.domModel.querySelector('.group-delete-button'),
            event: 'click',
            callback: this.destroy.bind(globalGroupScope),
        })
    }

    bindEventListeners() {
        Object.keys(this.elements).map(domElKey => this.elements[domElKey].element.addEventListener(this.elements[domElKey].event, this.elements[domElKey].callback))
    }

    unbindEventListeners() {
        Object.keys(this.elements).map(domElKey => this.elements[domElKey].element.removeEventListener(this.elements[domElKey].event, this.elements[domElKey].callback))
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