import {Controller} from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {

    static targets = ["openUserMenu", "userAuthLink"]

    connect() {
        this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)
        this.userAuthLinkTargets.forEach(link => {
            link.addEventListener('click', () => {
                enter(document.getElementById('modal-wrapper'))
            })
        })
    }

    toggleDropdownMenu() {
        toggle(document.getElementById("menu-dropdown-items"))
    }
}
