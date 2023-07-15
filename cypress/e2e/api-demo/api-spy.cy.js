describe('API Interceot spy example',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('New todo by UI',()=>{
        cy.intercept('POST','/todos').as('new-todo')
        cy.get('input#add-todo').type('new-todo{enter}')

        cy.wait('@new-todo').its('response.statusCode').should('eq',201)

        cy.get('@new-todo').should(newTodo=>{
            cy.log(newTodo)
            expect(newTodo.response.body.title).to.eql('new-todo')

            const newTodoId = newTodo.response.body.newTodoId
            cy.wrap(newTodoId).as('newTodoId')
        })
    })

    after(()=>{
        cy.request('DELETE',`/todos/${this.newTodoId}`)
    })
})