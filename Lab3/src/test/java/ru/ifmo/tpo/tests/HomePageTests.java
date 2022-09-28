package ru.ifmo.tpo.tests;

import com.codeborne.selenide.CollectionCondition;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
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

    @DisplayName("on search show results according to name")
    @ParameterizedTest(name = "[{index}] searchInput: {0}")
    @ValueSource(strings = {"anna"})
    void testSearchFilterByName(String input) {
    }

    @DisplayName("on search show no results according to name")
    @ParameterizedTest(name = "[{index}] searchInput: {0}")
    @ValueSource(strings = {"github"})
    void testSearchFilterByNonExistingName(String input) {
    }
}
