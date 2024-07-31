// src/components/nav.js
import React from 'react';
import '../App.css'

function nav() {
  return (
    <nav className="nav">
      <div className="logo">Meu Site</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#vt">Curiculo Vitae</a></li>
          <li><a href="#tc">Técnico</a></li>
          <li><a href="#mt">Mátematica</a></li>
          <li><a href="#nt">Humanas</a></li>
          <li><a href="#lg">Linguagens</a></li>
          <li><a href="#pp">PPE</a></li>
          <li><a href="#pt">Primeiros Portfolios</a></li>
          
        </ul>
      </nav>
    </nav>
  );
}

export default nav;