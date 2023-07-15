describe('Keystroke Demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Cypress Keyboard - Slow Type',{keystrokeDelay: 100},()=>{
        cy.get('#user-name').type('This a demo')
    })

    it('Cypress Keyboard - Standard Type',()=>{
        cy.get('#user-name').type('This a demo')
    })

    it('Cypress Keyboard - Faster Type',{keystrokeDelay: 0},()=>{
        cy.get('#user-name').type('This a demo')
    })
})