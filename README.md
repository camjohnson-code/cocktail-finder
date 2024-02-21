# Rancid Tomatillos

![App demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ25idzNqc2xqcTBhMnVrdzl0NTFzZTM0c3R1aWZzM3JtZ2NrNHY2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DbSLibbSRhUU2DJUx4/giphy.gif)

Quintessential Cocktails is a web application designed to help users discover and learn about various cocktails. It leverages React and React Router to provide a seamless browsing experience. Users can view detailed cocktail information, and save their favorite cocktails for easy access.

## Contributors

- [Cameron Johnson](https://github.com/camjohnson-code)
- [Eric Batiste](https://github.com/ericbatiste)

## Features

- The ability to log in using Google authentication.
- The application features a "Cocktail of the Day" section that displays a randomly selected cocktail each day.
- Users can click on any cocktail to view detailed information about the cocktail, including ingredients and preparation instructions.
- Users can save their favorite cocktails for easy access. The favorites are stored in the user's local storage, so they persist across sessions.
- The application is designed to be responsive and works well on both desktop and mobile devices.

## Live Link

[Click here](https://www.google.com) to visit the application.

### Challenges

- API data was quite verbose, in particular, the cocktail ingredients. However, it was fun getting to write some more complicated logic to reformat the data to support dynamic rendering to the details page.
- Because we are only using Authentication with Google, opposed to sign-in with email and password, allowing cypress access to the site was tricky. We were able to find a workaround by saving a 'logged in' state in local storage. By setting the state's default value to true, cypress was able to bypass the login page.

### Installation

Clone the repository:

`git clone git@github.com:camjohnson-code/cocktail-finder.git`

### Navigate to the project directory:

`cd cocktail-finder`

### Install dependencies:

`npm install`

### Usage

Start the development server:

`npm start`

Open your web browser and visit http://localhost:3000 to access the application.

#### Future Improvements

In the future, we'd like to improve the site by adding these features:

- Currently, saved favorites are stored in local storage. We'd like to migrate the storage of user's favorites to Firebase.
- Add a login option using other authentication methods like email/password, Facebook, etc.
- Further refactoring of the featured cocktail storing its value in Firebase.

#### Acknowledgements

This project was an [assignment](https://frontend.turing.edu/projects/module-3/stretch.html) during our time as Front End students at the [Turing School of Software and Design](https://turing.edu/).
