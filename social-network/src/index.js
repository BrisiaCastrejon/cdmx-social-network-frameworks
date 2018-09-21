import React from 'react'; // react 
import ReactDOM from 'react-dom'; // renderizar 
import firebase from 'firebase';
import './index.css'; // estilos
import App from './App'; // el archivo a renderizar
import registerServiceWorker from './registerServiceWorker'; // ayuda a almacenar archivos en cache para que el usuario no tenga incovenientes con falta de red o red lenta.Mejora la experiencia de Usuario. Lo despliega por defecto CREATE-REACT-APP
firebase.initializeApp({
  apiKey: "AIzaSyAJG5TpGZkxr976aECcA6V9v1nDMbgn_Bo",
  authDomain: "redsocial-react-cef1a.firebaseapp.com",
  databaseURL: "https://redsocial-react-cef1a.firebaseio.com",
  projectId: "redsocial-react-cef1a",
  storageBucket: "redsocial-react-cef1a.appspot.com",
  messagingSenderId: "789292410495"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
