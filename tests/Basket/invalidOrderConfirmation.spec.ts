import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Invalid order confirmation @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const productPage = poManager.getProductPage()
    const searchIframePage = poManager.getSearchIframePage()
    const basket = poManager.getBasketPage()
    const submitOrderPage = poManager.getOrderConfirmationPage()

    await basePage.openBasePage()

    await basePage.enterDataInSearchInput()

    await searchIframePage.openProduct()

    await productPage.vadidateProduct()

    await productPage.addProductToTheBasket()

    await productPage.goToTheBasket()
    await basket.validateProductInTheBasket()

    await basket.pressAtSubmitOrderButton()

    await submitOrderPage.enterInvalidNumber()
    await submitOrderPage.pressAtSubmitNumberButton()
    await submitOrderPage.validateInvalidNumberError()


});