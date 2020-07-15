import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image, Modal } from 'react-bootstrap';
import LikeImg from 'src/assets/icon/like.png';
import LikeActiveImg from 'src/assets/icon/likeActive.png';
import DislikeImg from 'src/assets/icon/dislike.png';
import DislikeActiveImg from 'src/assets/icon/dislikeActive.png';

import './styles.css';

const Votes = ({ id }) => {
  // id est l'id du post
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.posts).find((item) => item.id === id);
  const [post, setPost] = useState(currentPost);

  /* =========== gestion de la modal ========== */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // récupère l'id du user dans le sessionStorage
  // ! avec le back ce sera une requete faite avec le token
  let { idUser } = sessionStorage;
  idUser = parseInt(idUser);

  // valeur initiale d'initVote restera celle-ci si le visiteur n'est pas connecté. Sinon elle est modifiée plus bas.
  let initVote = { id: false, value: false };

  // SI L'UTILISATEUR EST IDENTIFIE
  if (idUser) {
    // récupère le vote de l'utilisateur connecté pour ce post
    initVote = useSelector((state) => state.like).find((item) => (item.post_id === id) && (item.user_id === idUser));
    if (!initVote) { // l'user n'a pas encore voté pour ce post
      initVote = { id: 'none', value: 'none' };
    }
  }

  const [vote, setVote] = useState(initVote);
  const [voteVal, setVoteVal] = useState(vote.value);

  const handleLike = (e) => {
    // si l'utilisateur n'est pas connecté
    if (!voteVal) {
      handleShow(); // ouverture de la modal
      return false;
    }

    dispatch({
      type: 'HANDLE_LIKE',
      idUser,
      idPost: id,
      currentValue: voteVal, // => valeur de base. Si l'user n'a pas encore voté la valeur de base est 'none', si c'est ('like' ou 'dislike') c'est qu'il a voté entre temps
      newValue: e.currentTarget.value, // => la valeur du vote qui vient d'être fait.
    });

    setVoteVal(e.currentTarget.value);// modifie la valeur de son vote (like ou dislike)
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vous devez être connecté pour pouvoir voter!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary">
            <Link to="/login">Connexion</Link>
          </Button>
          <Button variant="info">
            <Link to="/inscription">Inscription</Link>
          </Button>
        </Modal.Footer>
      </Modal>


      <Button
        variant="btn-light"
        className="like justify-content-between"
        disabled=""
        onClick={handleLike}
        value="like"
      >
        <Image
          src={voteVal === 'like' ? LikeActiveImg : LikeImg}
          width={20}
          height={20}
          className="align-self-center"
          rounded
        />
        <span>{post.total_like}</span>
      </Button>{' '}

      <Button
        variant="btn-light"
        className="dislike justify-content-between"
        onClick={handleLike}
        value="dislike"
      >
        <Image
          src={voteVal === 'dislike' ? DislikeActiveImg : DislikeImg}
          width={20}
          height={20}
          className="align-self-center"
          rounded
        />
        <span className="flex-grow-1">{post.total_dislike}</span>
      </Button>{' '}
    </>
  );
};

export default Votes;
