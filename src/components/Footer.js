// Dependencias 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Estilos
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  }
  render() {
    const { copyright = '&copy; Brisia Castrejon-2018-Laboratoria'} = this.props; 
    return (
      <div className='footer'>
        <p>
          { copyright }
        </p>
      </div>
    );
  }
}
export default Footer;
