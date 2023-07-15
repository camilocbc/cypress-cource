const API = ()=> cy.request('https://reqres.in/api/users/2');
describe('Basic API Testing ',()=>{

    beforeEach(()=>{
        cy.request('https://reqres.in/api/users/2').as('path');
    })
   

    it.skip('Body Length',()=>{
        API()
      .its('body')
      .should('have.length',5);
    })
    it('Request status',()=>{
        API()
      .its('status')
      .should('eq',200);
    })
    it('Header/content-type ',()=>{
        API()
      .its('headers')
      .its('content-type')
      .should('include','application/json')
      .and('include','charset=utf-8')
      
    })
    const body = [{
        "name": "morpheus",
        "job": "leader"
    }];
    it.skip('Initioans json from the end point',()=>{
        API()
      .its('body')
      .should('deep.eq',body);
      
    })  
    it.skip('JSON Schame check',()=>{
        API()
      .its('body')
      .each(value=>{
        expect(value).to.have.all.keys('data','support')
      })
      
    })  
    it('Using alias',()=>{
       cy.get('@path').should(response=>{
        //  expect(response.body).to.have.length(2);
        expect(response).to.have.property('headers');
        expect(response).to.have.property('duration');

       })
      
    }) 
  
})
const endPointPOST = 'https://reqres.in/api/login';
const todoObject = [{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}]
const addTodo = todoObject =>{
    cy.request('POST',endPointPOST,todoObject)
}
const updateTodo = patchObject =>{
  cy.request('PATCH',`${endPointPOST}/${patchObject.email}`, todoObject)
}

const deleteTodo = objectToBeDelete =>{
  cy.request('DELETE',`${endPointPOST}/${objectToBeDelete.email}`, todoObject)
}
describe('test api with post method',()=>{
    
    it('add a todo',()=>{
        addTodo(todoObject)

        cy.request('GET', `${endPointPOST}/${todoObject.email}`)
          .its('body')
          .should('deep.eq',todoObject)
     }) 
     
    it('update a todo',()=>{
      updateTodo(todoObject)

        cy.request('GET', `${endPointPOST}/${todoObject.email}`)
          .its('body')
          .should('deep.eq',todoObject)
     }) 

    it('delete a todo',()=>{
      deleteTodo(todoObject)

        cy.request('GET', endPointPOST)
          .its('body')
          .should('have.length',2)
     }) 



})