
# Guidio Backend repository
***

This repository contains FastAPI backend and communication with database.

## How to run
***

**Dependencies:**
- [Python 3.11] (https://www.python.org/downloads/)
- [PostgreSQL] (https://www.postgresql.org/download/)
- *Optional* - [PgAdmin] (https://www.pgadmin.org/download/)

### How to run - PyCharm
***

1) Run terminal and navigate to desired project folder
2) To clone repository, run *one* of following commands:
   - ssh (preferred): `git clone git@github.com:ogi1998/Guidio-Backend.git`
   - https: `git clone https://github.com/ogi1998/Guidio-Backend.git`
   - GitHub CLI: `gh repo clone ogi1998/Guidio-Backend`
3) Run PyCharm IDE and open cloned project
4) Configure Python interpreter:
   1) Go to Settings and find *Python interpreter*
   2) Select Add interpreter -> Add Local interpreter
   3) Add interpreter where Location is current project and Python version 3.11
5) Run `git pull origin main`
6) Run `pip install -r requirements.txt`
7) Create *.env* file in project root directory
   1) Copy and paste content from *.env.example* file to *.env* file
   2) Modify content inside *.env* file 
8) Select dropdown in the upper side of the window with the name: Current file
   1) Select Edit Configurations
   2) Select Add new run configuration
      1) Choose FastAPI
      2) Name your configuration (e.g. Guidio-Backend)
      3) Select *main.py* as Application file
9) Run `alembic upgrade head` to apply latest database migrations
10) Run server using *Run* button
11) Access SwaggerUI using: http://127.0.0.1:8000/docs
