angular-vertical-material-tabs
==============================
Simple vertical tabs using `@angular/material` and `@angular/flex-layout`.


## Install

    npm i --save SamuelMarks/angular-vertical-material-tabs

## Usage

See [example](src/app). Only difference in your app is your imports:

    import { MaterialTabsModule } from 'angular-vertical-material-tabs/dist/material-tabs';
    
    // add it to the `imports:` of your relevant `@NgModule`
    imports: [ MaterialTabsModule.forRoot() ]

Then in your template:

    <vertical-material-tabs [multi]=true [selectFirstTab]=false [showSelectAll]=true>
      <vertical-material-tab tabTitle="Tab 0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris tincidunt mattis neque lacinia dignissim.
        Morbi ex orci, bibendum et varius vel, porttitor et magna.
      </vertical-material-tab>
    
      <vertical-material-tab tabTitle="Tab b">
        Curabitur efficitur eleifend nulla, eget porta diam sodales in.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas vestibulum libero lacus, et porta ex tincidunt quis.
      </vertical-material-tab>
    
      <vertical-material-tab tabTitle="Tab 2">
        Sed dictum, diam et vehicula sollicitudin, eros orci viverra diam, et pretium
        risus nisl eget ex. Integer lacinia commodo ipsum, sit amet consectetur magna
        hendrerit eu.
      </vertical-material-tab>
    </vertical-material-tabs>


## Approach
Started with Juri Strumpflohner's egghead project, then:

  - removed Twitter Bootstrap
  - added `@angular/material`
  - added `@angular/flex-layout`

Finally was able to implement new features and resolve existent bugs :)


## Build

    rm -rf dist
    ng build material-tabs --prod

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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
