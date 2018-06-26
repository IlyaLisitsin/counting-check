import { MDCTextField } from '@material/textfield'
import { MDCNotchedOutline } from '@material/notched-outline'
import { MDCSelect } from '@material/select'

export function mdTextFieldInit () {
    const textFieldCollection = Array.from(document.querySelectorAll('.mdc-text-field'))
    textFieldCollection.map(el => new MDCTextField(el))
}

export function mdNotchedOutlineInit () {
    const notchedOutlineCollection = Array.from(document.querySelectorAll('.mdc-notched-outline'))
    notchedOutlineCollection.map(el => new MDCNotchedOutline(el))
}

export function mdSelectInit () {
    const selectCollection = Array.from(document.querySelectorAll('.mdc-select'))
    selectCollection.map(el => new MDCSelect(el))
}

const mdInit = () => {
    mdTextFieldInit()
    mdNotchedOutlineInit()
    mdSelectInit()
}

export default mdInit