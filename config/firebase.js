import * as firebase from 'firebase';
import Environment from './environment'

const app = firebase.initializeApp({
  apiKey: Environment['FIREBASE_API_KEY'],
  authDomain: Environment['FIREBASE_AUTH_DOMAIN'],
  databaseURL: Environment['FIREBASE_DATABASE_URL'],
  projectId: Environment['FIREBASE_PROJECT_ID'],
  storageBucket: Environment['FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: Environment['FIREBASE_MESSAGING_SENDER_ID'],
  appId: Environment["1:777066751594:web:4b07e33281dc2d420f0c13"],
  measurementId: Environment["G-RTSZK25SN0"],
});

export default app;
