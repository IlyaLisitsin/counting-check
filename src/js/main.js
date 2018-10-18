import mdInit from 'js/mdInit'
import Group from 'group'
import Header from 'header'

(function () {
    new Header().create()

    const globalGroupCollection = JSON.parse(localStorage.getItem('countingCheck'))
    if (!globalGroupCollection) {
        localStorage.setItem('countingCheck', JSON.stringify({}))
    } else {
        Object.keys(globalGroupCollection).map(groupName => {
            const newGroupInstance = new Group(groupName)
            newGroupInstance.create(globalGroupCollection[groupName])

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
            })

            document.body.appendChild(newGroupInstance.groupDomModel)
        })
    }

    mdInit()

    fetch('/api/getUsername')
        .then(res => res.json())
        .then(user => console.log('USERNAME', user.username));
})()