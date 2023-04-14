import { Given, When, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {

  await pageFixture.page.goto('https://staging.icliniq.com/');

});


Given('User click on the login link', async function () {

  await pageFixture.page.getByRole('link', { name: 'Login' }).click();

});

Given('User enter the username as {string}', async function (username) {

  await pageFixture.page.getByPlaceholder('User ID or E-mail').fill(username);

});

Given('User enter the password as {string}', async function (password) {

  await pageFixture.page.getByPlaceholder('Password').fill(password);

});
When('User click on the login button', async function () {
  await pageFixture.page.getByRole('button', { name: 'Login' }).click();
});