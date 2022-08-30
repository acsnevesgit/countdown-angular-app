<h1 align="center">countdown-angular-app</h1>

<div align="justify">

## App description

This app was built using the latest stable versions of Angular and Typescript. According to design specifications provided in a Figma file, the app should work in portrait as well as in landscape mode while the text displayed on the screen should always fill the whole width of the screen.

<br>

In this app the user can define the end date and the name of the event taking place on that day. The countdown should always start from the current time and it should display the time remaining to the specified end date in the following format: Days, Hours(h), Minutes(m), Seconds(s) (e.g., 3 days, 15 h, 20 m, 5 s). To make sure the text always covers the entire screen width, it should resize whenever necessary to achieve this objective.

</div>

<br>

---

## App set up

<div>

- Clone the project and install dependencies

```shell
$ git clone https://github.com/acsnevesgit/countdown-angular-app.git
$ cd countdown-angular-app
$ npm install
```

- Install the Angular CLI:

`$ npm install -g @angular/cli`

- Build and serve the app

`$ ng serve --open`

(A browser will open at http://localhost:4200/)

</div>

<br>

---

## App design and development

<div align="justify">

Here is a short description of the steps and motivation behind implementing this solution for the app:

<b>Design</b>:

- Follow the provided Figma file template by using the right-hand panel to extract information about color values, typography, position and sizes for a specific page element.

<b>Functionality</b>:

- take event name and specified end date as inputs and both are input as a type='string' (though the latter could be type='date' for example)
- suggest specified end date to be in the ISO 8601 Date format 'yyyy-mm-dd':
  - when input changes are detected and input is validated, change the View accordingly
  - when input changes are detected and input is validated, store in local storage the latest valid inputs
- get specified end date in full text string format: e.g. 2022/08/30 ---> Tue Aug 30 2022 00:00:00 GMT+0200 (Central European Summer Time)
- get the above value in milliseconds
- calculate the difference between the above value and the current time (Date.now())
- use the Units of Time Conversion to get the difference between dates in the format ---> Days, Hours(h), Minutes(m), Seconds(s)

</div>

---

## Suggestions for improvement

<div align="justify">

<b>Design</b>:

- [ ] Fluid text width: currently, the text is responsive but not to a full degree, i.e. considering all possible devices that could be running the app. For instance in a desktop screen, if the text of the input fields takes the whole available width, the font-size would become extremely large(?). The same goes in other direction - in a very small screen the font-size would shrink to a point where readability if compromised.
- [ ] Improve responsiveness: responsive (or adaptive?) design from mobile to desktop with various screen sizes and resolutions. Currently limited by using media queries but would suggest looking at fluid grids.

<b>Validation</b>:

- [ ] Add validators: add validation rules to input fields (e.g.1 `dd` in date can only be between 1 and 28/29/30/31; e.g.2 date cannot be previous to current time).
- [ ] Update template: make sure the user's input is valid before changes in the template take place, i.e. only call ngModelChange if the field is valid.

<b>Other</b>:

- [ ] App structure: improve app workspace and project folder structure according to best practices (e.g. components, controllers, directives services, styles, utils, etc ).
- [ ] State persistance: currently, the event name and specified end date are store in local storage so that they are persisted between page reloads. This solution has limitations concerning security and persistance, so a better solution can be found. Also, ideally, one should just store the latest valid inputs.
- [ ] Code optimization: refactor code so as to make the app as efficient as possible. Take a look at some concepts such as: Optimization of template expressions, Lazy-loading, Change detection... Also remove unused code using, for example, tree-shaking.
- [ ] Testing testing testing: naturally, the app should be thouroughly tested before it is ready for production.

</div>

<br>

---

## Default generated README with new Angular project creation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
