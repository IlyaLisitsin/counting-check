import initialGroupBlockGenerator from 'js/dom-generators/initialGroupBlockGenerator'
import newGroupInit from 'js/newGroupInit'
import variables from 'variables'

const {
    mainSection,
} = variables

const generateFromLocalStorage = () => {
    const currentStorage = JSON.parse(localStorage.getItem('countingApp'))

    for (let key in currentStorage) {
        mainSection.innerHTML += initialGroupBlockGenerator(key)
    }

    newGroupInit()
}

export default generateFromLocalStorage