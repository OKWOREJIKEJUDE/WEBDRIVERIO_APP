
describe('Test Suites', () => {
    it('multipleLists',async ()=> {
        // finding multiple elements
        expectedValuesByIndex = ['2, 3, 4, 5']
        actualList = []
        const listValues = await $$('android.widget.EditText')
        for (const ele of listValues) {
            actualList.push(await ele.getText())
            
        }
        await expect(actualList).toEqual(expectedValuesByIndex)
    })
})