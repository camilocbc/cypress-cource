 class loginPage {

    elements = {

        txt_username: () => cy.get('[data-test="username"]'),
        txt_password: () => cy.get('[data-test="password"]'),
        btn_login: () => cy.get('[data-test="login-button"]'),
        lbl_title: () => cy.get('.title'),
    }

    navegate(website){
      cy.visit(website);
    }
    typeUserName(username){
      this.elements.txt_username().type(username);
    }
    typePassword(password){
        this.elements.txt_password().type(password);
    }
    clickLogin(){
        this.elements.btn_login().click();
    }
  
    validateLogin(){
        this.elements.lbl_title().should('contain','Products')
    }
  }

  module.exports = new loginPage();