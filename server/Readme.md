# Routes

### POST /v1/auth/signup

- Register a new user

- Request Body:

```json
{
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string"
}
```

### POST /v1/auth/login

- Login a user

- Request Body:

```json
{
    "email": "string",
    "password": "string"
}
```
