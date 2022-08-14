import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Open empty basket @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const basket = poManager.getBasketPage()

    await basePage.openBasePage()

    await basePage.openBasket()

    await basket.validateEmptyBasket()



});