import { Locator, Page } from "@playwright/test";

export class RegisterPage {
    readonly page: Page;

    readonly menuButton: Locator;
    readonly signInButton: Locator;
    readonly registerLink: Locator;
    readonly registerForm: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly dob: Locator;
    readonly street: Locator;
    readonly postalCode: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly country: Locator;
    readonly phone: Locator;
    readonly houseNumber: Locator;
    readonly email: Locator;
    readonly password: Locator;

    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.menuButton = page.locator(
            'button[class="navbar-toggler"]',
        );

        this.signInButton = page.locator(
            '[data-test="nav-sign-in"]',
        );

        this.registerLink = page.locator(
            '[data-test="register-link"]',
        );

        this.registerForm = page.locator(
            "div.col-lg-8.auth-form",
        );

        this.firstName = page.locator("#first_name");

        this.lastName = page.locator("#last_name");

        this.dob = page.locator("#dob");

        this.street = page.locator("#street");

        this.postalCode = page.locator(
            "#postal_code",
        );

        this.houseNumber = page.locator("#house_number");

        this.city = page.locator("#city");

        this.state = page.locator("#state");

        this.country = page.locator("#country");

        this.phone = page.locator("#phone");

        this.email = page.locator("#email");

        this.password = page.locator("#password");

        this.submitBtn = page.locator(
            'button[type="submit"]',
        );
    }

    async openRegisterPage() {
        if (await this.menuButton.isVisible()) {
            await this.menuButton.click();
        }

        await this.signInButton.click();

        await this.registerLink.click();
    }

    async register(user: {
        firstName: string;
        lastName: string;
        dob: string;
        street: string;
        postalCode: string;
        city: string;
        state: string;
        houseNumber: string;
        country: string;
        phone: string;
        email: string;
        password: string;
    }) {
        await this.firstName.fill(user.firstName);

        await this.lastName.fill(user.lastName);

        await this.dob.fill(user.dob);

        await this.street.fill(user.street);

        await this.postalCode.fill(user.postalCode);

        await this.houseNumber.fill(user.houseNumber);

        await this.city.fill(user.city);

        await this.state.fill(user.state);

        await this.country.selectOption(user.country);

        await this.phone.fill(user.phone);

        await this.email.fill(user.email);

        await this.password.fill(user.password);

        await this.page.pause();

        await this.submitBtn.click();
    }
}