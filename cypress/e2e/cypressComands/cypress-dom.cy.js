describe('isVisible Demo', ()=>{
    it('isVisible Comand',()=>{
        cy.visit('https://demoqa.com/accordian')

        cy.get('.collapse').eq(6).then($element =>{
            cy.log(`Collapse Content as soon as I load the website: ${Cypress.dom.isVisible}`)
        })

        cy.get('#selection1Heading').click();

        cy.get('.collapse').eq(6).then($element =>{
            cy.log(`Collapse Content as soon as I click on the card: ${Cypress.dom.isVisible}`)
        })
    })

    it('Cypress arch',()=>{
        cy.log(Cypress.arch)
    })
})