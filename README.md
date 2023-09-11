
# Guidio Backend repository
***

This repository contains FastAPI backend and communication with database.

## How to run
***

**Dependencies:**
- [Python 3.11] (https://www.python.org/downloads/)
- [PostgreSQL] (https://www.postgresql.org/download/)
- *Optional* - [PgAdmin] (https://www.pgadmin.org/download/)

***
### Run within poetry environment 
1) Install [poetry](https://python-poetry.org/docs/) and add to path
2) Open terminal and navigate to desired project location
3) To clone the repository, run *one* of following commands:
   - ssh (preferred): `git clone git@github.com:guidioproject/Guidio-Backend.git`
   - https: `git clone https://github.com/guidioproject/Guidio-Backend.git`
   - GitHub CLI: `gh repo clone guidioproject/Guidio-Backend`
4) Open project in desired code editor and run `poetry install`
5) After installation process is finished, run `poetry shell`
6) Create database through terminal or pgAdmin - [example](https://www.enterprisedb.com/postgres-tutorials/how-create-postgresql-database-and-users-using-psql-and-pgadmin)
7) Create `.env` file in root of the project.
8) Copy and paste contents from `.env.example` and replace `#` with proper values
   - Keep in mind that for development purposes, you must put the `dev` value under ENVIRONMENT variable
9) To run the project, run the following command: `poetry run guidio`
10) Access SwaggerUI using: http://127.0.0.1:8000/docs

### Run using docker
1) Make sure you have [docker](https://docs.docker.com/) installed and running
2) Open terminal and navigate to desired project location
3) To clone the repository, run *one* of following commands:
   - ssh (preferred): `git clone git@github.com:guidioproject/Guidio-Backend.git`
   - https: `git clone https://github.com/guidioproject/Guidio-Backend.git`
   - GitHub CLI: `gh repo clone guidioproject/Guidio-Backend`
4) Open the project in desired code editor and create `.env` file in root of the project.
5) Copy and paste contents from `.env.example` and replace `#` with proper values
   - Keep in mind that for development purposes, you must put the `dev` value under ENVIRONMENT variable
6) To run the project you must be in the root location and run `docker-compose up -d`
7) Access SwaggerUI using: http://127.0.0.1:8000/docs