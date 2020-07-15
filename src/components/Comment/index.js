// Import
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Figure } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * affichage un commentaire
 * 
 * @param id id du commentaire
 */
const Comment = ({ id }) => {
  // récupère un commentaire par son id
  const comment = useSelector((state) => state.comments).find((item) => item.id === id);
  // récupère l'auteur du commentaire
  const author = useSelector((state) => state.users).find((user) => user.id === comment.id_user);

  return (
    <article>
      <header className="comment-header">
        <Link href="#" to={`/profil/${author.id}`} className="d-flex align-items-center">
          <Figure className="mr-2">
            <Figure.Image
              className="minAvatar"
              width={20}
              height={20}
              alt="Avatar de l'utilisateur"
              roundedCircle
              src={author.avatar}
            />
          </Figure>
          {author.pseudo}
        </Link>
        {comment.date}
      </header>
      <div className="comment-body">
        {comment.contenu}
      </div>
    </article>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Comment;
