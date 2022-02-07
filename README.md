# Portfolio-Dashboard-Template-Angular-case-study
A simple Dashboard template built in angular, can act as a base for building any type of dashboard application using angular.

## Front-end
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng serve --port 8081` after integrating with backend as CORS is configured for port 8081.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Back-end
### Initializing the NodeJS Code

Run `node init` to initialize the project and create configuration files

### Installing the required dependencies

Run `npm install express sequelize mysql2 cors jsonwebtoken bcryptjs --save` to install all the required modules

- Required Modules
 * express
 * equelize
 * mysql2
 * jsonwebtoken
 * bcryptjs

### Running the program

Run `node server.js` to run the program.
When the program is run, the tables defined in the modules package will be automaticaly created in the database as per connection.
