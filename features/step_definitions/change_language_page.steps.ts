import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from "@playwright/test";

import { Header } from "../../pages/header.page";

When(
  "User changes language to {string}",
  async function (lang: string) {
    const header = new Header(this.page);

    await header.changeLanguage(lang);
  },
);

Then(
  "Spanish text should be visible",
  async function () {
    await expect(
      this.page.locator("text=Inicio"),
    ).toBeVisible();
  },
);