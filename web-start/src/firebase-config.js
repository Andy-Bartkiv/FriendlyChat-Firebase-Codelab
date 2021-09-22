/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyA6zDPwxUZCd_FIY2JneMiseU1wn-msUhA",
  authDomain: "friendlychat-520bc.firebaseapp.com",
  projectId: "friendlychat-520bc",
  storageBucket: "friendlychat-520bc.appspot.com",
  messagingSenderId: "213950240607",
  appId: "1:213950240607:web:257478ec1808f3541548ea"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}