describe('',()=>{
    it('',()=>{
       
        cy.visit('https://www.saucedemo.com/')

        cy.eyesOpen({
            appName: 'Test SauceDemo',
            testName: 'Main Application layout'
        })

        cy.eyesCheckWindow({
            tag: 'SauceDemo',
            target: 'window',
            fully: true
        })
        cy.eyesClose();
    })
})