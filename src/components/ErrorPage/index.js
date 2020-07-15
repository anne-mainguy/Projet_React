import React from 'react';
import feuillage from '../../assets/img/feuillage1.png';
import './style.css';

const ErrorPage = () => {
  return (
    <>
      <section className="pageError">
        <img alt="feuillage" src={feuillage} className="background404" />
        <div>
          <h1>Ooooups !</h1>
          <p>Erreur 404</p>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
