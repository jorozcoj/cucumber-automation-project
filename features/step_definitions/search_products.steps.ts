import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { HomePage } from '../../pages/home.page';


Given('User opens home page', async function () {

    this.homePage = new HomePage(this.page);
    await this.homePage.openPage();
});

When('User searches for {string}', async function (product: string) {

    await this.homePage.search(product);

});

Then('Search results should be visible', async function () {
    await expect(this.homePage.searchCompleted).toBeVisible();
});
