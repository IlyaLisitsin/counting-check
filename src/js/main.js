import addGroupListenersInit from 'event-listeners/addGroup'
import mdInit from 'js/mdInit'
import Group from 'group'

(function () {
    document.body.appendChild(new Group('rara').create())
    mdInit()
})()