import {test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Redirect to currency page @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const currencyPage = poManager.getCurrencyPage()
    await basePage.openBasePage()

    await basePage.openCurrencyPage()
    await currencyPage.validateCurrencies()

});