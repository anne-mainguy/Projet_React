import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router';

import Post from 'src/components/Post';
import './styles.css';

import { Col, Image, CardDeck } from 'react-bootstrap';

const Profil = () => {
  // récupére le paramètre de l'url (ici nommé id dans la route d'app)
  let { id } = useParams();
  id = Number(id);

  const profil = useSelector((state) => state.users).find((item) => item.id === id);

  // si le user n'existe pas on redirige vers une page d'erreur
  if (!profil) {
    return (
      <Redirect to="/no_existence/user" />
    );
  }

  // récupère tous les posts correspondant au user a qui appartient le profil
  const userPosts = useSelector((state) => state.posts).filter((post) => post.id_user === id);

  return (
    <main>
      <section className="profil mb-4">
        <h2 className="mb-5">Profil de : {profil.pseudo}</h2>
        <div className="profil_user row">
          <Col className="profil_user_avatar col-md-4 mb-3">
            <Image src={profil.avatar} roundedCircle className="maxAvatar" />
          </Col>

          <div className="profil_user_bio col-md-6 ">
            <h4 className="mb-3">Bio</h4>
            <p>{(profil.bio !== '') ? profil.bio : <strong>Pas de bio pour l'instant</strong>}</p>
          </div>
        </div>
      </section>

      <section className="my-5 profil_posts">
        <h5>Toutes les publications de : <strong>{profil.pseudo}</strong></h5>

        <CardDeck className="py-2">
          {
            userPosts.map((item) => {
              return (
                <Post postId={item.id} key={item.id} />
              );
            })
          }
        </CardDeck>
      </section>
    </main>
  );
};

export default Profil;
