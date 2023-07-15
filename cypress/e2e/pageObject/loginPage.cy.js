export class loginPage {

  login_txt_username = '[data-test="username"]';
  login_txt_password = '[data-test="password"]';
  login_btn_login = '[data-test="login-button"]';

  navegate(website){
    cy.visit(website);
  }
  typeUserName(username){
    cy.get(this.login_txt_username).type(username);
  }
  typePassword(password){
    cy.get(this.login_txt_password).type(password);
  }
  clickLogin(){
    cy.get(this.login_btn_login).click();
  }

  validateLogin(){
    cy.get('.title').should('contain','Products')
  }
}