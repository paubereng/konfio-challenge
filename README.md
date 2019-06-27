# Konfio challenge
According to the challenge, I created an interface that displays a summary of the FX rates of the Mexican peso against other currencies between two dates. Also, I created a filter that allows the user to add different dates and currencies to be compared.
Finally I created a Server that display the interface created and cached request content.
[Live demo](https://app-fxrates.herokuapp.com/).

## Technical requirements

- Use [fixer.io](https://fixer.io/) as your API.
- You may do vanilla js, or any framework of your choice.
- Have a build process that creates a single minified js file.

## Expected results

- Historical view of fx rates on a graph.
- Fast loading (less than 5s).
- Easy setup (starting the project should take less than 5 mins).
- Good documentation.
- Follow a code style guide.

## Main functionalities
- Display FX rates on **line chart**.
- Filter FX rates by date(minimum and maximum) and currencies(EUR, GBP, USD, etc...).
- **Responsive** design.

## Technical Decisions
- When the page is rendered, the frontend makes two api calls:
	- The first one retrieves the rates (Historical Rates Endpoint) to display in the chart.
	- The second one gets all the symbols (Supported Symbols Endpoint) and fill up multi select.
- By default, when the page is rendered the Historical rates endpoint gets called 4 times, for each month from today until 4 months ago, with `EUR,USD,GBP` currencies parameters.
- Date pickers only show month date to **avoid exceeding the maximum api calls(1000) limit**.
- Cached content on both endpoints (symbols and rates). The rates are not gonna change in the future, and this allows the page to load faster.

## Quick start
 1. Make sure to have Node.js v8.10 and npm v5 or above installed.
 2. Clone this repo.
 3. Run npm install in order to install dependencies.
 4. At this point you can run `npm run dev` to run the local Express server at http://localhost:8080 and see the app at http://localhost:3000.

## Made with
- [React](https://reactjs.org/) as a js framework.
- [Express](https://expressjs.com/) as a Node framework.
- [Memory-cache](https://www.npmjs.com/package/memory-cache) as a cache in memory.
- [Recharts](http://recharts.org/en-US/) as a chart library.
- [Webpack](https://webpack.js.org/) as module bundle.
- [Jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/) to testing.
- [ESLINT](https://eslint.org/) + [Airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) as linter tool.
- [Bulma](https://bulma.io/) as a css library.

## Bundle Process
Why I used Webpack 4?
- Transpiles JSX and ES6 code into a backwards compatible version of JavaScript in current and older browsers or environments.
- Produces HTML page with the resulting bundle(or multiple) and places it inside a script tag.
- Compiles scss to css and extract css into separate files.
- Analyzes bundle.

## Cache
I used [memory-cache](https://www.npmjs.com/package/memory-cache) to add request content to cache. I implemented it creating a cache middleware and adding it for each route I want to cache.
Pros:
- Easy and fast(request time reduced more than 80%) option to work.

Cons:
- It loses the cached content if the server or the process goes down.
- It will not be shared between multiple node process causes it stores the cached content in RAM.
In future implementations it will be good option to use a distributed cache service like Redis.


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the Express server and React server in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Express server is located in [http://localhost:8080](http://localhost:3000).

Both servers will reload if you make edits<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner. Test with: <br>
 - [Jest](https://jestjs.io/) - The test framework used.
 - [Enzyme](https://airbnb.io/enzyme/) - A JavaScript Testing utility for React.

### `npm run test:watch`

Watching test without rerunning.

### `npm run test:updateSn`

Update all snapshpot from Jest.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

### `npm run client`
Runs React server in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run server`
Start Express server and automatically restart your server if detect any changes.

### `npm run start`
Start Express server.

### `npm run heroku-postbuild`
Heroku post-build script, builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run clean`

Delete dist folder.

### `npm run stats`

View stats of bundle packages size on browser.

## More
If you want to change base currency parameter on api call you have to sign up as a [legacy plan](https://fixer.io/signup/legacy).
