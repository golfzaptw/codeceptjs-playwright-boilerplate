const { I } = inject()

class HomePage {
    /**
     * Go to home page
     */
    goToHomePage() {
        I.amOnPage('/')
    }
}

module.exports = new HomePage()
