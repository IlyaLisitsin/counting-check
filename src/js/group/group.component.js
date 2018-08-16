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
            callback: this.kek,
        })

        // console.log(324, this.elements)
    }

    kek() {  console.log('you\'ve just clicked this delete nigga!') }

    bindEventListeners() {
        //
        // for (let domElKey in this.elements) {
        //     console.log(this.elements[domElKey].element)
        //     console.log(this.elements[domElKey].event)
        //     console.log(this.elements[domElKey].callback)
        //     this.elements[domElKey].element.addEventListener(domElKey.event, this.kek)
        // }

        this.elements.deleteButton.element.addEventListener('click', this.kek)
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