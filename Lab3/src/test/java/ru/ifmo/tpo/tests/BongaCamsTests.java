package ru.ifmo.tpo.tests;

import org.junit.jupiter.api.extension.ExtendWith;
import ru.ifmo.tpo.extensions.SelenoidExtension;

import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@ExtendWith(SelenoidExtension.class)
public @interface BongaCamsTests {
}