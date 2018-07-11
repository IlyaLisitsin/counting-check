import updateStorage from 'js/localStorageInstruments/updateStorage'
import variables from 'variables'

const {
    currentStorage,
} = variables

const addGroupToStorage = (groupName) => {
    const currentStorage = JSON.parse(localStorage.getItem('countingApp'))

    updateStorage({ ...currentStorage, [groupName]: [] })
    console.log(localStorage)
}

export default addGroupToStorage