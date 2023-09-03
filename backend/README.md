### Install packages

```shell
npm i
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |
---
### End Points
#### Register Users
```
http://localhost:8080/auth/register
```
#### Receives JSON:
```
{
    "email": "admin2@test.com",
    "password": "123qwe",
    "username": "admin2"
}
```
#### Login
```
http://localhost:8080/auth/login
```
#### Receives JSON:
```
{
    "email": "admin@test.com",
    "password": "123qwe"
}
```

#### GetAll Users (authentication required)
```
http://localhost:8080/users
```
#### Update User (authentication required)
```
http://localhost:8080/users/:id
```
#### Delete User (can only delete itself)
```
http://localhost:8080/users/:id
```
