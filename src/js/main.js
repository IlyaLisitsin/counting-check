import mdInit from 'js/mdInit'
import Group from 'group'

(function () {
    const globalGroupCollection = JSON.parse(localStorage.getItem('countingCheck'))
    // console.log(32321, globalGroupCollection)
    if (!globalGroupCollection) {
        localStorage.setItem('countingCheck', JSON.stringify({}))
    } else {
        Object.keys(globalGroupCollection).map(groupName => {
            const newGroupInstance = new Group(groupName)
            newGroupInstance.create()
            console.log(newGroupInstance)
            console.log(globalGroupCollection)

            newGroupInstance.goodsMap = globalGroupCollection[groupName]

            // console.log(323, newGroupInstance)

            const currentGoodCollection = Object.keys(globalGroupCollection[groupName])
            currentGoodCollection.map(positionId => {
                const {
                    name,
                    color,
                    size,
                    costPrice,
                    sellPrice
                } = globalGroupCollection[groupName][positionId]


                newGroupInstance.addGood(
                    name,
                    color,
                    size,
                    costPrice,
                    sellPrice,
                    positionId
                )

                console.log(222, newGroupInstance)
            })

            document.body.appendChild(newGroupInstance.groupDomModel)

        })
    }
    mdInit()
})()