# expressjs-template
This is a starter template/boiler plate for expressjs

#### This is meant for nodejs/expressjs API app
It allows expressjs developer to start developing without worrying about setting up development environment from scratch each time.

## Setup
- Clone
- Terminal/CLI command: `npm install` to install dependencies
- Terminal/CLI command: `npm run setup:env` or `cp .env.example .env` to create .env file based on the .env.example file. Setup the created .env file
  - The `NODE_ENV`: This app maintains one of the three environments (env(s)) at a time, `production`, `development`, or `test`
  - To switch to any env
    - Stop the server if currently running
    - Set the key `NODE_ENV` in the `.env` file to `production`, `development`, or `test`.
    - setup your yahoo mail or gmail and get credential for sending mail
- Start the app in dev mode: `npm run dev` or prod mode: `npm run start`. However, regardless of any of these commands, what ever is set in NODE_ENV is assume the current NODE Environment.

## Routes
Base route: `/api/v1`

## Usage
API documentation has not been prepared yet.

## Routes
Base route: `/api/v1`

#### Users resource
- `/users` create a user, method: `POST`
- `/users` list all users, method `GET`
- `/users/:id` get a single user, method `GET`
- `/users/:id` update a user method `PUT/PATCH`
- `/users/:id` delete users method `DELETE`
- `/users/login` login a user method `POST`
- `/users/reset-password`, handles the password resetting, `PATCH` 
- `/users/password-reset`, show the view/template/html/page for resetting password
- `/users/change-password`, allows auth user to change their password
- `/users/forgot-password`, process forget password request, `POST`
- `/users/verify-email?token=` verifies user email, method: `GET`

```
/**
 *
 * User request body ...POST/PUT/PATCH
 *
 * {
 *  "firstName": "string",
 *  "lastName": "string",
 *  "email": "string@example.com",
 *  "password": "string",
 * }
 */
```
