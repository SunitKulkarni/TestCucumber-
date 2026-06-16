Simplest  way to create step definiation 
1) Create Feature File
2) npx cucumber-js --dry-run >> Generate Missing Steps
3) Implement Step Definitions
4) make sure the step defination should always with  async function and await this.page (stmt)

Given('User launches application', async function () {
    await this.page.goto('https://example.com');
});

When('User enters valid username and password', async function () {
    await loginPage.login('admin', 'admin123');
});

Then('User should be logged in successfully', async function () {
    await expect(this.page).toHaveURL(/dashboard/);
});

4) npx cucumber-js