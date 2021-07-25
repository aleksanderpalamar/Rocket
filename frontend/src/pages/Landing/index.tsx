import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/icons/rocket.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

function Landing(): ReactElement {  

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Rocket" />
          <p>Rocket</p>
          <h2>É uma plataforma de estudos online, a onde você pode encontrar ou dar aulas.</h2>
        </div>
        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Encontrar Aulas
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
                
        <span className="total-connections">
        © Copyright 2021
          {' '}
          
          {' '}
          Rocket          
        </span>        
      </div>
    </div>
  );
}

export default Landing;
