import { Page, Locator } from '@playwright/test';
import {Assertions} from "../helpers/assertions";

export class CurrencyPage {
    protected page: Page
    private usd: Locator
    private eur: Locator
    private rub: Locator

    constructor(page: Page) {
        this.page = page;
        this.usd = this.page.locator("//*[@class='abbr rate']").first()
        this.eur = this.page.locator("//*[contains(text(),'1 EUR')]")
        this.rub = this.page.locator("//*[contains(text(),'100 RUB')]")

    }

   async validateCurrencies(): Promise<void> {

       await Assertions.containsText(this.usd, "1 USD")
        await Assertions.containsText(this.eur, "1 EUR")
        await Assertions.containsText(this.rub, "100 RUB")
   };




}