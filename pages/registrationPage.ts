import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {Assertions} from "../helpers/assertions";

export class RegistrationPage {
    protected page: Page
    private registerButton: Locator
    private checkbox: Locator
    private emailErrorMessage: Locator
    private passwordErrorMessage: Locator
    private email: Locator

    constructor(page: Page) {
        this.page = page;
        this.registerButton = this.page.locator("//*[contains(text(),'Зарегистрироваться')]")
        this.checkbox = this.page.locator('[class=\'i-checkbox__faux\']')
        this.emailErrorMessage = this.page.locator("//*[contains(text(),'Укажите e-mail')]")
        this.passwordErrorMessage = this.page.locator("//*[contains(text(),'Укажите пароль')]").first()
        this.email = this.page.locator("[placeholder='Ваш e-mail']")

    }

    async pressAtRegisterButton(): Promise<void> {
        await Actions.click(this.registerButton)
    };

     async checkboxIsChecked(): Promise<void> {
        await this.page.check("[class='i-checkbox__faux']")
    };

    async checkInvalidRegistrationMessage(): Promise<void> {
        await Assertions.containsText(this.emailErrorMessage, 'Укажите e-mail')
        await Assertions.containsText(this.passwordErrorMessage, 'Укажите пароль')
    };

    async checkEmptyPasswordMessage(): Promise<void> {
        await Assertions.containsText(this.passwordErrorMessage, 'Укажите пароль')
    };

    async enterLogin(): Promise<void> {
        await Actions.type(this.email, 'vzhuch13@gmail.com')
    };

}
