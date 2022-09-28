package ru.ifmo.tpo.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Properties;

import static java.lang.Boolean.parseBoolean;

public class CustomConfig {

  private static final String FILE_NAME = "custom.properties";
  private static CustomConfig instance;
  private final Properties properties;

  private CustomConfig(ClassLoader classLoader) {
    properties = new Properties();
    try (InputStream stream = classLoader.getResourceAsStream(FILE_NAME)) {
      properties.load(stream);
    } catch (IOException exception) {
      throw new UncheckedIOException("Failed to read " + FILE_NAME + " file from classpath", exception);
    }
  }

  public synchronized static CustomConfig getInstance() {
    if (instance == null) {
      instance = new CustomConfig(Thread.currentThread().getContextClassLoader());
    }
    return instance;
  }

  public String getProperty(String key) {
    return properties.getProperty(key, "");
  }

  public boolean getPropertyAsBool(String key) {
    return parseBoolean(properties.getProperty(key, "false"));
  }
}
