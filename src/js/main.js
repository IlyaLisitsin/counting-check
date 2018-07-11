import addGroupListenersInit from 'event-listeners/addGroup'
import generateFromLocalStorage from "js/localStorageInstruments/getFromLocalStorage"
import mdInit from 'js/mdInit'

(function () {
    if (!JSON.parse(localStorage.getItem('countingApp'))) localStorage.setItem('countingApp', JSON.stringify({}))
    mdInit()
    generateFromLocalStorage()
    addGroupListenersInit()
})()