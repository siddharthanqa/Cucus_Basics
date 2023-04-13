import { Given, When, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)


  Given('User navigates to the application', async function () {
    await pageFixture.page.goto("https://www.icliniq.com/")
  });


  Given('User click on the login link', async function () {
    
  });



  Given('User enter the username as {string}', async function (string) {
  

  });



  Given('User enter the password as {string}', async function (string) {


  });



  When('User click on the login button', async function () {
   

  });