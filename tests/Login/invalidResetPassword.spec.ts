import { test} from "@playwright/test";
import PageFactory from "../../pages/pageFactory";

test('Invalid reset password @smoke', async ({ page }) => {


    const poManager = new PageFactory(page);
    const basePage = poManager.getBasePage();
    const loginPage = poManager.getLoginPage()
    const resetPasswordPage = poManager.getResetPasswordPage()

    await basePage.openBasePage()
    await basePage.openLoginPage()

    await loginPage.pressAtResetPasswordButton()
    await resetPasswordPage.confirmResetPassword()
    await resetPasswordPage.validateErrorMessage()


});