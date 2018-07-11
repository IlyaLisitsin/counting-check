import newGroupInit from 'js/newGroupInit'
import initialGroupBlockGenerator from 'dom-generators/initialGroupBlockGenerator'
import addGroupToStorage from 'js/localStorageInstruments/addGroupToStorage'
import variables from 'variables'

const {
    addGroupInputBlock,
    addGroupButton,
    mainSection,
    newGroupConfirmButton,
    newGroupNameInput,
    currentStorage,
} = variables

const toggleAddSection = () => {
    addGroupInputBlock.classList.toggle('hide')
    addGroupButton.classList.toggle('hide')
}

const newGroupConfirmButtonHandler = () => {
    const newGroupName = newGroupNameInput.value

    if (document.querySelector(`#${newGroupName}-group`)) {
        alert('This group is already exists!\n Please type new group')
        return
    }

    mainSection.innerHTML += initialGroupBlockGenerator(newGroupName)
    newGroupNameInput.value = ''

    addGroupToStorage(newGroupName)

    newGroupInit()
    toggleAddSection()
}

const addGroupListenersInit = () => {
    addGroupButton.addEventListener('click', toggleAddSection)
    newGroupConfirmButton.addEventListener('click', newGroupConfirmButtonHandler)
}

export default addGroupListenersInit