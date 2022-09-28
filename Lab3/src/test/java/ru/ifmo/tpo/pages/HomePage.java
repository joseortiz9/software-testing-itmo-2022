package ru.ifmo.tpo.pages;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.Keys;

import static com.codeborne.selenide.Selenide.*;
import static java.lang.String.format;

public class HomePage {
    private final SelenideElement terms18plusContainer = $x("//div[contains(@class, 'warning_popup important_popup')]//div[contains(@class, 'popup_18_plus')]");
    private final SelenideElement acceptTermsButton = $x("//a[contains(@class, 'mls_btn bt30_green agree wl_green_btn js-close_warning')]");
    public final ElementsCollection categoriesTabs = $$x("//ul[contains(@class, 'listing_tabs')]/li");
    public ElementsCollection modelsResultsGrid = $$x("//div[contains(@class, 'mls_models')]/div");
    public SelenideElement modelDetailsHolder = $x("//div[contains(@class, 'mp_details_holder')]");

    public HomePage open() {
        Selenide.open("/");
        acceptTermsModal();
        return this;
    }

    public SelenideElement getTabLinkByDataType(String dataType) {
        return categoriesTabs.findBy(Condition.attribute("data-type", dataType));
    }

    public SelenideElement getFirstModelStreamLink() {
        return modelsResultsGrid.first().$x("descendant::a[contains(@class, 'lst_wrp lst_link js-thl')]");
    }

    public void acceptTermsModal() {
        if (terms18plusContainer.isDisplayed()) {
            acceptTermsButton.click();
        }
    }

    public HomePage sleepThread(long milliseconds) {
        sleep(milliseconds);
        return this;
    }
}

