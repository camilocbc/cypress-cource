it('learning assertions', function(){
    cy.visit('https://example.cypress.io/');
    cy.contains('get').click()
    cy.get('#query-btn',{timeout : 6000})
            .should('contain', 'Button')
            .should('have.class', 'query-btn')
            .should('have.id', 'query-btn')
            .should('be.visible')
            .should('be.enabled')
         //   .should('be.disabled')

    cy.get('#query-btn',{timeout : 6000}).invoke('attr', 'id')
            .should('equal', 'query-btn')

    cy.get('#query-btn',{timeout : 6000})
            .should('contain', 'Button')
            .and('have.class', 'query-btn')

    // Explicit assertions
    // expect
    expect(true).to.be.true
    let name = 'cristian';
    expect(name).to.be.equal('cristian');

    // assert
    assert.equal(4,4,'Not Equal')
    //assert.strictEqual(4,'4', 'Not strictly Equal')
     
})