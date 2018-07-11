import removeGroupFormStorage from 'js/localStorageInstruments/removeGroupFormStorage'
import variables from 'variables'

const {
    mainSection,
} = variables

const deleteCurrentGroup = (groupToDelete) => {
    removeGroupFormStorage(groupToDelete.getAttribute('id'))
    mainSection.removeChild(groupToDelete)
}

export default deleteCurrentGroup