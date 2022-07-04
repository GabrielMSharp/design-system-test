# BwOasys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


## Running Storybook

Use the command `ng run oasys-lib:storybook`

## Generate design tokens into CSS variables And Figma Token Plugin formats

Run style dictionary to take all token json files from the /style-dictionary/tokens folder and package them for relevant platforms (ie. css + figma tokens)
Use the command `npm run update-tokens`

## Minify SVG icons and convert into sprite for both brands

Takes icons from the svgo/{brand}/ folder, minifies them into the /min folder and then generates an SVG sprite, which is added to the angular library project folders
Use the command `npm run update-icons`

## Publish Storybook via Chromatic

Publish storybook to a publically accessible URL
Use the command `npm run chromatic`
Hint: Make sure your changes are commited first