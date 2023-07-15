it('google test', function(){
cy.visit('https://www.google.com/');    
cy.get('[name="q"]').type('Hello world').type('{enter}');
})