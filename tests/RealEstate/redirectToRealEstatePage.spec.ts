import {test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Redirect to real estate page @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const realEstatePage = poManager.getRealEstatePage()
    await basePage.openBasePage()

    await basePage.openRealEstatePage()
    await realEstatePage.openFirstFlatInCatalog()
    await realEstatePage.validateDataInFlatPage()

});