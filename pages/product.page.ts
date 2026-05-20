import { Locator, Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  readonly productName: Locator;
  readonly addToCartBtn: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator(
      '[data-test="product-name"]',
    );

    this.addToCartBtn = page.locator(
      '[data-test="add-to-cart"]',
    );

    this.cartBadge = page.locator(
      '[data-test="cart-quantity"]',
    );
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}