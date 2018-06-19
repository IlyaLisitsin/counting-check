import { MDCTextField } from '@material/textfield'
import { MDCNotchedOutline } from '@material/notched-outline'

const mdInit = () => {
    const textFieldCollection = Array.from(document.querySelectorAll('.mdc-text-field'))
    textFieldCollection.map(el => new MDCTextField(el))

    const notchedOutlineCollection = Array.from(document.querySelectorAll('.mdc-notched-outline'))
    notchedOutlineCollection.map(el => new MDCNotchedOutline(el))
}

export default mdInit