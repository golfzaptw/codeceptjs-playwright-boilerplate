class ApiUtils {
    /**
     * This function will check status code equal 200 and return some message (If that you need)
     * @param {number} statusCode is a status that you need to check equal 200
     * @param {number} expectedStatusCode (default = 200) is a status that you excepted
     * @param {string} message (default = null) is a message that you need to show if status equal 200
     * @param {string} messageColor (default = green) is a message color
     *
     * ```js
     * // example
     * statusCodeShouldBe(response.status, 401)
     * // or
     * statusCodeShouldBe(response.status, 401, 'Your status equal 401', 'blue')
     * ```
     */
    statusCodeShouldBe({
        statusCode,
        expectedStatusCode = 200,
        message = null,
        messageColor = 'green',
    }) {
        if (statusCode !== expectedStatusCode) {
            throw new Error(`${statusCode} is not equal ${expectedStatusCode}`)
        }
        message && I.say(message, messageColor)
    }
}

module.exports = new ApiUtils()
