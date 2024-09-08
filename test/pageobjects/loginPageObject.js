class loginPageObject {
    //Locators
    get popup() {
        return $('~Later');
    }

    get inputUsername() {
        return $('//android.widget.EditText[@index=2]');
    }

    get inputPassword() {
        return $('//android.widget.EditText[@index=3]');
    }

    get loginButton() {
        return $('//android.view.View[@index=5]');
    }
    get pop_up(){
        return $('~Later').click()
    }

    //Start the App
    async initializeApp() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }

    //Perform successful login
    async performSuccessfulLogin(usernameValue, passwordValue) {
        await this.popup.click();
        await this.inputUsername.setValue(usernameValue);
        await this.inputPassword.setValue(passwordValue);
        await driver.hideKeyboard();
        await this.loginButton.click();
    }

    // Perform unsuccessful login
    async performUnSuccessfulLogin(usernameValue, passwordValue) {
        await this.inputUsername.setValue(usernameValue);
        await this.inputPassword.setValue(passwordValue);
        await driver.hideKeyboard();
        await this.loginButton.click();
    }

    async verifyBellIconPresence() {
        const bellIcon = await $('//android.widget.ImageView[@index=2]');
        const isBellIconVisible = await bellIcon.isDisplayed();
        if (isBellIconVisible) {
            console.log('Positive scenarios test has passed');
        } else {
            console.log('Positive scenarios test has failed');
        }
    }

    // Function to verify invalid credentials 
    async verifyInvalidCredentials() {
        const invalidCredentials = await $('~invalid login credentials');
        await browser.pause(1000);
        const isDisplayed = await invalidCredentials.isDisplayed();
        if (isDisplayed) {
            console.log("Test Passed for negative scenario");
        } else {
            console.log("Test Failed for negative scenario");
        }
    }
}

module.exports = new loginPageObject();
