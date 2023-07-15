import {Given, When, Then, attach } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pageObject/loginPage.cy";
const login = new loginPage()
Given('a user start SourceLab',()=>{
  login.navegate('/');
})
/*When('a user type the username  and password',(table)=>{
      table.hashes().forEach(row => {
        cy.log(row.username);
        cy.log(row.password);
        login.typeUserName(row.username);
        login.typePassword(row.password);
      });*/
        When("a user type the username {string} and password {string}", function (username, password) {
          login.typeUserName(username);
          login.typePassword(password);
      
    })
When('a user clicks on the login button',()=>{
    login.clickLogin();
})
Then('validate login',()=>{
  login.validateLogin();

})