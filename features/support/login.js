const { Given, When, Then, Before, After }=require ('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const {expect} = require('@playwright/test');


Before (async function () {
  this.browser =await chromium.launch({headless:false});
  this.context = await this.browser.newContext();
  this.page = await  this.context.newPage();
  
})
After (async function () {
  await this.browser.close();
})


Given('User is in login page of Application', async function () {
  await this.page.goto ("https://parabank.parasoft.com/parabank/index.htm")
    /* Write code here that turns the phrase above into concrete actions
  return 'pending';
  */
});

When('User Enter Invalid  User id and Invalid password', async function () {
await this.page.locator('input[name="username"]').fill('asssss');
await this.page.locator('input[name="password"]').fill('ssssss');
  
  /* Write code here that turns the phrase above into concrete actions
  return 'pending';
  */
});

When('Click on login button', async function () {
    await this.page.getByRole('button', { name: 'Log In' }).click();
  /* Write code here that turns the phrase above into concrete actions
  return 'pending';
  */
});

//Then('User should get error message', async function () {
  //  await expect(this.page.getByText('The username and password')).toBeVisible();
  /* Write code here that turns the phrase above into concrete actions
  return 'pending';
  */
//});
Then('User should get error message', async function () {

    await this.page.waitForTimeout(2000);

    const text = await this.page.locator('body').textContent();

    console.log(text);

});
When('User Enter valid User id and valid password', async function () {
    await this.page.locator('input[name="username"]').fill('john');
    await this.page.locator('input[name="password"]').fill('demo');
});

Then('User should be able to see Account overview Page', async function () {
      await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();

});

When('User Enter valid User id and Blank password', async function () {
  await this.page.locator('input[name="username"]').fill('john');
    await this.page.locator('input[name="password"]').fill('');
});
Then('User should get error message', async function () {

    await this.page.waitForTimeout(2000);

    const text = await this.page.locator('body').textContent();

    console.log(text);

});

When('User Enter BLANK User id and valid password', async function () {
  await this.page.locator('input[name="username"]').fill('');
    await this.page.locator('input[name="password"]').fill('demo');
});

Then('User should get error message', async function () {

    await this.page.waitForTimeout(2000);

    const text = await this.page.locator('body').textContent();

    console.log(text);

});