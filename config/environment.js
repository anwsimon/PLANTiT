import Constants from 'expo-constants';

var environments = {
  staging: {
    FIREBASE_API_KEY: 'AIzaSyAwBSyCy14qdhmKD1nt9jqs-qOGDhJTSuI',
    FIREBASE_AUTH_DOMAIN: 'plantit-327519.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://plantit-327519-default-rtdb.firebaseio.com/',
    FIREBASE_PROJECT_ID: 'plantit-327519',
    FIREBASE_STORAGE_BUCKET: 'plantit-327519.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '777066751594',
    APP_ID: "1:777066751594:web:4b07e33281dc2d420f0c13",
    MEASUREMENT_ID: "G-RTSZK25SN0",
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBL4VaThg_kfleYTp91Yu-OqzNeIWQ1ciM',
    PLANT_ID_API_KEY: 'mt0dxzFxdF96qIXsUy68IMlJbIqejCwJtwr4oZEfi4ilTxMNeq'
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
};

function getReleaseChannel() {
  var releaseChannel = Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return 'staging';
  } else if (releaseChannel === 'staging') {
    return 'staging';
  } else {
    return 'staging';
  }
}

function getEnvironment(env) {
  console.log('Release Channel: ', getReleaseChannel());
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());

export default Environment;
