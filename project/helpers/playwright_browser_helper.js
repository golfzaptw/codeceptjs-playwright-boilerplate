const Helper = require('@codeceptjs/helper')

class PlaywrightBrowser extends Helper {
    /**
     * Auto clear isAuthenticated to false after browser is closed
     */
    _after() {
        const { Playwright } = this.helpers
        if (Playwright.options.restart) {
            Playwright.isAuthenticated = false
        }
    }
}

module.exports = PlaywrightBrowser
