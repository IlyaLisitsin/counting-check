(function() {

    const toggleAddSection = () => {
        addGroupInputBlock.classList.toggle('hide')
        addGroupButton.classList.toggle('hide')
    }

    const newGroupConfirmButtonHandler = () => {
        const newGroupName = newGroupNameInput.value

        if (document.querySelector(`#${newGroupName}-group`)) {
            alert('This group is already exists!\n Please type new group')
            return
        }

        mainSection.innerHTML += initialGroupBlockGenerator(newGroupName)
        newGroupInit(newGroupName)
        toggleAddSection()
    }


    addGroupButton.addEventListener('click', toggleAddSection)
    newGroupConfirmButton.addEventListener('click', newGroupConfirmButtonHandler)
})()