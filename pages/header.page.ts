import { expect, Locator, Page } from "@playwright/test";

export class Header {
  readonly page: Page;

  readonly languageSelect: Locator;
  readonly languageList: Locator;

  constructor(page: Page) {
    this.page = page;

    this.languageSelect = page.locator(
      '[data-test="language-select"]',
    );

    this.languageList = page.locator(
      "#dropdown-animated",
    );
  }

  async changeLanguage(lang: string) {
    await this.languageSelect.click();

    await expect(this.languageList).toBeVisible();

    await this.page
      .locator(`[data-test="lang-${lang}"]`)
      .click();
  }
}