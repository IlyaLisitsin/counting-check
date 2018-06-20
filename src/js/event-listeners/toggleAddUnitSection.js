const toggleAddUnitSection = (
    groupMainSection,
    groupMainButton,
    groupMainIcon,
    activeText,
    initialText,
    activeIcon,
    initialIcon,
) => {

    const currentButtonText = groupMainButton.childNodes[0]

    if (groupMainSection.classList.contains('hide')) {
        currentButtonText.textContent = activeText
        groupMainIcon.innerHTML = initialIcon
    } else {
        currentButtonText.textContent = initialText
        groupMainIcon.innerHTML = activeIcon
    }

    groupMainSection.classList.toggle('hide')

}

export default toggleAddUnitSection