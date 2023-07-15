describe('demo test of different functions on cypress', ()=>{
    context('methods of cypress',()=>{
        
        it('title',()=>{
            cy.title().should('eq','title')
        })
        it('url',()=>{
            cy.url().should('eq','url')
        })
        it('protocol',()=>{
            cy.location().should('contains','protocol')
        })
        it('hostname',()=>{
            cy.location().should('eq','hostname')
        })
        it('pathname',()=>{
            cy.location('pathname').should('eq','/pathname.html')
        })
        it('EQ|FIRST|LAST methods',()=>{
            cy.get('path').first().type('something');
            cy.get('path').eq(1).type('something');
            cy.get('path').last().type('something');
        })
        it('filter method',()=>{
            cy.get('path').filter('attribute').type('something');
          
        })
        it('find method',()=>{
            cy.get('form').find('path').eq(2).type('something');
          
        })
        it('parent method',()=>{
            cy.get('form').parent().type('something');
          
        })

        
        it('using fixture',()=>{
            cy.fixture('fixtures/').then(credentials =>{
                this.credentials = credentials;
            })
            cy.get('path').type(this.credentials.name);
          
        })

        it('using commads with folder support',()=>{
              cy.messageConsole();
        })

        

    })
})