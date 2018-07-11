import updateStorage from 'js/localStorageInstruments/updateStorage'

const removeGroupFormStorage = (idToDelete) => {
    const currentStorage = JSON.parse(localStorage.getItem('countingApp'))

    delete currentStorage[idToDelete.split('-group').join('')]
    updateStorage(currentStorage)
    console.log(localStorage)
}

export default removeGroupFormStorage