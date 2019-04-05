# ActivateEmptyOutletComponent

This project provides easy reproduction steps for the issue outlined here: [https://github.com/angular/angular/issues/27696](https://github.com/angular/angular/issues/27696). Run the sample app which provides 2 links, one that lazy loads a component into the primary router outlet and the other lazy loads the same component but into an auxiliary (named) outlet. The outlets are simply placed side by side with the main on left and aux on right.

![img 1](https://puu.sh/DauFN/9f9ff72007.png)

To demonstrate the issue easily, I have placed console logs on the activate event outputs on both router outlets, and in the console we can see that the main outlet correctly emits the `LazyComponent` instance in the activate event, however the named outlet emits a `EmptyOutletComponent` instead of the `LazyComponent`. This can cause confusion or bugs since as a consumer I would expect that outlets are activated with the actual component that is being presented and not an `EmptyOutletComponent`.

![img 2](https://puu.sh/DauKw/ffb9779ded.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
