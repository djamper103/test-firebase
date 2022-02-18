import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyCgq5F6DLjdDfwIiEYgMPSDWB_4JsX7J50",
    authDomain: "technical-task-6d151.firebaseapp.com",
    projectId: "technical-task-6d151",
    storageBucket: "technical-task-6d151.appspot.com",
    messagingSenderId: "875125854103",
    appId: "1:875125854103:web:b42fb75dfd61631418bed2",
    measurementId: "G-50E5MCE72F"
})

export const Context = createContext<any|null>(null);

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Context.Provider value={{
            firebase,
            auth,
            firestore,
        }}>
          <App />
        </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
