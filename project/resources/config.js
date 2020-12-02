const timeout = {
    general: 30,
}

const browser = process.env.BROWSER ? process.env.BROWSER : 'chromium'

const isMobile = process.env.MOBILE === 'true'

const mobileDevice = process.env.MOBILE_DEVICE
    ? process.env.MOBILE_DEVICE
    : 'iPhone 8 Plus'

module.exports = {
    timeout,
    isMobile,
    mobileDevice,
    browser,
}
