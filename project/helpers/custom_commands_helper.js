const Helper = require('@codeceptjs/helper')

class CustomCommands extends Helper {
    /**
     * This function will wait for element is visible and return `true` or `false`
     * @param {object} locator element located by CSS|XPath
     * @param {number} timeout default by 30 sec
     * @returns {Boolean} `true` or `false`
     */
    async waitAndReturnLocatorIsVisible(locator, timeout = 30) {
        const helper = this.helpers.Playwright
        try {
            await helper.wait(5)
            await helper.waitForElement(locator, timeout)
            return true
        } catch (e) {}
        return false
    }

    /**
     * Retrieves a text from an element located by CSS or XPath and returns it to test.
     * ```js
     * // simple css
     * const productName = await I.seeAndGrabTextFromAll({css: '#productName'})
     * // simple xpath
     * const productName = await I.seeAndGrabTextFromAll({xpath: '//*[@id="productName"]'})
     * ```
     * @param locator element located by CSS|XPath|strict locator.
     * @param {number} timeout default by 30 sec
     * @returns attribute value (If multiple elements found returns an array of texts.)
     */
    async seeAndGrabTextFromAll(locator, timeout = 30) {
        const helper = this.helpers.Playwright
        await helper.waitForElement(locator, timeout)
        const text = await helper.grabTextFromAll(locator)
        return text
    }

    /**
     * Retrieves a text from an element located by CSS or XPath and returns it to test.
     * ```js
     * // simple css
     * const productName = await I.seeAndGrabAttributeFrom({css: '#productName'}, 'href')
     * // simple xpath
     * const productName = await I.seeAndGrabAttributeFrom({xpath: '//*[@id="productName"]'}, 'href')
     * ```
     * @param locator element located by CSS|XPath|strict locator.
     * @param keyword key attribute to get the value from
     * @param {number} timeout default by 30 sec
     * @returns attribute value (If multiple elements found returns an array of texts.)
     */
    async seeAndGrabAttributeFrom(locator, keyword, timeout = 30) {
        const helper = this.helpers.Playwright
        await helper.waitForElement(locator, timeout)
        const text = await helper.grabAttributeFromAll(locator, keyword)
        return text
    }

    /**
     * Clears a <textarea> or text <input> element's value and fill value
     * ```js
     * // simple css
     * await I.clearAndFillField({css: '#txtFirstname'}, 'Simple')
     * // simple xpath
     * await I.clearAndFillField({xpath: '//*[@id="txtFirstname"]'}, 'Simple')
     * ```
     * @param locator located by CSS|XPath|strict locator.
     */
    async clearAndFillField(locator, value) {
        const helper = this.helpers.Playwright
        await helper.clearField(locator)
        await helper.fillField(locator, value)
    }

    /**
     * Checks that a given Element is visible Element is located by CSS or XPath and click
     * * `Note` can force click by `I.seeAndClickElement(locator, value, true) or I.seeAndClickElement(locator, null, true)`
     * ```js
     * // simple css
     * await I.seeAndClickElement({css: '#login'})
     * // simple xpath
     * await I.seeAndClickElement({xpath: '//*[@id="login"]'})
     * // simple locator and value
     * await I.seeAndClickElement({css: '#login'}, 'Login')
     * ```
     * @param {CodeceptJS.LocatorOrString} locator located by CSS|XPath|strict locator.
     * @param {string} value — (optional, null by default) value of element.
     * @param {boolean} forceClick - (optional, false by default)
     * @param {number} timeout default by 30 sec
     */
    async seeAndClickElement({
        locator,
        value = null,
        forceClick = false,
        timeout = 30,
    }) {
        const helper = this.helpers.Playwright
        await helper.waitForElement(locator, timeout)
        switch (forceClick) {
            case true:
                if (typeof value === 'string') {
                    await helper.forceClick(value, locator)
                } else {
                    await helper.forceClick(locator)
                }
                break
            default:
                if (typeof value === 'string') {
                    await helper.click(value, locator)
                } else {
                    await helper.click(locator)
                }
                break
        }
    }
}

module.exports = CustomCommands
