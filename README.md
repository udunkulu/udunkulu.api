# údúnkúlú  ```make gbedu dey play```
Music for Nigerian people by Nigerian artists!

#### This is the backend API for the údúnkúlú service
It prepares the API that the frontend part of the app can consume.

## Setup
- Clone : before cloning it is assumed that you have mongodb installed and optional mongodb GUI browser like `Mongodb Compass`
- Terminal/CLI command: `npm install` to install dependencies
- Terminal/CLI command: `npm run setup:env` to create `.env` file based on the `.env.example` file. This command creates the file along with error message in Windows, Linux or MacOS printed command prompt, bash or terminal. This is fine it is due to the command used, one tries for Windows if fails it try for Linux/Mac.

- Setup the created `.env` file
  - The `NODE_ENV`: This app maintains one of the three environments (env(s)) at a time, `production`, `development`, or `test`.
  - An environment is changed or switched when the server is started or ran in any of this mode. Check starting the app in a different env for more info.
  - Setup your yahoo mail service and get credentials for sending mail...use those credentials to update `.env` for EMAIL and PASSWORD property. < __this will be changed to gmail later on__ >

- Starting the app in different envs:
    - Production env: `npm run start`. This is used when the app is running on a production server.
    - Development env: `npm run dev`. This is when you are testing and making changes in your `local` machine
    - Test env: `npm run test`. This is when you have written test or want to check if the existing tests are passing.

## Frontend developers guide
- If you want to consume the app locally, then follow the setup process above
  - If you encounter any difficulty, beckon on the backend developers in your team for help, trust me they will surely know what to do.
  - Then use the doc at `./documentations/doc/index.html` ( or `<your-host>/api/v1/docs` if it has been configure to do so) and access to know the endpoints to make calls to and their requirements.
  - Then start making calls to the provided host, mostly: localhost:port/api/v1
- If you want to consume the API online:
  - Then point your browser to: `https://udunkulu.netlify.app/api/v1/docs`, check the [docs](https://udunkulu.netlify.app)
  - Then make calls to to the endpoints provided on the doc above

## Usage
#### This is how the API documentation should be hosted/treated
As a backend or fullstack developer, to setup/modify and document your API, do:
- `npm install apidoc -g`. We are using [apidocjs](https://apidocjs.com/#getting-started) to generate our documentation, so it need to be installed as a system/global package.
- Follow [apidocjs's](https://apidocjs.com/#param-api-param) rule/style/syntax/params and document your code as required.
- All written documentations are kept and is to be done in the: [documentations/routes/](https://github.com/ezehlivinus/udunkulu/tree/main/documentations/routes)
  - Each file in this folder should mimic the naming convention found in the files and folders in `./routes/` folders.
  - Example: We have `./routes/users.js` so also we should have `documentations/routes/users.js` as the docs for the said route: `./routes/users.js`.
- When you have finished writing your documentation, it is time to build it into static files (css, js, html, ...) this is handled by apidoc.
  - `npm run build:doc` This builds and dump it output of the doc into `documentations/doc`. You must run this command each time you a change to the docs at `documentations/routes/`
  - Whenever you run the command fresh sets of files (i.e the docs or statics) are being generated

  - Currently we can not use `nodejs/expressjs` to serve this auto generated doc.

  - However, You can manually click at the `index.html` of this generated folder found in `./documentations/doc` and work offline.

  - To have this available online: you need to host the api and set the server's public folder to `documentations/doc/`. and then update `./routes/docs.js`. Note that this does not replace hosting your application as a dynamic app. For the hosting inquire from your team to be sure that the doc has not been hosted alreday.

  - For this particular hosting, treat it like a static website and that is why we are to point the server towards `./documentations/doc/` which contains the `index.html` that would be served by the hosting server, not expressjs, as the API documentation that is to be read by the consuming party.

  - The doc to this API is currently hosted at netlify, it is the repo that was hosted and not the single folder `documentations/`. This way, all changes to the doc is being picked by netlify from the code base when changes are made on the repo/branch, `main`.

- You can also point your browser to `<yourhost>/api/v1/docs` to access the docs; if you have hosted and updated `./routes/docs.js` except your are testing this template. This is also available [online here](https://udunkulu.netlify.app).

## Routes
Base route: `/api/v1`

#### Users resource
These has being define on the doc but not all. New resource will be written there instead. So check the doc to see updated on endpoints and resources
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

#### Available resources
- `/users`
- `/docs`

## Test
To run test use `npm test`. Mocha and chai are the testing libraries adopted for this projects. No coverage yet.

## App Structure
This describes the project structure
- `udunkulu/`: The project/app/root folder/directory
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
  
## Name (Naming) Convention:
We have adopted the npm package naming conveitions for our files and folder:
- All character are to be in lowercase
- If two words made up the name of a file/folder the, `-` that is iphene, are used to separate them
- example:
  - `express-project` : not <strike>expressProject or express_project or ExpressProject or Expressproject</strike> same apply to file
  - `user-controller.js` : not its camel or snake case counterparts

## Coding convention
To be provided later: But basically the following serve for now we depend
- We uses `ESLint` and `AirBnG JavaScript style guide`
- If you are using VSCode, You are encouraged to install `ESLint` extension by `Dirk Baeumer` and make sure it is enabled

