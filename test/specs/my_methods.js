
module.exports = MyMethods;
class MyMethods {

    //METHODS
    async initializeApp() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }
    // Helper function to perform logout
    async performLogout() {
        const logOut = await $('~Log out');
        await logOut.click();
        await browser.pause(1000);

        const logOutButton = await $('~Log out');
        await logOutButton.click();
    }

    // Helper function to sucessful perform login
    async performSuccessfulLogin(usernameValue, passwordValue) {
        const popup = await $('~Later');
        await popup.click();

        const username = await $('//android.widget.EditText[@index=2]');
        await username.click();
        await username.addValue(usernameValue);

        const password = await $('//android.widget.EditText[@index=3]');
        await password.click();
        await password.addValue(passwordValue);

        await driver.hideKeyboard();
        const loginButton = await $('//android.view.View[@index=5]');
        await loginButton.click();

        const popupOnDashboard = await $('~Later');
        await popupOnDashboard.click();
    }

    //clear fields
    async clearFields() {
        const username = await $('//android.widget.EditText[@index=2]')
        await username.setValue('')
        const password = await $('//android.widget.EditText[@index=3]')
        await password.setValue('')
    }

    // Helper function to unsucessful perform login
    async performUnSuccessfulLogin(usernameValue, passwordValue) {
        const username = await $('//android.widget.EditText[@index=2]');
        await username.click();
        await username.addValue(usernameValue);

        const password = await $('//android.widget.EditText[@index=3]');
        await password.click();
        await password.addValue(passwordValue);

        await driver.hideKeyboard()
        browser.keys('Tab')
        const loginButton = await $('//android.view.View[@index=5]');
        await loginButton.click();
    }
    // Helper function to verify dashboard elements
    async verifyBellIconPresence() {
        const bellIcon = await $('//android.widget.ImageView[@index=2]');
        const isBellIconVisible = await bellIcon.isDisplayed();
        if (isBellIconVisible) {
            console.log('Positive scenarios test has passed');
        } else {
            console.log('Positive scenarios test has failed');
        }
    }
    // Helper function to verify invalid credentials 
    async verifyInvalidCredentials() {
        const invalidCredentials = await $('~invalid login credentials')
        await browser.pause(1000);
        if (invalidCredentials) {
            console.log("Test Passed for negative scenario")
        } else {
            console.log("Test Failed for negative scenario")
        }
    }
}


