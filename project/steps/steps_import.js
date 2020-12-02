const { config } = inject()

const importHomePage = require('./home_page_step')

const homePageStep = config.isMobile
    ? importHomePage.HomePageStepMobile
    : importHomePage.HomePageStep

module.exports = {
    homePageStep,
}
