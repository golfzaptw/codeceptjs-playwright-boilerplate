require('dotenv').config()
const { setHeadlessWhen } = require('@codeceptjs/configure')
const config = require('./resources/config')
const testData = require(`./resources/test_data/${process.env.TEST_ENV}/test_data`)
const { devices } = require('playwright')
// https://github.com/Microsoft/playwright/blob/master/src/deviceDescriptors.ts

const isHeadless = process.env.HEADLESS === 'true'

const browser = config.browser
const isMobile = config.isMobile
const mobileDevice = config.mobileDevice

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(isHeadless)

let playwrightConfig = {
    url: testData.homePageURL,
    show: !isHeadless,
    restart: true,
    basicAuth: {
        username: process.env.USERNAME_HOST,
        password: process.env.PASSWORD_HOST,
    },
    waitForNavigation: 'networkidle0',
    waitForTimeout: 30000,
    getPageTimeout: 60000,
    waitForAction: 500,
}

const mobileConfig = {
    emulate: devices[mobileDevice],
}

const webConfig = {
    windowSize: `${process.env.WINDOWS_WIDTH}x${process.env.WINDOWS_HEIGHT}`,
}

if (isMobile) {
    switch (browser) {
        case 'chromium':
            playwrightConfig = {
                ...mobileConfig,
                ...playwrightConfig,
                browser: 'chromium',
                chromium: {
                    headless: isHeadless,
                    args: [
                        '--no-sandbox',
                        '--disable-dev-shm-usage',
                        '--disable-setuid-sandbox',
                    ],
                },
            }
            break
        case 'webkit':
            playwrightConfig = {
                ...mobileConfig,
                ...playwrightConfig,
                browser: 'webkit',
            }
            break
        default:
            throw new Error(
                'Please setting up environtment BROWSER to webkit or chromium',
            )
    }
} else {
    switch (browser) {
        case 'chromium':
            playwrightConfig = {
                ...webConfig,
                ...playwrightConfig,
                browser: 'chromium',
                chromium: {
                    headless: isHeadless,
                    args: [
                        `--window-size=${process.env.WINDOWS_WIDTH},${process.env.WINDOWS_HEIGHT}`,
                        '--no-sandbox',
                        '--disable-dev-shm-usage',
                        '--disable-setuid-sandbox',
                    ],
                },
            }
            break
        case 'webkit':
            playwrightConfig = {
                ...webConfig,
                ...playwrightConfig,
                browser: 'webkit',
            }
            break
        default:
            throw new Error(
                'Please setting up environtment BROWSER to webkit or chromium',
            )
    }
}

exports.config = {
    tests: './tests/**/*_test.js',
    output: './codecept_output',
    helpers: {
        Playwright: playwrightConfig,
        CustomCommands: {
            require: './helpers/custom_commands_helper.js',
        },
        PlaywrightBrowser: {
            require: './helpers/playwright_browser_helper.js',
        },
        ChaiWrapper: {
            require: './node_modules/codeceptjs-chai',
        },
    },
    include: {
        config: './resources/config.js',
        I: './steps_file.js',
        pages: './pages/pages_import.js',
        steps: './steps/steps_import.js',
        api: './api/index.js',
        translate: `./resources/translation/${process.env.SITE_LANGUAGE}`,
        testData: `./resources/test_data/${process.env.TEST_ENV}/test_data.js`,
    },
    plugins: {
        allure: {
            enabled: true,
            outputDir: './output',
        },
        autoDelay: {
            enabled: true,
            delayBefore: 1000,
        },
        retryFailedStep: {
            enabled: true,
            defaultIgnoredSteps: [],
            ignoredSteps: [
                'amOnPage',
                'send*',
                'execute*',
                'run*',
                'assert*',
                'waitFor*',
                'waitEmail*',
            ],
            minTimeout: 5000,
        },
        screenshotOnFail: {
            enabled: true,
        },
        customLocator: {
            enabled: true,
            showActual: true,
            // prefix: '$',
            // strategy: 'css',
            attribute: 'data-testid',
        },
    },
    mocha: {},
    name: 'boilerplate',
}
