# Portfolio-Dashboard-Template-Angular-case-study
A simple Dashboard template built in angular, can act as a base for building any type of dashboard application using angular.

![Home](https://github.com/aelit31134/Portfolio-Dashboard-Template-Angular-case-study/blob/main/screenshots/UI/home.png)
![Dashboard](https://github.com/aelit31134/Portfolio-Dashboard-Template-Angular-case-study/blob/main/screenshots/UI/dashboard.png)

## Front-end
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng serve --port 8081` after integrating with backend as CORS is configured for port 8081.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Modules Used
- Angular Material
- Angular Angular Forms Module
- Angular Reactive Forms
- HTTP Client Module
- Highcharts Module
- Flex-layout Module
- Router Module

### Component Flow
![Component Flow](https://github.com/aelit31134/Portfolio-Dashboard-Template-Angular-case-study/blob/main/screenshots/flow-diagram.png)

### Installing the Required Modules

#### For adding angular material
Run `ng add @angular/material` command

#### For adding Highcharts
Run `npm install highcharts-angular --save` command
Run  `npm install highcharts --save` command

#### For adding Flex-layout
Run `npm install @angular/flex-layout --save` command

#### For adding CDK
Run `npm install @angular/cdk --save` command

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
