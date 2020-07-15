import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';
import charlie from '../../assets/img/charlie2.png';
import ghostPost from '../../assets/img/ghostPost.png';

const NoExistence = () => {
  const { wanted } = useParams();
  let msgError = '';

  const WantedUser = () => {
    return (
      <>
        <h3>Cet utilisateur est...introuvable.</h3>
        <figure>
          <img src={charlie} alt="Personnage charlie" />
        </figure>
      </>
    );
  };

  const WantedPost = () => {
    return (
      <>
        <h3>Cette publication n'existe pas.</h3>
        <figure>
          <img src={ghostPost} alt="Petit fantome" />
        </figure>
      </>
    );
  };


  if (wanted === 'user') {
    msgError = <WantedUser />;
  }
  else if (wanted === 'post') {
    msgError = <WantedPost />;
  }

  return (
    <div className="searchError">
      <h1>Désolée !</h1>
      {msgError}
    </div>
  );
};

export default NoExistence;
