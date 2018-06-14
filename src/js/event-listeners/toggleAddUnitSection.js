import variables from 'variables'

const {
    unitButtonActiveText,
    unitButtonInitialText,
} = variables

const toggleAddUnitSection = (index, addSectionCollection, addUnitButtonCollection) => {
    Array.from(addSectionCollection)[index].classList.contains('hide') ?
        Array.from(addUnitButtonCollection)[index].innerHTML = unitButtonActiveText :
        Array.from(addUnitButtonCollection)[index].innerHTML = unitButtonInitialText
    Array.from(addSectionCollection)[index].classList.toggle('hide')
}

export default toggleAddUnitSection