import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAN8gLct3Ox67nKgsecsP-XJiYDSJcBf1I",
    authDomain: "reastaurantapp-b035a.firebaseapp.com",
    databaseURL: "https://reastaurantapp-b035a-default-rtdb.firebaseio.com",
    projectId: "reastaurantapp-b035a",
    storageBucket: "reastaurantapp-b035a.appspot.com",
    messagingSenderId: "68892328634",
    appId: "1:68892328634:web:c561091469ebd87aef7883"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};
  