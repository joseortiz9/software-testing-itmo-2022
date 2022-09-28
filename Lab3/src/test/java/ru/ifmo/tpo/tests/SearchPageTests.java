package ru.ifmo.tpo.tests;

import com.codeborne.selenide.CollectionCondition;
import com.codeborne.selenide.SelenideElement;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.pages.SearchPage;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.sleep;
import static org.junit.jupiter.api.Assertions.*;

@BongaCamsTests
@DisplayName("Search models/tags")
public class SearchPageTests {
    private final SearchPage page = new SearchPage();

    @BeforeEach
    void setUp() {
    }

    @DisplayName("on search show results inside recommendations modal with no results")
    @ParameterizedTest(name = "[{index}] searchInput: {0}")
    @ValueSource(strings = {"apppppp"})
    void testSearchFilterByNameRecommendationsModalNoResults(String input) {
        page.open();
        page.inputSearch.click();
        page.typeSearch(input);
        sleep(3000);
        assertTrue(page.recommendationsResultsModalEmpty.getText().contains("Нет результатов"));
    }

    @DisplayName("on search show results inside recommendations modal")
    @ParameterizedTest(name = "[{index}] searchInput: {0}")
    @ValueSource(strings = {"leeloo"})
    void testSearchFilterByNameRecommendationsModal(String input) {
        page.open();
        page.inputSearch.click();
        page.typeSearch(input);
        sleep(3000);
        page.recommendationsResultsList.shouldHave(CollectionCondition.sizeGreaterThanOrEqual(1));
        for (SelenideElement modelElement: page.recommendationsResultsList) {
            System.out.println(modelElement.getText().toLowerCase() + " - " + input);
            assertTrue(modelElement.getText().toLowerCase().contains(input));
        }
    }

    @DisplayName("on search show results according to name")
    @ParameterizedTest(name = "[{index}] searchInput: {0}")
    @ValueSource(strings = {"anna"})
    void testSearchFilterByName(String input) {
        page.open().typeSearch(input).clickSubmit();
        sleep(3000);
        assertFalse(page.getSearchResult().getText().contains("По вашему запросу ничего не найдено."));
        assertTrue(page.getSearchResult().getText().contains("Результат поиска:"));
        assertTrue(page.getSearchedName().getText().contains("Поиск: " + input));
        page.modelsResultsGrid.shouldHave(CollectionCondition.sizeGreaterThanOrEqual(1));
    }

    @DisplayName("on search show no results according to name")
    @ParameterizedTest(name = "[{index}] searchInput: {0}")
    @ValueSource(strings = {"github"})
    void testSearchFilterByNonExistingName(String input) {
        page.open().typeSearch(input).clickSubmit();
        sleep(3000);
        assertTrue(page.getSearchResult().getText().contains("По вашему запросу ничего не найдено."));
        assertTrue(page.getSearchResult().getText().contains("Результат поиска:"));
        assertTrue(page.getSearchedName().getText().contains("Поиск: " + input));
    }

    @DisplayName("filter models by region")
    @ParameterizedTest(name = "[{index}] region: {0}")
    @CsvSource({"latin_america,Латиноамериканское"})
    void testFilterModelsByRegion(String regionCheckboxValue, String regionIndicator) {
        page.open().openFiltersModal().setRegionFilterAndSend(regionCheckboxValue);
        sleep(2000);
        page.getFirstModelStreamLink().click();
        sleep(2000);
        assertTrue(page.modelDetailsHolder.getText().contains(regionIndicator));
    }
}
