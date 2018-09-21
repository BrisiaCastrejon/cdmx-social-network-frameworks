import React, { Component } from 'react'; // Importa React: Component
// import logo from './logo.svg'; // Evita rutas relativas/estaticas
import firebase from 'firebase';
import './App.css'; // css del componente App

class App extends Component {
  loginGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`${error.code}: ${error.message} Ha ocurrido un error`))
  };

  loginFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`${error.code}: ${error.message} Ha ocurrido un error`))   
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Red Social</h2>         
        </header>
        <p>
          <button onClick={this.loginGoogle}>Google</button>
        </p>
        <p>
          <button onClick={this.loginFacebook}>Facebook</button>
        </p>        
      </div>
    );
  }
}
export default App;
