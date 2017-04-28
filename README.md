# Angular2CliNodejs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

`ng build && cpx server/* dist` command runs the normal ng build command which builds the application and places the assets into the `/dist` directory followed by a copy command to copy the `/server` files to the `/dist` folder.

`ng build -prod && cpx server/*` dist command does the same, but passing the `-prod` option tells the CLI to bundle the application assets.
Execute the command using `npm run build:server` or `npm run build:server-prod`

Finally the two commands `npm run build:server && cd dist && node app.js`, `npm run build:server-prod && cd dist && node app.js` run the application using the node server from the local machine in either dev or production mode. 

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
