# Getting Started with Vite

This project was bootstrapped with [Vite](https://vitejs.dev/) using the [TS](https://www.typescriptlang.org/) template, which is a tool that enables the creation of React projects with lightning-fast compilation time ⚡

The package manager used for this project is [pnpm](https://pnpm.io/es/) 📦, which is known for being 3 times faster than npm.

All the images have been optimized using [squoosh](https://squoosh.app/) 🖼️ to reduce their size to a minimum and convert them to the webp format (webp images are typically 15%-34% smaller than images in other formats).

## Run project 🎮

To execute this project you will need to do the next steps:

1. nvm use recommended to use the node version defined (optional)
2. npm or pnpm install
3. npm or pnpm start

## Approach 📋

### Pages

- Home 🏠:

  - Upload the file: Users can upload a file in txt format through the file browser or by dragging and dropping it. The uploaded file will be validated, and if it is correct, relevant information will be saved in the local storage using `React Context API`. This information will be displayed in the History view.

  - Chart: Users can view a chart displaying the information from the uploaded file. The chart provides interactive features, including zooming with the mouse scroll, selecting a zone for zooming by dragging the mouse, and moving the chart view by pressing the `shift` key.

    Additionally, the chart interface includes 4 normal buttons:

    - Move forward in the file: This button allows users to navigate to the next set of data inside the uploaded file.
    - Move Backward: This button enables users to navigate to the previous set of data inside the uploaded file.
    - Reset zoom: Users can click this button to reset the zoom level in the chart, restoring the original view.
    - Upload new file: By clicking this button, users will be redirected back to the upload file view to choose and upload another file.

    Fan Button:
    This button allows users to change the chart type and the step size for the y-axis.

- History 📜:

  - Users can access the History view, where a list of all the files uploaded to the application is displayed. Each file is presented in a row, showcasing the following information:

    - File name
    - File size
    - File type
    - Date of upload
    - File Extension

    If there are no files uploaded, or the page is refreshed, a message will be shown to inform the user that there are currently no files uploaded to the application.

- NotFoundPage 🚫:
  If a user attempts to access a page that does not exist within the application, they will be directed to a custom 404 page, indicating that the requested page does not exist. This ensures a user-friendly experience when encountering invalid or non-existent URLs.

## Interesting Libraries Added 📘

### Dependencies

- [i18Next](https://react.i18next.com/): 🗺️ is a powerful internationalization framework used to centralize all the text in your application, making it reusable and easily maintainable.

- [Material-UI (mui)](https://mui.com/material-ui/getting-started/): 🎨 is a comprehensive library of components that enables you to create a cohesive design system for your application.

- [styled-components](https://styled-components.com/): 💅 is a user-friendly library that simplifies the process of creating styled components for your React application.

- [React Router](https://reactrouter.com/en/main): 🚗 provides a declarative way to define routes in your application, associating each route with a specific component for smooth navigation.

- [React Dropzone](https://react-dropzone.js.org/): 📁 is a convenient component that facilitates drag-and-drop functionality for file uploads.

- [React Chart.js 2](https://github.com/reactchartjs/react-chartjs-2): 📊 is an open-source library that simplifies the process of creating charts in React using Chart.js. It offers a wide range of features to customize and manage charts effectively.

- [Highcharts](https://www.highcharts.com/): 📊 is a powerful charting library with excellent performance. It offers a paid version for commercial projects, while the non-commercial version is free to use.

### Dev Dependencies

- [commitlint](https://commitlint.js.org/#/) ✔️: Commitlint helps your team adhere to a commit convention by enforcing rules during the commit message validation process (executed as a commit-msg husky hook 🪝).

- vitest 🏗️: Vitest is a package designed to replace Jest when the project is built with Vite, offering similar functionalities (executed as a pre-push husky hook 🪝).

- [prettier](https://prettier.io/) 🎨: Prettier is an opinionated code formatter used in this case to ensure consistent code formatting across the project (executed as a pre-commit husky hook 🪝).

- [husky](https://github.com/typicode/husky) 🐶: Husky is a hook library that enables the execution of different commands at various points in the Git workflow, such as pre-push, pre-commit, and commit-msg.

- [lint-staged](https://github.com/okonet/lint-staged): Lint-staged is a useful package that allows you to apply linting or Prettier formatting rules selectively to staged files (executed as a pre-commit husky hook 🪝).

## Board 🎫

[Board](https://github.com/users/ardguezsoc/projects/4) used for this project

## Available Scripts 🖥️

In the project directory, you can run:

### `npm  start` or `pnpm  start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test` or `pnpm run test`

Launches the test runner in watchMode = false.\
See the section about [running tests](https://vitest.dev/api/) for more information.

For testing I have followed a small approach to use:

- Unit test with [jest](https://jestjs.io/es-ES/)

Other approaches that I would have liked to use:

- Component test with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/)

### `npm run lint` or `pnpm run lint`

To check the lint in the project

### `npm run build`

simply run the vite build command. By default, it uses <root>/index.html as the build entry point,
and produces an application bundle that is suitable to be served over a static hosting service

See the section about [build](https://vitejs.dev/guide/build.html) for more information.
