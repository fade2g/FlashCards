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

## Using

In order to test and use the app,
* either the expo app must be installed on a physical device. In this case,
  scan the QR barcode via the expo app in order to connect to the development live reload server
* or the android emulator is used and started. In this case, connect the development live reload
  server to android emulator by pressing `a`
  
The app allows adding decks with flash cards as questions. Initially, the app comes without
questions or data. You can add a card in the "add card" view. When clicking on a card, you can add
questions and answers to the deck.

You can also delete a deck. Be aware, that there is no confirmation asked.

In order to start a quiz, go to a deck and hit `start quiz` - if the quiz has questions in it.

Once the quiz if finished, you will receive a score. The quiz is a self-assessment; in order to
validate the answer, you can flip the card.

The app will show a notification at 8 o'clock PM, if you have'nt studied for the given day.
Possibly you will be asked for a permission to that. If youo reject, notifications will not work.
