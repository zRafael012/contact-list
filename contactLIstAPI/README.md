
## 1. Endpoints

### Rotas e Endpoints

- User

  - POST - /users
  
### Body para a requisição:

```json
{
  "name": "Rafael Soares",
  "email": "email@mail.com",
  "password": "123456",
  "phone": "123456789",
  "secondEmail": "email2@mail.com",
  "secondPhone": "987654321"
}
```

### Resposta esperada:

```
STATUS: 201 Created
```

```json
{
  "id": "6b4ca418-37ca-4461-accf-b6becce9364d",
  "name": "Rafael Soares",
  "email": "email@mail.com",
  "password": "123456",
  "phone": "123456789",
  "secondEmail": "email2@mail.com",
  "secondPhone": "987654321",
  "isAdm": false,
  "createdAt": "2023-03-28T22:35:26.464Z",
  "updatedAt": "2023-03-28T22:35:26.464Z"
}
```

  - GET - /users/

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "id": "a4fb1c6f-4bd6-486f-b53f-cff4244e7f8f",
  "name": "Rafael Soares",
  "email": "email@email.com",
  "secondEmail": "email2@email.com",
  "phone": "123456789",
  "secondPhone": "987654321",
  "isAdm": false,
  "createdAt": "2023-03-23T23:59:44.405Z",
  "updatedAt": "2023-03-23T23:59:44.405Z",
  "contacts": [
    {
      "id": "fbd43bd7-276a-46f1-ab48-894c2e5b25af",
      "name": "Marcos",
      "email": "marcos@hotmail.com",
      "secondEmail": "marcos012@hotmail.com",
      "phone": "222444666",
      "secondPhone": "666888444",
      "createdAt": "2023-03-22T23:55:38.709Z",
      "updatedAt": "2023-03-23T13:22:10.016Z"
    }
  ]
}


  -PATCH - /users/:id

### Body para a requisição:

```json
{
  "email": "email@mail.com"
}
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "id": "6b4ca418-87ca-4461-accf-b6beaae9364d",
  "name": "Rafael Soares",
  "email": "email@mail.com",
  "secondEmail": "email2@mail.com",
  "phone": "123456789",
  "secondPhone": "987654321",
  "isAdm": false,
  "createdAt": "2023-03-23T12:35:26.464Z",
  "updatedAt": "2023-03-22T18:50:29.073Z"
}
```

  - DELETE - /users/:id

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 204 - No Content
```

-Login

  - POST /login

```json
{
  "email": "email@mail.com",
  "password": "senha123"
}
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG0iOmZhbHNlLCJpYXQiOjE2NzM4Nzg1NzgsImV4cCI6MTY3Mzk2NDk3OCwic3ViIjoiN2RiM2E4OGUtY2M2Zi00YTY4LWJkYmQtOWI4ZGM4N2EzZDE5In0.CdBo9mk-ZpJwgJX4hNEIXqXo_VLMe6XXZRy2f4W4JEs"
}
```

- Contacts

  - POST - /contacts

  ### Body para a requisição:

```json
{
  "name": "Gustavo Prado",
  "email": "gustavin333@gmail.com",
  "phone": "222333444",
  "secondEmail": "gustavindelas@hotmail.com",
  "secondPhone": "666555888",
  
}
```

### Exemplo de Response:

```
STATUS: 201 Created
```

```json
{
  "id": "51ed5d6a-6b71-4f6d-8ae1-6a968de3b09a",
  "name": "Gustavo Prado",
  "email": "gustavin333@gmail.com",
  "secondEmail": "gustavindelas@hotmail.com",
  "phone": "222333444",
  "secondPhone": "666555888",
  "createdAt": "2023-03-23T00:21:08.438Z",
  "updatedAt": "2023-03-23T00:21:08.438Z"
}
```

  - GET - /contacts ou /contacts/:id

  ## Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 200 Ok
```

```json
[
  {
  "id": "51ed5d6a-6b71-4f6d-8ae1-6a968de3b09a",
  "name": "Gustavo Prado",
  "email": "gustavin333@gmail.com",
  "secondEmail": "gustavindelas@hotmail.com",
  "phone": "222333444",
  "secondPhone": "666555888",
  "createdAt": "2023-03-23T00:21:08.438Z",
  "updatedAt": "2023-03-23T00:21:08.438Z"
}
]
```

  - PATCH - /contacts/:id

### Body para a requisição:

```json
{
  "email": "gustavin3343@gmail.com"
}
```

### Exemplo de Response:

```
STATUS: 200 OK
```

```json
{
  "id": "51ed5d6a-6b71-4f6d-8ae1-6a968de3b09a",
  "name": "Gustavo Prado",
  "email": "gustavin3343@gmail.com",
  "secondEmail": "gustavindelas@hotmail.com",
  "phone": "222333444",
  "secondPhone": "666555888",
  "createdAt": "2023-03-23T00:21:08.438Z",
  "updatedAt": "2023-03-23T00:21:08.438Z"
}
```


  -DELETE - /contacts/:id

### Body para a requisição:

```json
No-Body
```

### Exemplo de Response:

```
STATUS: 204 - No Content
```
