package ru.ifmo.tpo.tests;

import com.codeborne.selenide.CollectionCondition;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.pages.HomePage;
import ru.ifmo.tpo.pages.SearchPage;

import static com.codeborne.selenide.Selenide.sleep;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@BongaCamsTests
@DisplayName("home ui tests")
public class HomePageTests {
    private final HomePage page = new HomePage();

    @BeforeEach
    void setUp() {
    }

    @DisplayName("show models according to selected category")
    @ParameterizedTest(name = "[{index}] category: {0}")
    @CsvSource({"female,Женщины", "male,Мужчины", "transsexual,Транс"})
    void testShowModelsFromSelectedCategory(String dataType, String genderIndicator) {
        page.open().getTabLinkByDataType(dataType).click();
        sleep(2000);
        page.getFirstModelStreamLink().click();
        sleep(2000);
        assertTrue(page.modelDetailsHolder.getText().contains(genderIndicator));
    }
}
