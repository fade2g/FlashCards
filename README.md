This is my "Mobile Flashcards" submission project for Udacity's React Nanodegree 

The project is based on react-native and developped and tested from **android** devices.
It has been tested with a physical Android 7 device and Andoird simulator from the Android SDK.

## Installing

After cloning the repository, the following steps are required in the console:

`npm install`

or

`yarn install`
  
## Starting

To start the development server for the expo app:

`npm start`

or

`yarn start`

This might take some time.

In order to test and use the app,
* either the expo app must be installed on a physical device. In this case,
  scan the QR barcode via the expo app in order to connect to the development live reload server
* or the android emulator is used and started. In this case, connect the development live reload
  server to android emulator by pressing `a`

## Using
  
The app provides the following functionality:
* Display a list of flash card decks
* Start a quiz for a given card deck, including some stats
* Add questions and answers to a card deck
* Delete the card deck
* Add a default card deck (the app comes without default data)
* Turn off reminders (local notifications)


In order to start a quiz, go to a deck and hit `start quiz` - if the quiz has questions in it.

Once the quiz is finished, you will receive a score. The quiz is a self-assessment; in order to
validate the answer, you can flip the card.

The app will show a notification at 8 o'clock PM, if you haven't studied for the given day.
Possibly you will be asked for a permission to that. If you reject, notifications will not work.

The menu to access home screen, add deck screen and settings screen is he three dots on the
right side and can be swiped in as well (from the right side). 
