import {
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import {
  chromium,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;

Before(async function () {
  browser = await chromium.launch({
    headless: true,
  });

  context = await browser.newContext();

  const page: Page = await context.newPage();

  this.page = page;

  await this.page.goto(
    "https://practicesoftwaretesting.com",
  );

});

After(async function () {
  await context.close();

  await browser.close();
});