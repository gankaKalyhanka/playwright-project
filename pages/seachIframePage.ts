import {Page} from '@playwright/test';
import Actions from "../helpers/actions";

export class SeachIframePage {
    protected page: Page
    private iframe: any
    private search: any
    private product: any

    constructor(page: Page) {
        this.page = page;
        this.iframe = this.page.frame("[class='modal-iframe']")
        this.search = this.page.frameLocator("//*[@placeholder=\"Поиск\"]")
        this.product = this.page.frameLocator("a:has-text('Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)')")

    }


    async openProduct(): Promise<void> {
        const frame = this.page.frameLocator("[class='modal-iframe']")
        await Actions.click(await frame.locator("a:has-text('Велосипед Stels Navigator 400 MD 24 F010 2020 (синий)')"))
    };


}