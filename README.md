## COVID19 - Stats Tracker

![App Preview](/docs/img/app-image.png "App Preview Image")
_Data comes from John Hopkins University CSSE, through a JSON API provided by [mathdroid (github)](https://github.com/mathdroid/covid-19-api)_

## Deployed App

[Click here to see the deployed app](https://covid19-numbers.netlify.app/)

## Features

- Chart available in `Global` view.
- Breakdown of stats (color coded).
- Dropdown to select any country and see the data available by the API

## Deploy App Locally

1. Clone this repo
2. Use yarn or npm to install required packages
3. Run one of the scripts below

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Notes

The public API sometimes goes down and I cannot host the backend personally because ZEIT doesn't allow more than 12 serverless functions on the free plan.
