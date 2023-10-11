### Install packages

```shell
npm i
```
---
### Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |
---
### Postman workspace
```bash
https://api.postman.com/collections/23892023-c84b2fb9-ae3f-4110-a0ba-7c3dba5acf62?access_key=PMAT-01HC2VG1M7DCNEMB065A3EZPFC
```
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

#### Porjects
```
http://localhost:8080/project
```
#### Receives JSON:
```
{
  "name": "Test Crear Proyecto para editar",
  "description": "Descripción del nuevo proyecto Con fecha inicio y finalizacion",
  "ownerId": "651f483e2afedc3b83cf39a6" ,
   "startDate": "2022-01-01T00:00:00Z",
   "endDate": "2022-01-31T00:00:00Z"
}
```

#### GetAll projects (authentication required)
```
http://localhost:8080/project
```
#### GetOne Project  (authentication required)
```
http://localhost:8080/project/:id
```
#### Update Project  (authentication required)
```
http://localhost:8080/project/:id
```
#### Receives JSON:
```
{
  "name": "Test Crear Proyecto para editar",
  "description": "Descripción del nuevo EDITADO proyecto Con fecha inicio y finalizacion",
  "ownerId": "651f483e2afedc3b83cf39a6" ,
  "startDate": "2023-01-01T00:00:00Z",
  "endDate": "2023-01-31T00:00:00Z"
}
```
#### Delete Project (can only delete itself)
```
http://localhost:8080/project/:id
```

#### Tasks
```
http://localhost:8080/tasks
```
#### Receives JSON:
```
{
  "name": "Test Crear Tarea ",
  "description": "Descripción de la tarea (opcional) 2 con fechas de inicio y final",
  "state": "Estado de la tarea 2",
  "assignedUsers": ["651edf96ddf5151f527ea41c", "651f483e2afedc3b83cf39a6"],
  "projectId": "651f49213ae83530883aa56b",  
   "startDate": "2022-01-01T00:00:00Z",
   "endDate": "2022-01-31T00:00:00Z"
}
```

#### GetAll Tasks (authentication required)
```
http://localhost:8080/task
```
#### GetOne Tasks  (authentication required)
```
http://localhost:8080/task/:id
```
#### Update Tasks  (authentication required)
```
http://localhost:8080/task/:id
```
#### Receives JSON:
```
{
  "name": "Test Crear Proyecto para editar",
  "description": "Descripción del nuevo EDITADO proyecto Con fecha inicio y finalizacion",
  "ownerId": "651f483e2afedc3b83cf39a6" ,
  "startDate": "2023-01-01T00:00:00Z",
  "endDate": "2023-01-31T00:00:00Z"
}
```
#### Delete Tasks (can only delete itself)
```
http://localhost:8080/task/:id
```