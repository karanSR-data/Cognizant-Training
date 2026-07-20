# spring-learn

A minimal Spring Boot learning project.

## Structure

```
spring-learn/
│
├── pom.xml
├── README.md
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       └── SpringLearnApplication.java
│   │   │
│   │   └── resources/
│   │       ├── application.properties
│   │       └── date-format.xml
│   │
│   └── test/
│       └── java/
│           └── com/cognizant/springlearn/
│               └── SpringLearnApplicationTests.java
```

## Build & Run

```bash
mvn clean install
mvn spring-boot:run
```

## Test

```bash
mvn test
```
