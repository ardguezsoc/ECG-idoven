# ECD Idoven

This project was bootstrapped with [Vite](https://vitejs.dev/) using the [TS](https://www.typescriptlang.org/) template, which is a tool that enables the creation of React projects with lightning-fast compilation time ⚡

The package manager used for this project is [pnpm](https://pnpm.io/es/) 📦, which is known for being 3 times faster than npm.

All the images have been optimized using [squoosh](https://squoosh.app/) 🖼️ to reduce their size to a minimum and convert them to the webp format (webp images are typically 15%-34% smaller than images in other formats).

## Run project 🎮

To execute this project you will need to do the next steps:

1. nvm use recommended to use the node version defined (optional)
2. npm or pnpm install
3. npm or pnpm start

## Approach 📋

The given data file has a size of 1.5GB, which is quite substantial. Handling such a large dataset requires a pagination process to correctly display the data without overloading the browser's memory. Otherwise, the browser would run out of memory and become unresponsive.

Several options came to mind for managing the data. One approach thought was using a backend to handle the data and avoid burdening the client with such a large dataset. However, due this is a frontend test, I didn't consider it the most appropriate approach. So all data management has been processed on the client side.

I considered two options for the frontend management:

- Stream: This allows reading the data file sequentially without loading the entire file into memory. However, the data still needed to be loaded and stored in memory for rendering the chart, making it an unviable option. This approach i would say that is better for uploading a file to a server

- Chunk: This method involves reading the data file in pieces, so the entire file isn't loaded into memory at once. In this case, I could decide the size of the array buffer slice to read.

Between these two options, I followed the approach of using '`chunks`'.

After several combination and performance tests, I set the default window size for the `react-chart-js2` chart to around `1MB` of data. On the other hand, `highcharts` is known for better performance and handling massive data loads in its diagrams, so I allowed it to use a window size `5` times larger.

Another aspect to consider is that after studying the data, it seems to have a measurement period of 10. Given the immense amount of data and the constant measurements taken over a short period, I set a default step of `10 for the Y-axis`. This means that after every 10 measurements, only one data point is taken. This reduces the data size for the chart while still providing sufficient information. However, I acknowledge that my lack of knowledge about ECG data leaves me unsure if knowing every measurement is necessary or if one every 10 is enough for diagnosis. This approach of reducing data size is common for handling large datasets, but I'm not sure if it's the best for this specific case. So, I added a 'fab button' to allow users to change this 'step' and adjust it according to their preferences, where 1 would read every data point from the file, and any other value X would skip X data points to present more information with less detail.

By default, I used "react-chartjs-2" as it is a well-known library for situations requiring chart rendering. It offers great customization options and is an open-source library with active maintenance. However, I also provided the option to use "highcharts," which is a paid library but offers better performance and handles massive data more efficiently. I included the 'fab button' so users wil be able to switch between the two libraries and explore the different options. I took this approach considering that Idoven is a startup, and resources might be limited. Reducing costs is essential, but I also wanted to showcase the potential of a more powerful library despite its commercial price.

Other aspects considered for performance, reduced execution times, or build optimization include:

- Image optimization
- Vite
- Pnpm

To manage the file content I have taken in consideration how is the structure of this one and seeing that it has always the same structure I have used iterators, splitting and different selectors methods to handle the information inside this.

### Pages

- Home 🏠:

  - Upload the file: Users can upload a file in txt format through the file browser or by dragging and dropping it. The uploaded file will be validated, and if it is correct, relevant information will be saved in the local storage using `React Context API`. This information will be displayed in the History view.

  - `Chart`: Users can view a chart displaying the information from the uploaded file. The chart provides interactive features, including `zooming` with the mouse scroll, `selecting a zone for zooming` by dragging the mouse, and `moving the chart view` by pressing the `shift` key.

    Normal chart will have all the functionalities required for the fronted code challenge but the highchart due it was just more a poc to show other options has less functionalities (highchart does not have the scroll in/out with mouse wheel action, it just has the zoom selecting a zone drawing a rectangle with the mouse)

  Additionally, the interface includes 4 interactive chart buttons:

  - `Move forward in the file`: This button allows users to navigate to the next set of data (next chunk) inside the uploaded file.
  - `Move Backward`: This button enables users to navigate to the previous set of data (previous chunk) inside the uploaded file.
  - `Reset zoom`: Users can click this button to reset the zoom level in the chart, restoring the original view.
  - `Upload new file`: By clicking this button, users will be redirected back to the upload file view to choose and upload another file.

  Other buttons in the view:

  - `Fan Button`:
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
  - If a user attempts to access a page that does not exist within the application, they will be directed to a custom 404 page, indicating that the requested page does not exist. This ensures a user-friendly experience when encountering invalid or non-existent URLs.

## Architecture

- `Pages`: Here you can find the views to be displayed for the user
- `Components`: items that can be reused in different views
- `Context`: React API Context used along the aplication
- `Hooks`: Hooks used in the views to manage some data
- `Locales`: Json translations files used for Reacti18N
- `Themes`: The theme used in the project with the css constants
- `Utils`: General functions that could be reused in the project

Depends the complexity of the component or the view these folders could have an own folder of `components` or `utils` to externalize the logistic related with that view and reducing the file length and increasing the redeability as much as possible.

In this scenario, since we don't have a real backend, there was no need to set up intermediate layers between the view and the API. However, if this were a test involving a real API, I would have implemented two additional layers:

- `Repositories`: The primary responsibility of repositories would be to handle API endpoint calls and data mapping before passing it to other parts of the application. By centralizing these operations, any future changes in the API's attributes or parameters could be managed more efficiently.

- `Services`: The services layer acts as an intermediary between the repositories and hooks. This layer would handle the more data-centric tasks, such as data modifications or additional operations.

Additionally, to enhance data management and API interactions, I would have utilized the [react-query](https://tanstack.com/query/v3/docs/react/overview) library. This powerful library simplifies state management for API calls, provides caching capabilities, and enables easy data manipulation if required. Alongside react query, I would have employed the popular `axios` library for data fetching.

By leveraging these best practices and libraries, the application's structure and data handling would be robust, scalable, and maintainable.

`Github` has been used as code repository, tasking board to manage the different features and running the test in an extenal machine on every main push.

## Interesting Libraries Added 📘

### Dependencies

- [i18Next](https://react.i18next.com/): 🗺️ is a powerful internationalization framework used to centralize all the text in your application, making it reusable and easily maintainable.

- [Material-UI](https://mui.com/material-ui/getting-started/): 🎨 is a comprehensive library of components that enables you to create a cohesive design system for your application.

- [styled-components](https://styled-components.com/): 💅 is a user-friendly library that simplifies the process of creating styled components for your React application.

- [React Router](https://reactrouter.com/en/main): 🚗 provides a declarative way to define routes in your application, associating each route with a specific component for smooth navigation.

- [React Dropzone](https://react-dropzone.js.org/): 📁 is a convenient component that facilitates drag-and-drop functionality for file uploads.

- [React Chart.js 2](https://github.com/reactchartjs/react-chartjs-2): 📊 is an open-source library that simplifies the process of creating charts in React using Chart.js. It offers a wide range of features to customize and manage charts effectively.

- [Highcharts](https://www.highcharts.com/): 📊 is a powerful charting library with excellent performance. It offers a paid version for commercial projects, while the non-commercial version is free to use.

### Dev Dependencies

- [commitlint](https://commitlint.js.org/#/) ✔️: Commitlint helps your team adhere to a commit convention by enforcing rules during the commit message validation process (executed as a commit-msg husky hook 🪝).

- vitest 🏗️: Vitest is a package designed to replace Jest when the project is built with Vite, offering similar functionalities (executed as a pre-push husky hook 🪝).

- [prettier](https://prettier.io/) 🎨: Prettier is an opinionated code formatter used in this case to ensure consistent code formatting across the project (executed as a pre-commit husky hook 🪝 and github main push).

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
