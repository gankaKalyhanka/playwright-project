import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {URL} from "../helpers/urls";
import {Assertions} from "../helpers/assertions";

export class BasePage {
    protected page: Page
    private searchInput: Locator
    private searchResult: Locator
    private login: Locator
    private currencyLink: Locator
    private realEstateLink: Locator
    private basket: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.locator("//*[@class='fast-search__input']")
        this.searchResult = this.page.locator("//*[@class='button button_orange product__button']").first()
        this.login = this.page.locator("//*[contains(text(),'Вход')]")
        this.currencyLink = this.page.locator("//*[@class='_u js-currency-amount']")
        this.searchResult = this.page.locator("//*[@placeholder=\"Поиск\"]")
        this.realEstateLink = this.page.locator(("//*[@id=\"container\"]/div/div/header/div[2]/div/nav/ul[1]/li[4]/a/span"))
        this.basket = this.page.locator('[title=\'Корзина\']')

    }

    async openBasePage(): Promise<void> {
        await Actions.goTo(this.page, URL.base)
    };

    async enterDataInSearchInput(): Promise<void> {
        await this.searchInput.type('Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)', {delay: 100})
        await Actions.pressButton(this.searchInput, 'Enter');
    };

    async enterInvalidDataInSearchInput(): Promise<void> {
        await this.searchInput.type('3243434343434343', {delay: 100})
        await Actions.pressButton(this.searchInput, 'Enter');
    }

    async openCurrencyPage(): Promise<void> {
        await Actions.click(this.currencyLink)
    };

    async openLoginPage(): Promise<void> {
        await Actions.click(this.login)
    };

    async openRealEstatePage(): Promise<void> {
        await Actions.click(this.realEstateLink)
    };

    async openBasket(): Promise<void> {
        await Actions.click(this.basket)
    };

   }
