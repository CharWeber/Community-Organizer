import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {FirebaseAppProvider} from 'reactfire';

import './index.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
}


render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

