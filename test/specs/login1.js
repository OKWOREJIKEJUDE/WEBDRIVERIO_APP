const { click } = require('appium-uiautomator2-driver/build/lib/commands/element');
const loginPage = require('../my_pageobjects/page_objects');

describe('Login Test Suites', () => {
    //NEGATIVE TEST CASES
    it("Login with incorrect gigtag and correct password", async () => {
        await loginPage.initializeApp()
        await $('~Later').click()
        await loginPage.UnSuccessfulLogin('onowuuuu', 'Required@123')
        await loginPage.verifyInvalidCredentials()
        await loginPage.clearFields()

    });

    it("Login with incorrect gigtag and incorrect password", async () => {
        await loginPage.UnSuccessfulLogin('ttteeeejjf', 'Reqgdfhgbxuired@123')
        await loginPage.verifyInvalidCredentials()
        await loginPage.clearFields()
    });

    it("Login with incorrect email and correct password", async () => {
        await loginPage.UnSuccessfulLogin('okworejikejddb@gmail.com', 'Required@123')
        await loginPage.verifyInvalidCredentials()
        await loginPage.clearFields()
    });

    it("Login with incrrect email and incorrect password", async () => {
        await loginPage.UnSuccessfulLogin('ejhhdikeojkdh@gigbanc.co', 'Requhdhdbxgired@123')
        await loginPage.verifyInvalidCredentials()
        await loginPage.clearFields()
    });

    it("Login with incorrect phone Number and correct password", async () => {
        await loginPage.UnSuccessfulLogin('090886363846436372', 'Required@123')
        await loginPage.verifyInvalidCredentials()
        await loginPage.clearFields()
    });

    it("Login with incorrect phone Number and incorrect password", async () => {
        await loginPage.UnSuccessfulLogin('0908636537462736373', 'Reqydgtdsuired@123')
        await loginPage.verifyInvalidCredentials()
        await loginPage.clearFields()
    });

    // POSITIVE TEST CASES
    it('Login with correct gigtag and correct password', async () => {
        //await $('~Later').click()
        await loginPage.SuccessfulLogin('onowu', 'Required@123')
        await $('~Later').click()
        await loginPage.verifyBellIconPresence()
        await $('~Settings\nTab 5 of 5').click()
        await loginPage.performLogout()
    });

    it('Login with correct phone number and correct password', async () => {
        await $('~Later').click()
        await loginPage.SuccessfulLogin('08012537770', 'Required@123')
        await $('~Later').click()
        await loginPage.verifyBellIconPresence()
        await $('~Settings\nTab 5 of 5').click()
        await loginPage.performLogout()
    });

    it('Login with correct email and correct password', async () => {
        await $('~Later').click()
        await loginPage.SuccessfulLogin('ejikeo+51@gigbanc.co', 'Required@123')
        await $('~Later').click()
        await loginPage.verifyBellIconPresence()
        await $('~Settings\nTab 5 of 5').click()
        await loginPage.performLogout()
    });

    it('Send Money to gigbanc user', async () => {
        await $('~Later').click()
        await loginPage.SuccessfulLogin('ejikeo+51@gigbanc.co', 'Required@123')
        await $('~Later').click()
        await loginPage.verifyBellIconPresence()
        await $('~Send money').click()

    });
});
