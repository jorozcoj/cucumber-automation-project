import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from "@playwright/test";

import { ProductPage } from "../../pages/product.page";

Given("User selects first product", async function () {
  await this.homePage.selectFirstSearchProduct();

  this.productPage = new ProductPage(this.page);
});

When("User adds product to cart", async function () {
  await this.productPage.addToCart();
});

Then(
  "Cart badge should display {string}",
  async function (quantity: string) {
    await expect(
      this.productPage.cartBadge,
    ).toHaveText(quantity);
  },
);