/// <reference types="cypress" />
 
it('google test', function(){
   cy.visit('https://www.youtube.com/')
   cy.get('#search-input > #search').type('KmiloCBC{enter}')
   cy.contains('KmiloCBC').find('#text').click()
   })