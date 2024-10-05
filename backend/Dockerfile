FROM python:3.12-alpine3.20 AS requirements-stage

WORKDIR /tmp

RUN pip install poetry

COPY ./pyproject.toml ./poetry.lock* /tmp/

RUN poetry export -f requirements.txt --output requirements.txt --without-hashes

FROM python:3.12-alpine3.20

WORKDIR /code

COPY --from=requirements-stage /tmp/requirements.txt /code/requirements.txt

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 pip install --no-cache-dir --upgrade -r /code/requirements.txt && \
 apk --purge del .build-deps

COPY . .

ENV PYTHONPATH "${PYTHONPATH}:./src"
ENV PYTHONUNBUFFERED 1