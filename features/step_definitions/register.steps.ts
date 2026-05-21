import {
    Given,
    Then,
    When,
} from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { RegisterPage } from "../../pages/register.page";

Given(
    "User opens register page",
    async function () {
        this.registerPage = new RegisterPage(
            this.page,
        );

        await this.registerPage.openRegisterPage();

        await expect(
            this.registerPage.registerForm,
        ).toBeVisible();
    },
);

When(
    "User completes registration form",
    async function () {
        const uniqueEmail = `user_${Date.now()}@mail.com`;

        const user = {
            firstName: "Juan",
            lastName: "Duque",
            dob: "1992-08-01",
            street: "Evergreen Terrace",
            postalCode: "170001",
            city: "Springfield",
            houseNumber: "742",
            state: "Manizales",
            country: "Colombia",
            phone: "3145879642",
            email: uniqueEmail,
            password: "JuanDuque*123",
        };

        await this.registerPage.register(user);
    },
);

Then(
    "Login form should be visible",
    async function () {
        await expect(this.page).toHaveURL(/auth\/login/);
    },
);