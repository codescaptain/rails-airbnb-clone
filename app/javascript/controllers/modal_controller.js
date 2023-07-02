import {Controller} from "@hotwired/stimulus"
import {toggle, enter, leave} from 'el-transition'

export default class extends Controller {
    connect() {
        document.getElementById('modal-wrapper').addEventListener('click', this.closeModal)
    }

    closeModal(event) {
        const isModalPanelClicked = document.getElementById('modal-panel').contains(event.target)
        if (!isModalPanelClicked) {
            leave(document.getElementById('modal-wrapper'))
        }
    }
}
