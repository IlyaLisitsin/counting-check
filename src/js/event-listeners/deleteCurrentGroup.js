import variables from '../variables'

const {
    mainSection,
} = variables

const deleteCurrentGroup = (groupToDelete) => mainSection.removeChild(groupToDelete)

export default deleteCurrentGroup