package ru.ifmo.tpo.pages;

import static com.codeborne.selenide.Selenide.*;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;

public class LoginPage {
    private SelenideElement acceptTermsButton = $x("//a[contains(@class, 'mls_btn bt30_green agree wl_green_btn js-close_warning')]");
    private SelenideElement openLoginModalButton = $x("//a[contains(@class, 'join_btn')]/span");
    public SelenideElement loginModal = $x("//div[contains(@class, 'login_popup')]");
    public SelenideElement loginFormContent = $x("//form[contains(@class, 'login_form form main_login_form')]/div[contains(@class, 'form_data')]");
    public ElementsCollection errorMessages = loginFormContent.$$x("descendant::div[contains(@class, 'form_errors_row')]");
    public SelenideElement inputUsername = loginFormContent.$x("descendant::div[contains(@class, 'bcf_row form_row')]//input[contains(@class, 'bcf_control') and contains(@name, 'log_in[username]')]");
    public SelenideElement inputPassword = loginFormContent.$x("descendant::div[contains(@class, 'bcf_row form_row')]//input[contains(@class, 'bcf_control') and contains(@name, 'log_in[password]')]");
    public SelenideElement submitButton = loginFormContent.$x("descendant::div[contains(@class, 'form_actions')]/button[contains(@class, 'fa_btn bt30 bt30_green btn_blue')]");

    public LoginPage open() {
        openAndAcceptTermsModal();
        openLoginModalButton.click();
        return this;
    }

    public LoginPage typeUserName(String username) {
        inputUsername.val(username);
        return this;
    }

    public LoginPage typePassword(String password) {
        inputPassword.val(password);
        return this;
    }

    public void clickSubmit() {
        submitButton.click();
    }

    public void openAndAcceptTermsModal() {
        Selenide.open("/");
        acceptTermsButton.click();
    }

    public ElementsCollection errorMessages() {
        return errorMessages;
    }
}
