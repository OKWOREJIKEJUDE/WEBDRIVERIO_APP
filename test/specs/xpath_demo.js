
describe('Test Suites', () => {
    it('Logn',async ()=> {
        await browser.pause(5000)
        const gigLogin = await $('~Log in')// accessibiity id
        await gigLogin.click()
        await browser.pause(2000)
        const popup = await $('~Later')//acceessibility id
        await popup.click()
        const gigtag = await $('//android.widget.EditText[@index=2]')//xpath
        await gigtag.click()
    })
})