import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {Assertions} from "../helpers/assertions";

export class ResetPasswordPage {
    protected page: Page
    private resetPassworsButton: Locator
    private errorMessage: Locator
    private wrongUserError: Locator
    private email: Locator

    constructor(page: Page) {
        this.page = page;
        this.resetPassworsButton = this.page.locator("//*[contains(text(),'Далее')]")
        this.errorMessage = this.page.locator("//*[contains(text(),'Укажите ник, e-mail или номер телефона')]")
        this.wrongUserError = this.page.locator("//*[contains(text(),'Такой пользователь не зарегистрирован')]")
        this.email = this.page.locator('[placeholder="Ник, e-mail или номер телефона"]')

    }

    async confirmResetPassword(): Promise<void> {
        await Actions.click(this.resetPassworsButton)
    };

    async validateErrorMessage(): Promise<void> {
        await Assertions.containsText(this.errorMessage, 'Укажите ник, e-mail или номер телефона\n')
    };

    async validateWrongUserErrorMessage(): Promise<void> {
        await Assertions.containsText(this.wrongUserError, 'Такой пользователь не зарегистрирован')
    };

    async enterEmail(): Promise<void> {
        await Actions.type(this.email, 'vzhuch12@gmail.com')
    };


}