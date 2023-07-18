describe('Invoke Test Script', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/links')
    })
    it('Invoke to remove target attribute',()=>{
        cy.get('#simpleLink').invoke('removeAttr', 'target')
        cy.get('#simpleLink').click();
        cy.location().then(yieldedObject => cy.log(yieldedObject.href))
    })
    
    it('Invoke to get an attribute',()=>{
        cy.get('#simpleLink').invoke('attr', 'target').then(
            targetValue => cy.log(targetValue)
        )
        cy.get('#simpleLink').should('have.attr', 'target', '_blank')

    })
    it('Invoke to get text',()=>{
        cy.get('.main-header').invoke('text').then(
            textValue => cy.log(textValue)
        )
    })
})