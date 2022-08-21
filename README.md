# express-winston-boilerplate

A simple repository to demonstrate how to collect your nodejs logs using winston and morgan in the local timezone. Currently all the logs are logged into the server console as well as in the log file (app.log) but any other format can be applied as well like if we want to save logs in our DB etc.

## What it contains?

- `index.js`: Entry point of the API service; starts the service when run.
- `app.js`: The API application (which uses express). This is where you use your API routes, or send users to a 404 page.
- `routes/`: Folder which contains all your routes, organised in different files (or even subfolders).
- `controllers/`: Folder with the routing logic, organised in different files (or even subfolders).
- `config/env.config.js`: Configuration file for the environment: Specify your IP and PORT here!
- `config/winston.js`: Configuration file for logging (which uses winston).

## Setting up

1. Clone the repository.
2. Install NPM packages: `npm install` or `npm i`.
3. Run the API: `npm run dev`.

## Author

Muhammad Anser Naseer (muhammadin87@gmail.com)
