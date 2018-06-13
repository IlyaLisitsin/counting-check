import newGroupInit from './newGroupInit'
import variables from './variables'
import helperFunctions from './helperFunctions'

const {
    initialGroupBlockGenerator,
} = helperFunctions

const {
    addGroupInputBlock,
    addGroupButton,
    mainSection,
    newGroupConfirmButton,
    newGroupNameInput
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

    newGroupInit()
    toggleAddSection()
}

const addGroupListenersInit = () => {
    addGroupButton.addEventListener('click', toggleAddSection)
    newGroupConfirmButton.addEventListener('click', newGroupConfirmButtonHandler)
}

export default addGroupListenersInit