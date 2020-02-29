# [The Cooper Tracker (API)](http://kfrostare-cooperapp.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/2613983d-db4f-4e1e-a22f-4ae66045ca34/deploy-status)](https://app.netlify.com/sites/kfrostare-cooperapp/deploys)
Authors are [Karolina Frostare](https://github.com/kfrostare) and [Daniel Bryant](https://github.com/DanielGITB)<br>*Click on the title to visit the application.*

![Cooper Runners App](src/cooper_app_printscreen.png)


### Description
The client has requested a workout tracking application that will allow users to track their fitness using the Cooper Test. This is a software solution where users can calculate and record their data over time. The app also presents any historical data logged by the user.

### Getting started
If you want to use this project as blue prints, be my guest. Here's how it's done:

#### Installments and System dependencies

First of all, make sure you get the other half of this project, [the back end that runs on Ruby on Rails.](https://github.com/kfrostare/CooperAPI_backend). This is the [front end](https://github.com/kfrostare/CooperAPI_frontend) of the application. 

Make sure you use the correct<br> **Ruby version**
```
rvm use -v 2.5.1
```

#### Testing framework
If you're anything like me you wanna test A LOT before deploying. I used Cypress, Jest and Enzyme while building this application.
```
yarn -D add cypress
```
```
yarn add -D enzyme enzyme-adapter-react-16 react-test-renderer
```

#### Database creation
Our database is over [here](https://github.com/kfrostare/CooperAPI_backend), make sure you get it!

#### How to run the test suite
```
yarn cy:open
```

### Deployment instructions

This software was deployed using Netlify ([front end](https://github.com/kfrostare/CooperAPI_frontend)) and Heroku ([back end](https://github.com/kfrostare/CooperAPI_backend)). This is - sort of - how we did it.

#### Heroku
I'm assuming you already have an account and know how to fork a Repo.
1. Create a new project
2. Add Repo through GitHub
3. Disable 'Wait for CI to pass before deploy'
4. Enable automatic deploys
5. Choose branch (I went with master)
6. Click on 'Deploy Branch'
7. Visit 'settings'
8. Save Heroku git URL

#### Netlify
I'm assuming you already have an account and know how to change your url- settings.


### Built with

Add part on what framework was used and so on.

### License

This project is licensed under the MIT License.

### Acknowledgments

A big thank you to...


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
adding some info to the readme file
adding additional info to the readme file
adding even more