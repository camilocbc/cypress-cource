describe('Assertion Demo', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/radio-button')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('TDD Assertions',()=>{
        cy.get('input[type="radio"]').should("have.length",3)
        cy.get('input[type="radio"]').eq(2).should("have.class",'disabled')
        cy.get('.mt-3').should('not.exist')
        cy.get('input[type="radio"]').eq(0).click({force: true})
        cy.get('.mt-3')
        .should('be.visible')
        .and('have.text','You have selected Yes')
        .and('include.text','Yes')
        .and('not.contain', 'test')

        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')
    })

    it('BDD Assertions', ()=>{
        cy.get('input[type="radio"]').should($inputs =>{
            expect($inputs).to.have.lengthOf(3)
            expect($inputs).to.have.class('disabled')
        })

        cy.get('input[type="radio"]').eq(1).click({force: true})
        cy.get('.mt-3')
        .should($response=>{
            expect($response).to.have.text('You have selected Impressive')
            expect($response).to.include.text('Impressive')
            expect($response).to.not.include.text('NO')
                })
    })
})