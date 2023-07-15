import { LoginPage } from "../../pages/loginPage.cy";

const loginPage = new LoginPage()

it('login test', function(){
     
    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUserName('test');
    loginPage.enterPassword('test');
    loginPage.clickLogin();
    
    
    
    })