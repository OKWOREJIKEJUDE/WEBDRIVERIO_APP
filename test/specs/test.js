
describe('Test Suites', () => {
    it('Logn',async ()=> {
        // finding element by accessibilit id NB ~ means acessibility id symbol
        await browser.pause(5000)
        const gigLogin = await $('~Log in')
        await gigLogin.click()
        await browser.pause(2000)
        const popup = await $('~Later')
        await popup.click()
    })
})

