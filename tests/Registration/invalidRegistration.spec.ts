import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Invalid Registration @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const loginPage = poManager.getLoginPage()
    const registrationPage = poManager.getRegistrationPage()

    await basePage.openBasePage()
    await basePage.openLoginPage()

    await loginPage.clickOnRegisterButton()
    await registrationPage.checkboxIsChecked()
    await registrationPage.pressAtRegisterButton()
    await registrationPage.checkInvalidRegistrationMessage()


});