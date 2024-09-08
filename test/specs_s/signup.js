
describe("Test Suites", () => {
    //METHODS
    // Function to start the app
    async function initializeApp() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }
    // Function to check sucessful login
    async function performSuccessfulSignup(firstName, middleName, lastName, email, phoneNumber, password, confirmPassword) {
        const popup = await $('~Later');
        await popup.click();

        const firstName = await $('//android.widget.EditText[@index=3]')
        await firstName.click()
        await firstName.addValue(firstName)

        const middleName = await $('//android.widget.EditText[@index=4]')
        await middleName.click()
        await middleName.addValue(middleName)

        const lastName = await $('//android.widget.EditText[@index=5]')
        await lastName.click()
        await lastName.addValue(lastName)

        const email = await $('//android.widget.EditText[@index=6]')
        await email.click()
        await email.addValue(email)

        const phoneNumber = await $('//android.widget.EditText[@index=1]')
        await phoneNumber.click()
        await phoneNumber.addValue(phoneNumber)

        const password = await $('//android.widget.EditText[@index=8]')
        await password.click()
        await password.addValue(password)

        const confirmPassword = await $('//android.widget.EditText[@index=9]')
        await confirmPassword.click()
        await confirmPassword.addValue(confirmPassword);

        await driver.hideKeyboard()
        const register = await $('//android.view.View[@index=11]')
        await register.click();

        const popupOnDashboard = await $('~Later');
        await popupOnDashboard.click();
    }
    async function performLogout() {
        const logOut = await $('~Log out');
        await logOut.click();
        await browser.pause(1000);
        const logOutButton = await $('~Log out');
        await logOutButton.click();
    }

    it("Signup with correct username and password", async () => {
        await initializeApp()
        const signup = await $('~Sign Up')
        await performSuccessfulSignup('Odinaka', 'Kelly', 'Odinkemma', 'ejikeo1111@gigbanc.co', 'Ejike123@', 'Ejike123@');
        await performLogout()

    })
})