

describe("Test Suites", () => {
    //METHODS
    async function initializeApp() {
        await browser.pause(3000);
        await $('~Log in').click()
        await browser.pause(3000);
    }
    async function performLogin(usernameValue, passwordValue) {
        await $('~Later').click()
        const username = await $('//android.widget.EditText[@index=2]')
        await username.click()
        await username.setValue(usernameValue)
        const password = await $('//android.widget.EditText[@index=3]')
        await password.click()
        await password.setValue(passwordValue);
        await driver.hideKeyboard();
        await $('//android.view.View[@index=5]').click()
        await $('~Later').click()
    }
    async function performLogout() {
        const logOut = await $('~Log out')
        await logOut.click();
        await browser.pause(1000);
        const logOutButton = await $('~Log out');
        await logOutButton.click();
    }
    async function fundCard() {
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(5000)
        //await $('android=new UiScrollable(new UI Selector().scrollable(true)).scrollTextIntoView()')
        const card1 = await $('//android.widget.ImageView[@index=1]')
        const card2 = await $('//android.widget.ImageView[@index=2]')
        card1.touchAction([
            'press', {action: 'moveTo', element: card2}, 
            'release'
        ]),
        await browser.pause(5000)
        await card2.click()
        const fundCard = await $('~Fund card')
        fundCard.click()
        const enterAmount = await $('//android.widget.EditText')
        await enterAmount.click()
        await enterAmount.addValue(10)
        const continueButton = await $('~Continue')
        await continueButton.click()
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }

    async function withdrawCard() {
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(5000)
        const card = await $('android.widget.ImageView')
        await card.click()
        const withdrawCard = await $('~Withdraw')
        withdrawCard.click()
        const enterAmount = await $('android.widget.EditText')//by classname
        await enterAmount.click()
        await enterAmount.addValue(2)
        const continueButton = await $('~Continue')
        await continueButton.click()
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }

    async function viewCardDetails() {
        const cardHome = await $('~Cards\nTab 2 of 5').click()
        await cardHome.click()
        await browser.pause(5000)
        const startX = 800;
        const endX = 200;
        const y = 500;
        await browser.touchAction([
            { action: 'press', x: startX, y: y },
            { action: 'moveTo', x: endX, y: y },
            { action: 'release' }
        ]);
        const card = await $('android.widget.ImageView')
        await card.click()
        await browser.pause(1000)
        const optionsIcon = await $('android.view.View')// class
        optionsIcon.click()
        await browser.pause(1000)
        const viewCardDetails = await $('~View card details')
        await viewCardDetails.click()
        await browser.pause(2000)
        const pinBoxFields = await $('android.view.View')// class
        //await pinBoxFields.setValue(1234)
        await pinBoxFields.touchAction([
            { action: 'tap', x: 100, y: 500 },
            { action: 'tap', x: 200, y: 500 },
            { action: 'tap', x: 300, y: 500 },
            { action: 'tap', x: 400, y: 500 }
        ]);
        const verifyPIN = await $('~Verify PIN')
        await verifyPIN.click()
        await browser.pause(5000)
        const backIcon1 = await $('android.widget.Button')
        await backIcon1.click()
        const backIcon2 = await $('android.widget.Button')
        await backIcon2.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    async function changeCardPIN() {
        await $('~Cards\nTab 2 of 5').click()
        await browser.pause(5000)
        await $('android.widget.ImageView').click()
        await browser.pause(1000)
        const optionsIcon = await $('android.view.View').click()
        await browser.pause(1000)
        await $('~').click()
        await browser.pause(2000)
        //change PIN method
        await $('~Go to Card').click()
        await $('~Settings\nTab 5 of 5').click()
    }
    async function freezeCard() {
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(5000)
        const card = await $('android.widget.ImageView')
        await card.click()
        await browser.pause(1000)
        const optionsIcon = await $('android.view.View')// class
        optionsIcon.click()
        await browser.pause(1000)
        const viewCardDetails = await $('~')
        await viewCardDetails.click()
        await browser.pause(2000)
        //freeze card method
        const freezeCard = await $('~Verify PIN')
        await freezeCard.click()
        await browser.pause(5000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    async function unfreezeCard() {
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(5000)
        const card = await $('android.widget.ImageView')
        await card.click()
        await browser.pause(1000)
        const optionsIcon = await $('android.view.View')// class
        optionsIcon.click()
        await browser.pause(1000)
        const viewCardDetails = await $('~')
        await viewCardDetails.click()
        await browser.pause(2000)
        //unfreeze card
        const unfreezeCard = await $('~Verify PIN')
        await unfreezeCard.click()
        await browser.pause(5000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }


 
    it("View Card Details", async () => {
        await performLogin('momma', 'Required@123')
        await viewCardDetails()
        await performLogout()
    })
    it("Card Withdrawal", async () => {
        await performLogin('momma', 'Required@123')
        await withdrawCard()
        await performLogout()
    })
    it("Card Funding", async () => {
        await initializeApp()
        await performLogin('onowu', 'Ejike123@')
        await fundCard()
        await performLogout()
    })
  
    it("Change Card PIN", async () => {
        await performLogin('momma', 'Required@123')
        await changeCardPIN()
        await performLogout()
    })
    it("Freeze Card", async () => {
        await performLogin('momma', 'Required@123')
        await freezeCard()
        await performLogout()
    })
    it("Unfreeze Card", async () => {
        await performLogin('momma', 'Required@123')
        await unfreezeCard()
        await performLogout()
    })
})