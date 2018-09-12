import mdInit from 'js/mdInit'
import Group from 'group'

(function () {
    const globalGroupCollection = JSON.parse(localStorage.getItem('countingCheck'))
    if (!globalGroupCollection) {
        localStorage.setItem('countingCheck', JSON.stringify({}))
    } else {
        Object.keys(globalGroupCollection).map(groupName => {
            const newGroupInstance = new Group(groupName)
            newGroupInstance.create()
            console.log(newGroupInstance)

            const currentGoodCollection = Object.keys(globalGroupCollection[groupName])
            currentGoodCollection.map(positionId => {
                const {
                    name,
                    color,
                    size,
                    costPrice,
                    sellPrice
                } = globalGroupCollection[groupName][positionId]

                // newGroupInstance.addCurrentPosition()

            })
        })
    }
    document.body.appendChild(new Group('rara').create())
    mdInit()
})()