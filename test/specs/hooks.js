
describe("Hooks", ()=>{

    before(async ()=>{
        console.log("Before Method")
    })
    after(()=>{
        console.log("Before Method")
    })
    beforeEach(()=>{
        console.log("BeforeEach Method")
    })
    afterEach(()=>{
        console.log("afterEach Method")
    })

    it("First It", ()=>{
        
    })
})