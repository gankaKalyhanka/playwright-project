import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {Assertions} from "../helpers/assertions";

export class OrderConfirmationPage {
    protected page: Page
    private invalidNumberError: Locator
    private submitNumberButton: Locator
    private numberInput: Locator

    constructor(page: Page) {
        this.page = page;
        this.invalidNumberError = this.page.locator("//*[contains(text(),'Некорректный номер')]").first()
        this.submitNumberButton = this.page.locator("//*[contains(text(),'Подтвердить номер')]").first()
        this.numberInput = this.page.locator("[placeholder='xx xxx-xx-xx']").first()

    }

    async validateInvalidNumberError(): Promise<void> {
        await Assertions.containsText(this.invalidNumberError, 'Некорректный номер')
    };

    async pressAtSubmitNumberButton(): Promise<void> {
        await Actions.click(this.submitNumberButton)
    };

    async enterInvalidNumber(): Promise<void> {
        await Actions.type(this.numberInput, '34')
    };



}