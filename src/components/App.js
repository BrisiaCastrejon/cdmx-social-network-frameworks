// dependencias
import React, { Component } from 'react';
import firebase from 'firebase';
// componentes para el login
import Footer from './Footer';
import SubmitPost from './SubmitPost';
//Estilos
import './css/App.css'; 
// logo 
import logo from './assets/img/mi-sazon.png';

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
        <div className='user'>
          <img className='user-image'  src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Bienvenidx!!!! <br/>{this.state.user.displayName}<br/> ¿Qué comerás hoy?</p>
          <button className="btn btn-danger btn-block form-button button-logout" onClick={this.handleLogout}>Cerrar sesión</button>
          <br/>
          <SubmitPost />
        </div>
      );
    } else {
      return (
        <section className="row justify-content-center fondo-container">
          <div>
        <img className="logo-img" src={logo} alt='' />
          </div>
          <section className="form-group col-md-6 buttons-login">
          <button className="btn btn-danger btn-block buttons-login" onClick={this.handleLoginGoogle}>Google</button>     
          </section>
          <Footer copyright='&copy; Brisia Castrejon-2018-Laboratoria'  />  
        </section>        
      )
    };
  };
  render() {
    return (
      <div className="container centrado-container">  
       <section>      
          {this.handleUserAuth()}
          </section>        
      </div>
    );
  }
}
export default App;
