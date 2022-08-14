import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Return deleted from the basket @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const productPage = poManager.getProductPage()
    const searchIframePage = poManager.getSearchIframePage()
    const basket = poManager.getBasketPage()

    await basePage.openBasePage()

    await basePage.enterDataInSearchInput()

    await searchIframePage.openProduct()

    await productPage.vadidateProduct()

    await productPage.addProductToTheBasket()

    await productPage.goToTheBasket()
    await basket.validateProductInTheBasket()

    await basket.deleteProduct()

    await basket.validateDeleteProductInTheBasket()

    await basket.returnDeletedProductToTheBasket()
    await basket.validateProductInTheBasket()


});