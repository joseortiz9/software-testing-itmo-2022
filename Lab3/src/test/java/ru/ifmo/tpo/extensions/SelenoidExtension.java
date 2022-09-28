package ru.ifmo.tpo.extensions;

import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import ru.ifmo.tpo.utils.CustomConfig;

import java.util.HashMap;
import java.util.Map;

import static com.codeborne.selenide.Configuration.*;
import static java.lang.String.format;


public class SelenoidExtension implements BeforeAllCallback {
    private final CustomConfig config = CustomConfig.getInstance();

    @Override
    public void beforeAll(ExtensionContext context) throws Exception {
        browserCapabilities.setCapability("selenoid:options", readOptions("enableVNC", "enableVideo"));
    }

    private Map<String, Object> readOptions(String... keys) {
        Map<String, Object> options = new HashMap<>();
        for (var key : keys) {
            options.put(key, config.getPropertyAsBool(format("selenoid.%s", key)));
        }
        return options;
    }
}
