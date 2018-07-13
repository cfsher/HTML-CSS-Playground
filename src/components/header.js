import React, { Component } from 'react';

const Header = (props) => {
  return (
    <nav className="navbar navbar-light navbar-expand-md fixed-top" id="top-nav">

      <a href="/" className="navbar-brand" style={{'margin-left': '1vw'}}>
        <img src="./style/HORSE.png" alt="logo" width="75em"/>
      </a>

      <div className="nav-tab" style={{marginLeft: '5vw'}}>
          <div style={{
            fontFamily: 'PROMETHEUS',
            fontSize: '2.6vw',
            'margin-bottom': '-.5vw',
            'padding': '0'
            }}>
              ETHORSE
          </div>
          <div style={{
            'margin': '0',
            'padding': '0',
            fontSize: '1vw'
            }}>
              Bet on the price on cryptocurrencies.
          </div>
      </div>
      <div className="vl nav-tab header-consts1"></div>
      <div id="header-consts">
        <span className="nav-tab">Powered by</span>
        <span style={{'margin-left': '-.3%'}}><img src="./style/ethereum-logo.png" alt="ethereum" width="100px"/></span>
      </div>

      {/* <div className="collapse navbar-collapse">
        <ul className="navbar-nav" id="navbar-ul">
          <li className="nav-item nav-tab"><div className="vl"></div></li>
          <li className="nav-item nav-tab">Tab 2</li>
          <li className="nav-item nav-tab">Tab 3</li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Header;
