<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API

API using Node.js + NestJS + MongoDB.

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- Content
    - [Stack](#stack)
    - [Installation](#installation)
    - [Running](#running)
    - [Tests](#tests)

<!-- /TOC -->

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->
## Stack <a name="stack"></a>
- Used in this project:
  - [Node.js](https://nodejs.org/)
  - [NestJS](https://nestjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose ODM](https://mongoosejs.com/)
  - [Jest](https://jestjs.io/)
  - [Swagger](https://swagger.io/)

<!-- /TOC -->

## Installation <a name="installation"></a>

Clone repository

```bash
# Using SSL method.
$ git clone git@github.com:tcsoares1914/nest-mongo-api.git
```

Access repository directory.

```bash
# Copy .env.example as .env.
$ cd nest-mongo-api/
```

Make a copy of .env for project.

```bash
# Copy .env.example as .env.
$ cp .env.example .env
```

## Running <a name="running"></a>

Make shure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

```bash
# Start application containers.
$ docker-compose up -d
```

```bash
# Install application dependencies.
$ yarn install
```

## Test <a name="tests"></a>

```bash
# Run unit tests.
$ yarn test

# Run test coverage.
$ yarn test:cov