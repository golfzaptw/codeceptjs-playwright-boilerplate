const { pages, I } = inject()

class HomePageStep {
    /**
     * Go to home page on desktop
     */
    goToHomePage() {
        pages.homePage.goToHomePage()
        I.say('Desktop mode')
    }
}

class HomePageStepMobile extends HomePageStep {
    /**
     * Go to home page on desktop
     */
    goToHomePage() {
        pages.homePage.goToHomePage()
        I.say('Mobile mode')
    }
}

module.exports.HomePageStep = new HomePageStep()
module.exports.HomePageStepMobile = new HomePageStepMobile()
