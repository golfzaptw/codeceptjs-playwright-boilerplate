Feature('Home Page')
const { steps } = inject()
Scenario('Test Home Page', () => {
    steps.homePageStep.goToHomePage()
})
