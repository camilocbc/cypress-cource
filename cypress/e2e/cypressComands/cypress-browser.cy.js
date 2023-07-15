describe('Cypress browser Demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.whatismybrowser.com/es/')
    })

    it('Log Webb Browser Information', ()=>{
        cy.log(Cypress.browser.name)
        cy.log(Cypress.browser.family)
        cy.log(Cypress.browser.isHeaded)
        cy.log(Cypress.browser.isHeadless)
        cy.log(Cypress.browser.path)
        cy.log(Cypress.browser.version)
    })

    it('Check header depending on the web browser', ()=>{
        if(Cypress.$.browser.name = 'chrome'){
            cy.get('.string-major a').should('have.text', 'Chrome 114 on Windows 11')
        }
        if(Cypress.$.browser.name = 'firefox'){
            cy.get('.string-major a').should('have.text', 'Firefox 114 on Windows 10')
        }
    })
})