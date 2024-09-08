class logoutPageObject {
    //Locators 
    get logout() {
        return $('~Log out').click()
    }
    get logoutButton() {
        return $('~Log out');
    }

    async  performLogout() {
        await this.logout.click()
        await browser.pause(1000);
        await this.logoutButton.click()
    }
}
module.exports = new logoutPageObject()
