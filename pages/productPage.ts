import { Page, Locator } from '@playwright/test';
import {Assertions} from "../helpers/assertions";
import Actions from '../helpers/actions'


export class ProductPage {
    protected page: Page
    private productName: Locator
    private addToTheBasket: Locator
    private goToBasket: Locator



    constructor(page: Page) {
        this.page = page;
        this.productName = this.page.locator("[class='catalog-masthead__title js-nav-header']")
        this.addToTheBasket = this.page.locator('//*[contains(text(),\'В корзину\')]').first()
        this.goToBasket = this.page.locator("//*[contains(text(),'Перейти в корзину')]")

    }

    async vadidateProduct(): Promise<void> {
        await Assertions.containsText(this.productName, 'Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)')
    };

    async addProductToTheBasket(): Promise<void> {
        await Actions.click(this.addToTheBasket)
    };

    async goToTheBasket(): Promise<void> {
        await Actions.click(this.goToBasket);
    };


}