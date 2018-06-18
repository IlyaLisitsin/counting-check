const toggleAddUnitSection = (
    groupMainSection,
    groupMainButton,
    activeText,
    initialText,
) => {
    groupMainSection.classList.contains('hide') ?
        groupMainButton.innerHTML = activeText :
        groupMainButton.innerHTML = initialText
    groupMainSection.classList.toggle('hide')
}

export default toggleAddUnitSection