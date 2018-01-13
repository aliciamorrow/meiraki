import React, { Component } from 'react';
import './styles.sass';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="has-link">
          Made by <a target="blank" href="https://aliciamorrow.me">Alicia Morrow</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
