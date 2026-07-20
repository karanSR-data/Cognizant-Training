# spring-learn-security-jwt

A Spring Boot project demonstrating stateless authentication with Spring
Security and JWTs.

## Structure

```
spring-learn-security-jwt
src/main/java/com/cognizant/springlearn/
│
├── SpringLearnApplication.java
│
├── controller/
│      ├── HelloController.java
│      └── AuthenticationController.java
│
├── security/
│      ├── SecurityConfig.java
│      ├── JwtUtil.java
│      └── JwtRequestFilter.java
│
└── model/
       └── AuthenticationRequest.java
```

## How it works

1. `POST /authenticate` with a JSON body `{"username": "user", "password": "password"}`
   is validated against the in-memory `UserDetailsService` configured in
   `SecurityConfig`. On success it returns a signed JWT: `{"token": "..."}`.
2. `GET /hello` is protected. Call it with the JWT in the `Authorization`
   header as `Bearer <token>`.
3. `JwtRequestFilter` runs once per request, extracts and validates the
   token, and (if valid) populates the `SecurityContext` so downstream
   controllers see an authenticated user.
4. `JwtUtil` handles token creation, parsing, and validation using the
   `jjwt` library (HS256, 1-hour expiry, demo-only in-memory signing key).

## Default credentials (demo only)

- username: `user`
- password: `password`

## Build & Run

```bash
mvn clean install
mvn spring-boot:run
```

## Try it

```bash
# Get a token
curl -X POST http://localhost:8080/authenticate \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"password"}'

# Call the protected endpoint
curl http://localhost:8080/hello \
  -H "Authorization: Bearer <token-from-above>"
```

## Test

```bash
mvn test
```
