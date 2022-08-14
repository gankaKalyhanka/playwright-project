import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {Assertions} from "../helpers/assertions";

export class BasketPage {
    protected page: Page
    private emptyBasketMessage: Locator
    private productInBasket: Locator
    private validateDeleteProductText: Locator
    private deleteProductButton: Locator
    private returnDeletedProduct: Locator
    private submitOrderButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.emptyBasketMessage = this.page.locator("[class='cart-message__title cart-message__title_big']")
        this.productInBasket = this.page.locator('//*[contains(text(),\'Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)\')]')
        this.validateDeleteProductText = this.page.locator("//*[contains(text(),'Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)')]")
        this.deleteProductButton = this.page.locator("[class='cart-form__control']").first()
        this.returnDeletedProduct = this.page.locator('//*[contains(text(),\'Вернуть товар\')]')
        this.submitOrderButton = this.page.locator('//*[contains(text(),\'Перейти к оформлению\')]')

    }

    async validateEmptyBasket(): Promise<void> {
        await Assertions.containsText(this.emptyBasketMessage, 'Ваша корзина пуста\n')
    };

    async validateProductInTheBasket(): Promise<void>{
        await Assertions.containsText(this.productInBasket, 'Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)')
    }

    async deleteProduct(): Promise<void>{
        await this.page.hover('[class=\'cart-form__offers-part cart-form__offers-part_action\']')
        await Actions.click(this.deleteProductButton)

    }

    async validateDeleteProductInTheBasket(): Promise<void>{
        await Assertions.containsText(this.validateDeleteProductText, 'Вы удалили Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)')
    }

    async returnDeletedProductToTheBasket(): Promise<void> {
        await Actions.click(this.returnDeletedProduct)
    };

    async pressAtSubmitOrderButton(): Promise<void> {
        await Actions.click(this.submitOrderButton)
    };


}
