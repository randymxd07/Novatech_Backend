<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This is a web platform to help users or companies that do not have knowledge of technology to be guided and advised so that they can have a successful digital transformation in their businesses or companies.

## Installation

### 1 - Clone the repository

```bash
git clone 
```

### 2 - Install the dependencies

```bash
yarn install
```

### 3 - Copy the ```.env.template``` file and rename it to ```.env``` and then put the values ​​of the variables

```env
# https://platform.openai.com/api-keys
OPENAI_API_KEY=

SERVER_URL=http://localhost:3000
```

### 4 - Run the application

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
