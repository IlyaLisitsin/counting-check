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
        // this.elements.input = this.domModel.querySelector('input')
        // this.elements.mainButton = this.domModel.querySelector('.group-main-button')
        this.elements.deleteButton = elementInterface({
            element: this.domModel.querySelector('.group-delete-button'),
            event: 'click',
            callback: this.destroy,
        })
    }

    bindEventListeners() {
        for (let domElKey in this.elements) {
            this.elements[domElKey].element.addEventListener(this.elements[domElKey].event, this.elements[domElKey].callback)
        }
    }

    unbindEventListeners() {
        this.elements.map(el => el.removeEventListener('click'))
    }

    create() {
        this.domModel = document.createElement('div')
        this.domModel.innerHTML = goodTpl({ groupName: this.name })
        this.bindElements()
        this.bindEventListeners()

        console.log('creatin', this.domModel)

        return this.domModel
    }

    destroy() {
        console.log('destroin', this.domModel)
        this.domModel.remove()
        this.domModel = null
    }
}