import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {Assertions} from "../helpers/assertions";

export class LoginPage {
    protected page: Page
    private login: Locator
    private password: Locator
    private submitButton: Locator
    private emailErrorMessage: Locator
    private passwordErrorMessage: Locator
    private registerButton: Locator
    private resetPasswordButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.login = this.page.locator("//*[@placeholder='Ник или e-mail']")
        this.password = this.page.locator("//*[@placeholder=\"Пароль\"]")
        this.submitButton = this.page.locator("//*[@id=\"auth-container\"]/div/div[2]/div/form/div[3]/button")
        this.emailErrorMessage = this.page.locator("//*[contains(text(),'Укажите ник или e-mail')]")
        this.passwordErrorMessage = this.page.locator("//*[contains(text(),'Укажите пароль')]")
        this.registerButton = this.page.locator("//*[contains(text(),'Зарегистрироваться на Onlíner')]")
        this.resetPasswordButton = this.page.locator("//*[contains(text(),'Я не помню пароль')]")

    }

    async invalidLogin(): Promise<void> {
         await Actions.click(this.submitButton)
    };

    async enterPassword(): Promise<void> {
        await Actions.type(this.password, '3434343ff')
        await Actions.click(this.submitButton)
    };

    async checkInvalidLoginMessage(): Promise<void> {
        await Assertions.containsText(this.emailErrorMessage, 'Укажите ник или e-mail')
        await Assertions.containsText(this.passwordErrorMessage, 'Укажите пароль')
    };

    async checkEmptyLoginMessage(): Promise<void> {
        await Assertions.containsText(this.emailErrorMessage, 'Укажите ник или e-mail')
    };

    async clickOnRegisterButton(): Promise<void> {
        await Actions.click(this.registerButton)
    };

    async pressAtResetPasswordButton(): Promise<void> {
        await Actions.click(this.resetPasswordButton)
    };

}
