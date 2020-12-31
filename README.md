# expressjs-template
This is a starter template/boiler plate for expressjs

#### This is meant for nodejs/expressjs API app
It allows expressjs developers to start developing without worrying about setting up development environment from scratch each time.

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

## Usage
#### This is how the API documentation should be hosted/treated
As a backend or fullstack developer, to setup/modify and document your API do:
- `npm install apidoc -g`. We are using [apidocjs](https://apidocjs.com/#getting-started) to generate our documentation, so it need to be installed as a system/global package.
- Follow [apidocjs's](https://apidocjs.com/#param-api-param) rule/style/syntax/params and document your code as required.
- All written documentations are kept and is to be done in the: `documentations/routes/`
  - Each file in this folder should mimic the naming convention found in the files and folders in `./routes/` folders.
  - Example: We have `./routes/users.js` so also we should have `documentations/routes/users.js` as the docs for the said route: `users.js`.
- When you have finish writing your documentation, it is time to build it into static files (css, js, html, ...) this is handled by apidoc.
  - `npm run build:doc` This builds and dump it output of the doc into `documentations/doc`. You must run this command each time you a change to the docs at `documentations/routes/`

  - Currently we can not use `nodejs/expressjs` to serve this auto generated doc.

  - However, You can manually click at the `index.html` of this generated folder and work offline.

  - To have this available online: you need to host the api and set the server's public folder to `documentations/doc/`. and then update `./routes/docs.js`. Note that this does not replace hosting your application as dynamic app.

  - For this particular hosting, treated it like a static website and that is why we are to point the server towards `documentations/doc/` which contains the `index.html` that would be served by the hosting server, not expressjs.

  - The doc to this API, is currently hosted at netlify, it is the repo was was hosted and not the single folder `documentations/`. This way all changes to the doc is being picked by netlify for the code base when changes are made on on the repo/branch.

- You can also point your browser to `<host>/api/v1/docs` to access the docs; if you have hosted and updated `./routes/docs.js` except your are testing this template. It is also available [online here](https://expressjs-template.netlify.app/).

## Routes
Base route: `/api/v1`

#### Users resource
These has being define on the doc but not all. New resource will be written there instead.
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

## Test
To run test use `npm test`. Mocha chai are the testing library adopted for this projects.

## App Structure
This describes the project structure of this template
- `expressjs-template/`: The project/app/root folder/directory
  - `config/`: This contain configuration files, not really package configs which are on the root folder.
    - `env.js`: This access in group and exposes the key/value pairs defined in `.env` files
  - `controller/`: This is where the route handlers are kept
  - `documentation/`: Keeps information/files about how to use or consume the API
  - `logs/`: Holds logs files
  - `middlewares/`: holds codes that must execute before, or after a request is handled
  - `routes/`: contains our route files according to resource design
  - `services/`: contain helper and other secretarial errands needed by controller or by other application parts
  - `start/`: contain the files that control the app
  - `test/`: hold test for files, this the place where `mochajs` finds it test files.
  - `views/`: holds the template/view/html files for presentation where necessary
  - `.env`: contains environmental variables  created from `.evn.example` as described in the previous sections. **This file must and should not be committed to version control, thus must be ignore**.
  - `.env.example`: This is a blueprint of what `.env` should look like. .env keys must be in sync with .env.example.
  - `index.js`: is the server entry point
  - `eslintrc.js, mocharc.json, and prettierrc.json` contains configurations for eslint, mocha and prettier
  - `5.0.0-alpha.8`: This app is using the alpha 8 (suppose to be version 5 ) of the expressjs
  - `Procfile`: defines the app entry point
  - `package.json`: contains the app configuration

