# STREAMER - Back End React App
Currently used and tested, stable Nodejs version - 16.15.1
Stack - Nest.js, sqlite3, typeorm, class-transformer, class-validator

### FRONTEND-info

Please use the following link: [LINK](https://github.com/KordianKorsakowski/streamers-fe) to access the frontend part of the application. All the configuration information can be found in the readme file

### General Info
The application allows for managing a simple database that stores information about streamers. You can find the list of requests in the "src/streamers/request.http" file(please remember to build and run the project)
### Setup
A simple backend application allowing communication on port 5000 was built using the NEST.js framework. The file structure reflects the pattern imposed by the framework's creators.

The application utilizes middlewares, dtos, exceptions, and interceptors. SQLite was used as the database, and its handling was done through TypeORM.

To maintain a consistent coding style and syntax, tools such as ESLint and Prettier were utilized, with their rules defined in configuration files.

Git was used as the version control system, and the repository is hosted on GitHub. The project structure was carefully designed to facilitate development and maintenance. The adoption of good programming practices (DRY, KISS, DDD) aims to ensure clean and readable code.
## Installation
Installing dependencies:

```cmd
streamers-be> npm i
```

## Running the app
development:

 ```cmd
streamers-be> npm run start
```

watch mode:

 ```cmd
streamers-be> npm run start:dev
```

watch mode:

 ```cmd
streamers-be> npm run start:dev
```
