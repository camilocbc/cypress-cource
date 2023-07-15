/// <reference types="cypress" />


describe('Assertions Demo', () => {

  before(function(){
    
    cy.fixture('example.json').as('test_data');
  })



  it('passes fixture', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click();
    cy.get('#query-btn')
                      .should('contain', 'Button')
                      .should('have.class', 'query-btn')
    cy.fixture('example.json').then((data)=>{
      cy.log(data.name)
    })

    cy.get('@test_data').then((test_data)=>{
      cy.log(test_data.name)
    })
                      
  })

  it('read file using readfile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
      cy.log(data.name)
    })
  })

  it('read file using writeFile()', function(){
    cy.writeFile('sample.txt', 'Hello, this is camilo\n')
    cy.writeFile('sample.txt', 'Im learning cypress with raghav', {flag:'a+'})
    })



})