package ru.ifmo.tpo.tests;

import com.codeborne.selenide.Selenide;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.pages.LoginPage;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Condition.visible;
import static org.junit.jupiter.api.Assertions.*;

@BongaCamsTests
@DisplayName("Log in form functionalities")
public class LoginPageTest {
    private final LoginPage page = new LoginPage();

    @BeforeEach
    void setUp() {
    }

    @DisplayName("Test with empty fields")
    @Test
    void testWithEmptyFields() {
        page.open().clickSubmit();
        // assertion
        page.loginModal.shouldBe(exist).shouldBe(visible);
        page.errorMessages()
                .findBy(text("Неверное имя пользователя или пароль."))
                .shouldBe(exist)
                .shouldBe(visible);
    }

    @DisplayName("Test with empty password field")
    @ParameterizedTest(name = "[{index}] username: {0}")
    @ValueSource(strings = {
            "tpot3st3r69",
    })
    void testWithEmptyPasswordField(String username) {
        page.open().typeUserName(username).clickSubmit();
        // assertion
        page.loginModal.shouldBe(exist).shouldBe(visible);
        page.errorMessages()
                .findBy(text("Неверное имя пользователя или пароль."))
                .shouldBe(exist)
                .shouldBe(visible);
    }

    @DisplayName("Test with empty username field")
    @ParameterizedTest(name = "[{index}] password: {0}")
    @ValueSource(strings = {
            "password123",
    })
    void testWithEmptyUsernameField(String password) {
        page.open().typePassword(password).clickSubmit();
        // assertion
        page.loginModal.shouldBe(exist).shouldBe(visible);
        page.errorMessages()
                .findBy(text("Неверное имя пользователя или пароль."))
                .shouldBe(exist)
                .shouldBe(visible);
        assertEquals(page.inputPassword.getText(), "");
    }

    @DisplayName("Test with invalid Credentials")
    @ParameterizedTest(name = "[{index}] username: {0} password: {1}")
    @CsvSource({"tpot3st3r69,password123"})
    void testWithInvalidCredentials(String username, String password) {
        page.open().typeUserName(username).typePassword(password).clickSubmit();
        // assertion
        page.loginModal.shouldBe(exist).shouldBe(visible);
        page.errorMessages()
                .findBy(text("Неверное имя пользователя или пароль."))
                .shouldBe(exist)
                .shouldBe(visible);
        assertEquals(page.inputPassword.getText(), "");
    }

    @DisplayName("Test with valid Credentials")
    @ParameterizedTest(name = "[{index}] username: {0} password: {1}")
    @CsvSource({"tpot3st3r,tpotester"})
    void testWithValidCredentials(String username, String password) {
        page.open().typeUserName(username).typePassword(password).clickSubmit();
        // assertion
        page.loginModal.shouldBe(exist).shouldNotBe(visible);
    }

}
