let url:string = 'https://www.saucedemo.com/inventory.html'
describe('TS DEMO',()=>{
    it('Success Login without Custom Command',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();

        cy.url().should('eq', url)
    })
    it('Success Login with Custom Command',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.typeLogin('standard_user','secret_sauce')
        cy.url().should('eq', url)
    })
})