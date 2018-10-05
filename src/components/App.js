// dependencias
import React, { Component } from 'react';
import firebase from 'firebase';
// componentes para el login
import Footer from './Footer';
//Estilos
import './css/App.css'; 
// logo 
import logo from './assets/img/mi-sazon.png';
import { runInThisContext } from 'vm';

// functional component // rev
class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    };
    this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  };
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    });
  };
  handleLoginGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`${error.code}: ${error.message} Ha ocurrido un error`))
  };
  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.emal} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  } 
  handleUserAuth () {
    if (this.state.user) {
      return (
        <div >
          <img className='user-image'  src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>{this.state.user.displayName}</p>
          <button className="btn btn-danger btn-block form-button buttons-login" onClick={this.handleLogout}>Cerrar sesión</button> 
        </div>
      );
    } else {
      return (
      <button className="btn btn-danger btn-block form-button buttons-login" onClick={this.handleLoginGoogle}>Google</button> 
      )
    };
  };
  render() {
    return (
      <div className="container centrado-container">
        <section className="row justify-content-center fondo-container">
        <div>
        <img className="logo-img" src={logo} alt='' />
        </div>
        <section className="form-group col-md-6 buttons-login">
          {this.handleUserAuth()}     
          </section>        
        </section>
        <Footer copyright='&copy; Brisia Castrejon-2018-Laboratoria'  /> 
      </div>
    );
  }
}
export default App;
