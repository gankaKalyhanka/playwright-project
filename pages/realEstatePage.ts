import { Page, Locator } from '@playwright/test';
import Actions from "../helpers/actions";
import {Assertions} from "../helpers/assertions";

export class RealEstatePage {
    protected page: Page
    private firstFlatInCatalog: Locator
    private floor: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstFlatInCatalog = this.page.locator("//*[@class=\"classified__handle\"]").first()
        this.floor = this.page.locator("//*[contains(text(),'Этаж')]")

    }

    async openFirstFlatInCatalog(): Promise<void> {
        await Actions.click(this.firstFlatInCatalog)
    };

    async validateDataInFlatPage(): Promise<void> {
        await Assertions.containsText(this.floor, "Этаж")

    };

}
