import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["email", "submit"]

    connect() {
        this.submitTarget.addEventListener('click', async (e) => {
            e.preventDefault();

            if (this.emailTarget.value.trim().length > 0) {
                try {
                    const response = await fetch(`/api/users_by_emails?email=${this.emailTarget.value}`, {
                        method: 'GET',
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    Turbo.visit('/users/sign_in')
                } catch (error) {
                    Turbo.visit('/users/sign_up')
                }
            } else {
                console.warn("Bad");
            }
        });
    }
}