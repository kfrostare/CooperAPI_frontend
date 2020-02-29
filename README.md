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

#### Netlify (front)
I'm assuming you already have an account and know how to change your url- settings.
1. Create a New site from Git
2. Choose GitHub as continuous deployment
3. Pick your Repo and double check deploy settings
4. Click on 'Deploy site'

#### Heroku (back)
I'm assuming you already have an account and know how to fork a Repo.
1. Create a new project
2. Add Repo through GitHub
3. Disable 'Wait for CI to pass before deploy'
4. Enable automatic deploys
5. Choose branch (I went with master)
6. Click on 'Deploy Branch'
7. Visit 'settings'
8. Save Heroku git URL

#### Now you've got both ends up and running, let's connect them!
1. Take that saved URL to the Terminal, make sure you're in the back end local Repo/folder and do:
```
git remote add Heroku (your Heroku git URL)
```
```
git remote -v
```
...just to make sure you now have Heroku as a remote on you repo.
2. Install Heroku on your system, I used this (as I'm on a Linux, Ubuntu machine) but you'll need to [double check](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) what you need.
```
sudo snap install --classic heroku
```
3. Move in to your front end index.js- file and update the **axios.defaults.baseURL** with the Netlify URL that was assigned to you upon deployment. Please note that when testing or making updates you don't yet want to be shown publicly, you'll need to change this to the localhost again.

#### Now we should be connected, but there's nothing in the database at the moment..
... and since the objective for this app was not to build a "create login feature" this needs to be done manually with Postman.
1. Get [Postman](https://www.postman.com/downloads/) if you haven't already, and launch
2. No need to sign in, get rid of that by clicking 'cancel'
3. Once on the dashboard click the plus- sign
4. To add a user choose POST and enter the following to create a user and enter the application with its credentials:
 ```
 (your Heroku URL)/api/v1/auth?email=user@mail.com&password=password&password_confirmation=password
 ```

### Built with

* The front end of this application was built using [React](https://reactjs.org/)
* The back end of this application was built using [Ruby on Rails](https://rubyonrails.org/)
* The front was deployed using [Netlify](https://www.netlify.com/)
* The back end was deployed using [Heroku](https://heroku.com/apps)
* The Acceptance tests where implemented with [Cypress](https://www.cypress.io/)
* The Component tests where implemented with [Jest](https://jestjs.io/docs/en/getting-started)
* The Component tests where implemented with [Enzyme](https://www.npmjs.com/package/enzyme)

### License

This project is licensed under the MIT License.

### Thank you to

* [Kayla Woodbury](https://github.com/kaylawoodbury) for helping us out with testing and bugfixing
* [Jaime Cruz](https://github.com/JaimeCrz) for helping us out with deployment
* [PixaBay](https://pixabay.com/) for a huge library of amazing and inspiring images, royalty free - one of which we chose to use for this app
* [CraftAcademy](https://www.craftacademy.se/english/) for supplying the basic structure of this application