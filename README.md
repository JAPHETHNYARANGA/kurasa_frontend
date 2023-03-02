# KurasaFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

# Running Backend

* This  application uses a laravel with mysql serve.
* For local development, clone the server at this github link with the command git clone:`https://github.com/JAPHETHNYARANGA/kurasanotesapibackend.git`.
* Once the backend is cloned, create a .env file in the laravel application then create a mysql database in your local machine.
* Run `php artisan migrate` in the laravel application, then run `php artisan serve` to start your backend server.

# Backend NB
* the aplication uses a live backed by default, to switch to the local backend, navigate to the constants folder , comment the live base url and uncomment the local base url.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


