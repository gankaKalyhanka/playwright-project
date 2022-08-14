import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Login With Empty Email @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const loginPage = poManager.getLoginPage()

    await basePage.openBasePage()
    await basePage.openLoginPage()

    await loginPage.enterPassword()
    await loginPage.checkEmptyLoginMessage()

});