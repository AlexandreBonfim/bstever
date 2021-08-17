# BSTEVER Challenge

Welcome to the backend project.

The backend is a Node Express app written in TypeScript. The book-club main file is `./src/index.ts` which starts the server and loads all the other modules and routes. Each module lives in its own folder within the `./src` folder.

## Pre-requisites

You will need the following already installed:

- `node` (v.14.5)
- `yarn`

## Setup

In order to start the backend server, follow these steps:

- Open a terminal in the `/bstever` folder
- Install packages using `yarn`
- Run the server using `yarn dev`
- Check the server is running correctly by perform a GET request to http://localhost:4000/books/suggestions?userId=1&clubId=2

## Tests

You can run the test suites via the `yarn test` command in the `./bstever` folder.
