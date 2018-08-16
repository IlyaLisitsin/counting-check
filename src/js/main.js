import addGroupListenersInit from 'event-listeners/addGroup'
import mdInit from 'js/mdInit'
import Group from 'group'

(function () {
    mdInit()
    // addGroupListenersInit()

    document.body.appendChild(new Group('rara').create())
})()