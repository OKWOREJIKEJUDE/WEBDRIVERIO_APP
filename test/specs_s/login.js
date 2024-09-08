
//const MyMethods = require('./my_methods');

describe('Login Test Suites', () => {
    //METHODS
    // Function to start the app
    async function initializeApp() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }
    // Function to perform logout
    async function performLogout() {
        const logOut = await $('~Log out')
        await logOut.click();
        await browser.pause(1000);
        const logOutButton = await $('~Log out')
        await logOutButton.click()
    }
    // Function to check sucessful login
    async function performSuccessfulLogin(usernameValue, passwordValue) {
        const popup = await $('~Later')
        await popup.click();

        const username = await $('//android.widget.EditText[@index=2]');
        await username.click()
        await username.addValue(usernameValue);

        const password = await $('//android.widget.EditText[@index=3]');
        await password.click()
        await password.addValue(passwordValue);

        await driver.hideKeyboard()
        const loginButton = await $('//android.view.View[@index=5]');
        await loginButton.click()

        const popupOnDashboard = await $('~Later');
        await popupOnDashboard.click()
    }
    //clear fields
    async function clearFields() {
        const username = await $('//android.widget.EditText[@index=2]')
        await username.setValue('')
        const password = await $('//android.widget.EditText[@index=3]')
        await password.setValue('')
    }
    // Function to check unsucessful login
    async function performUnSuccessfulLogin(usernameValue, passwordValue) {
        const username = await $('//android.widget.EditText[@index=2]');
        await username.click();
        await username.addValue(usernameValue);

        const password = await $('//android.widget.EditText[@index=3]');
        await password.click()
        await password.addValue(passwordValue);

        await driver.hideKeyboard()
        browser.keys('Tab')
        const loginButton = await $('//android.view.View[@index=5]');
        await loginButton.click()
    }
    // Function to verify dashboard elements
    async function verifyBellIconPresence() {
        const bellIcon = await $('//android.widget.ImageView[@index=2]');
        const isBellIconVisible = await bellIcon.isDisplayed();
        if (isBellIconVisible) {
            console.log('Positive scenarios test has passed');
        } else {
            console.log('Positive scenarios test has failed');
        }
    }
    // Function to verify invalid credentials 
    async function verifyInvalidCredentials() {
        const invalidCredentials = await $('~invalid login credentials')
        await browser.pause(1000);
        if (invalidCredentials) {
            console.log("Test Passed for negative scenario")
        } else {
            console.log("Test Failed for negative scenario")
        }
    }


    //POSITIVE TESTCASES
    it('Login with correct gigtag and correct password', async () => {
        await initializeApp()
        await performSuccessfulLogin('onowu', 'Required@123');
        await verifyBellIconPresence();
        const settings = await $('~Settings\nTab 5 of 5');
        await settings.click();
        await performLogout();
    });

    it("Login with correct email and correct password", async () => {
        await performSuccessfulLogin('ejikeo+51@gigbanc.co', 'Required@123');
        await verifyBellIconPresence();
        const settings = await $('~Settings\nTab 5 of 5');
        await settings.click();
        await performLogout();
    });

    it("Login with correct phone Number and correct password", async () => {
        await performSuccessfulLogin('08012537770', 'Required@123');
        await verifyBellIconPresence();
        const settings = await $('~Settings\nTab 5 of 5');
        await settings.click();
        await performLogout();
    });

    //NEGATIVE TEST CASES
    it("Login with incorrect gigtag and correct password", async () => {
        //await initializeApp()
        const popup = await $('~Later');
        await popup.click()
        await performUnSuccessfulLogin('onowuuuu', 'Required@123');
        await verifyInvalidCredentials()

    });

    it("Login with incorrect gigtag and incorrect password", async () => {
        const popup = await $('~Later');
        await popup.click();
        await performUnSuccessfulLogin('onowuuuu', 'Requireddddddddd@123');
        await verifyInvalidCredentials();
    });

    it("Login with incorrect email and correct password", async () => {
        const popup = await $('~Later');
        await popup.click();
        await performUnSuccessfulLogin('ejikeojkendjen@gigbanc.co', 'Required@123');
        await verifyInvalidCredentials();
    });

    it("Login with incrrect email and incorrect password", async () => {
        const popup = await $('~Later');
        await popup.click();
        await performUnSuccessfulLogin('ejikeojkendjen@gigbanc.co', 'Requiredjshjhsdsd@123');
        await verifyInvalidCredentials();
    });

    it("Login with incorrect phone Number and correct password", async () => {
        const popup = await $('~Later');
        await popup.click();
        await performUnSuccessfulLogin('08032240774', 'Required@123');
        await verifyInvalidCredentials();
    });

    it("Login with incorrect phone Number and incorrect password", async () => {
        const popup = await $('~Later');
        await popup.click();
        await performUnSuccessfulLogin('09087935464', 'Requiredjhjhsd@123');
        await verifyInvalidCredentials();
    });

});
