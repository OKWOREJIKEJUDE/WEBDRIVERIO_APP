
describe("Test Suites", () => {
    //METHODS
    // Function to start the app
    async function initializeApp() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }
    async function performLogin(usernameValue, passwordValue) {
        // const popup = await $('~Later');
        // await popup.click();
        const username = await $('//android.widget.EditText[@index=2]');
        await username.click();
        await username.addValue(usernameValue);

        const password = await $('//android.widget.EditText[@index=3]');
        await password.click();
        await password.addValue(passwordValue);

        await driver.hideKeyboard();
        const loginButton = await $('//android.view.View[@index=5]');
        await loginButton.click();

        // const popupOnDashboard = await $('~Later');
        // await popupOnDashboard.click();
    }
    async function performLogout() {
        const logOut = await $('~Log out')
        await logOut.click();
        await browser.pause(1000);
        const logOutButton = await $('~Log out');
        await logOutButton.click();
    }


    it("Card Funding", async () => {
        await initializeApp()
        await performLogin('maddam', 'Required@123')
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(5000)
        const card = await $('android.widget.ImageView')
        await card.click()
        //await scrolToTheLeft()
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollForward()')
        const fundCard = await $('~Fund card')
        fundCard.click()
        const enterAmount = await $('//android.widget.EditText')
        await enterAmount.click()
        await enterAmount.addValue(1)
        const continueButton = await $('~Continue')
        await continueButton.click()
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
        await performLogout()
        //const signup = await $('~Sign Up')

    })
})