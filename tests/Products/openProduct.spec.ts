import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Open product @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const productPage = poManager.getProductPage()
    const searchIframePage = poManager.getSearchIframePage()

    await basePage.openBasePage()

    await basePage.enterDataInSearchInput()

    await searchIframePage.openProduct()

    await productPage.vadidateProduct()

});