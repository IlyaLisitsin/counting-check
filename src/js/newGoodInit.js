import editCurrentLine from 'event-listeners/editCurrentLine'

const newGoodInit = () => {
    const editButtonCollection = document.querySelectorAll('.edit-line-button')

    Array.from(editButtonCollection).map((el, index) => el.addEventListener('click', (event) => editCurrentLine(index, event)))
}

export default newGoodInit