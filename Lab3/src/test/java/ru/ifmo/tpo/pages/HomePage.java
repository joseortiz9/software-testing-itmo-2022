package ru.ifmo.tpo.pages;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.Keys;

import static com.codeborne.selenide.Selenide.*;
import static java.lang.String.format;

public class HomePage {

    private final SelenideElement acceptTermsButton = $x("//a[contains(@class, 'mls_btn bt30_green agree wl_green_btn js-close_warning')]");

    public final ElementsCollection categoriesTabs = $$x("//ul[contains(@class, 'listing_tabs')]");

    public HomePage open() {
        Selenide.open("/");
        acceptTermsModal();
        return this;
    }

    public void acceptTermsModal() {
        acceptTermsButton.click();
    }

    public HomePage sleepThread(long milliseconds) {
        sleep(milliseconds);
        return this;
    }
}

