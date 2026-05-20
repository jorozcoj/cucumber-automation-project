import { When, Then } from '@cucumber/cucumber';

import { expect } from "@playwright/test";

When("User filters hand tools", async function () {
  await this.homePage.filterByHandTools();
});

Then(
  "Filtered products should be visible",
  async function () {
    await expect(
      this.homePage.filteredCompleted,
    ).toBeVisible();

    await expect(
      this.homePage.filteredProductCards.first(),
    ).toBeVisible();
  },
);