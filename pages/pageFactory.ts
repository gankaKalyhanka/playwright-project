import {BasePage} from "./basePage";
import {Page} from "@playwright/test";
import {LoginPage} from "./loginPage";
import {CurrencyPage} from "./currencyPage";
import {RealEstatePage} from "./realEstatePage";
import {ProductPage} from "./productPage";
import {SeachIframePage} from "./seachIframePage";
import {BasketPage} from "./basketPage";
import {OrderConfirmationPage} from "./orderConfirmationPage";
import {RegistrationPage} from "./registrationPage";
import {ResetPasswordPage} from "./resetPasswordPage";



class POManager {

    protected page: Page
    private basePage: any
    private loginPage: any
    private currencyPage: any
    private realEstatePage: any
    private productPage: any
    private searchIframePage: any
    private basketPage: any
    private orderConfirmationPage: any
    private registrationPage: any
    private resetPasswordPage: any


    constructor(page: Page)
    {
        this.page = page;
        this.basePage = new BasePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.currencyPage = new CurrencyPage(this.page)
        this.realEstatePage = new RealEstatePage(this.page)
        this.productPage = new ProductPage(this.page)
        this.searchIframePage = new SeachIframePage(this.page)
        this.basketPage = new BasketPage(this.page)
        this.orderConfirmationPage = new OrderConfirmationPage(this.page)
        this.registrationPage = new RegistrationPage(this.page)
        this.resetPasswordPage = new ResetPasswordPage(this.page)



    }

    getBasePage()
    {
        return this.basePage;
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getCurrencyPage()
    {
        return this.currencyPage;
    }

    getRealEstatePage()
    {
        return this.realEstatePage;
    }

    getProductPage()
    {
        return this.productPage;
    }

    getSearchIframePage()
    {
        return this.searchIframePage;
    }

    getBasketPage()
    {
        return this.basketPage;
    }

    getOrderConfirmationPage()
    {
        return this.orderConfirmationPage;
    }

    getRegistrationPage()
    {
        return this.registrationPage;
    }

    getResetPasswordPage()
    {
        return this.resetPasswordPage;
    }

}


export default POManager