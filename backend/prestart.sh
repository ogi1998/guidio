#!/usr/bin/env sh

# Wait for DB to start
python src/backend_pre_start.py

# Run migrations
alembic upgrade head

# Create initial data in DB
python src/initial_data.py