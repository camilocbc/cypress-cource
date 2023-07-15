const datas = require('../../fixtures/example.json')

describe('test JsonFile (regression)',{tags:'@regresionTag'},()=>{

    datas.forEach(data=>{
        it(data.name,()=>{
            cy.log(data.user)
            cy.log(data.password)
            cy.log(data.expected)
        })
    })
   
})

describe('test JsonFile (regression11)',{tags:'@regresion1Tag'},()=>{

    datas.forEach(data=>{
        it(data.name,()=>{
            cy.log(data.user)
        })
    })
   
})