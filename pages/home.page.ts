import { Locator, Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;

    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchCompleted: Locator;
    readonly searchProductCards: Locator;

    readonly handToolCheckbox: Locator;
    readonly filteredCompleted: Locator;
    readonly filteredProductCards: Locator;

    constructor(page: Page) {

        this.page = page;

        this.searchInput = page.locator("#search-query");

        this.searchButton = page.locator(
            '[data-test="search-submit"]',
        );

        this.handToolCheckbox = page
            .locator('input[name="category_id"]')
            .first();

        this.filteredCompleted = page.locator(
            '[data-test="filter_completed"]',
        );

        this.filteredProductCards = page.locator(
            '[data-test="filter_completed"] .card',
        );

        this.searchCompleted = page.locator(
            '[data-test="search_completed"]',
        );

        this.searchProductCards = page.locator(
            '[data-test="search_completed"] .card',
        );
    }

    async openPage() {
        await this.page.goto("https://practicesoftwaretesting.com");
    }

    async search(product: string) {
    await this.searchInput.fill(product);

    await this.searchButton.click();

    await this.searchCompleted.waitFor();
  }

  async filterByHandTools() {
    await this.handToolCheckbox.check();

    await this.filteredCompleted.waitFor();
  }

  async selectFirstSearchProduct() {
    await this.searchProductCards.first().click();
  }

  async selectFirstFilterProduct() {
    await this.filteredProductCards.first().click();
  }

}