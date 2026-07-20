# spring-learn

A Spring Boot learning project demonstrating controllers, a service layer,
a custom exception, and XML-based bean configuration for a `Country` model.

## Structure

```
spring-learn
│
├── src/main/java/com/cognizant/springlearn/
│
│   ├── SpringLearnApplication.java
│   │
│   ├── controller/
│   │     ├── HelloController.java
│   │     └── CountryController.java
│   │
│   ├── service/
│   │     └── CountryService.java
│   │
│   ├── service/exception/
│   │     └── CountryNotFoundException.java
│   │
│   └── Country.java
│
├── src/main/resources/
│   │
│   ├── country.xml
│   └── application.properties
│
└── src/test/java/
    │
    └── SpringLearnApplicationTests.java
```

## Endpoints

- `GET /hello` — returns a simple greeting.
- `GET /countries` — returns all countries loaded from `country.xml`.
- `GET /countries/{code}` — returns a single country by its code, or a
  404 with an error message if not found (via `CountryNotFoundException`).

## Build & Run

```bash
mvn clean install
mvn spring-boot:run
```

## Test

```bash
mvn test
```
