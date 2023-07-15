describe('Variables & Aliases DEMO',()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/modal-dialogs')
    })

    it('Return Variables Misconception', ()=>{
        const smallModalText = cy.get('#showSmallModal').text();
        cy.log(smallModalText);
        
    })

    it('Closures & Variables', ()=>{
         cy.get('#showSmallModal').then($modalbutton=>{
            const smallModalText = $modalbutton.text();
            cy.log(smallModalText);

            $modalbutton.click();
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, {matchCase: false})
         });
       
        
    })

    it('ALIAS DEMO', ()=>{
        cy.get('#showSmallModal').invoke('text').as('invokeText')

        cy.get('#showSmallModal').then($modalbutton=>{
            const smallModalText = $modalbutton.text();
            cy.log(smallModalText);
            cy.wrap(smallModalText).as('wrapText');
     })
    })

    it('SHARING CONTEXT', ()=>{
        cy.log(this.invokeText)
    })
})