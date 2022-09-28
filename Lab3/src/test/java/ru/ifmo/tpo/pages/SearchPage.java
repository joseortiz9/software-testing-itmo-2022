package ru.ifmo.tpo.pages;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.Keys;

import static com.codeborne.selenide.Selenide.*;
import static java.lang.String.format;

public class SearchPage {
    private final SelenideElement terms18plusContainer = $x("//div[contains(@class, 'warning_popup important_popup')]//div[contains(@class, 'popup_18_plus')]");
    private final SelenideElement acceptTermsButton = $x("//a[contains(@class, 'mls_btn bt30_green agree wl_green_btn js-close_warning')]");
    public final SelenideElement inputSearch = $x("//div[contains(@class, 'hn_search bc_flex js-hn_search')]/input[contains(@class, 'hns_input js-hns_input')]");
    public final SelenideElement submitSearchButton = $x("//div[contains(@class, 'hn_search bc_flex js-hn_search')]/button[contains(@class, 'js-hns_submit hns_submit')]");
    public final SelenideElement searchContainer = $x("//div[contains(@class, 'listing_search_result')]");
    public ElementsCollection modelsResultsGrid = $$x("//div[contains(@class, 'mls_models')]");
    public SelenideElement recommendationsResultsModal = $x("//div[contains(@class, 'js-hns_result_wrp')]");
    public ElementsCollection recommendationsResultsList = recommendationsResultsModal.$$x("descendant::div//div[contains(@class, 'hsr_list')]/a");
    public SelenideElement recommendationsResultsModalEmpty = recommendationsResultsModal.$x("descendant::div//div[contains(@class, 'header_search_result __empty')]");

    public SearchPage open() {
        Selenide.open("/");
        acceptTermsModal();
        return this;

    }

    public SearchPage typeSearch(String input) {
        inputSearch.val(input);
        return this;
    }

    public void clickSubmit() {
        inputSearch.click();
        inputSearch.sendKeys(Keys.ENTER);
        inputSearch.sendKeys(Keys.RETURN);
        inputSearch.pressEnter();
        submitSearchButton.click();
    }

    public SelenideElement getSearchResult() {
        return searchContainer.$x("descendant::div[contains(@class, 'lsr_i_item')]");
    }

    public SelenideElement getSearchedName() {
        return searchContainer.$x("descendant::div[contains(@class, 'lsr_param __close')]");
    }

    public void acceptTermsModal() {
        if (terms18plusContainer.isDisplayed()) {
            acceptTermsButton.click();
        }
    }

    public SearchPage sleepThread(long milliseconds) {
        sleep(milliseconds);
        return this;
    }
}
