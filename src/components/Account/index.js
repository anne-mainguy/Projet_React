// Import
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Container, Image, Form, Button } from 'react-bootstrap';
import './styles.css';

const Account = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  // récupère l'id du user dans le sessionStorage
  // ! avec le back ce sera une requete faite avec le token
  let { idUser } = sessionStorage;
  idUser = parseInt(idUser);

  const user = useSelector((state) => state.users).find((item) => item.id === idUser);
  const [infoUser, setInfoUser] = useState(user);

  const [pseudo, setPseudo] = useState(user.pseudo);
  const initErrorPseudo = { display: 'none', msg: '' };
  const [errorPseudo, setErrorPseudo] = useState(initErrorPseudo);

  const [bio, setBio] = useState(infoUser.bio);
  const initErrorBio = { display: 'none' };
  const [errorBio, setErrorBio] = useState(initErrorBio);

  const [avatar, setAvatar] = useState(user.avatar);
  const [formFile, setFormFile] = useState('');
  const [errorFile, setErrorFile] = useState({ msg: '', display: 'none' });


  /* ====== VALIDATION FILE ====== */
  // vérification du nombre de fichier
  const maxSelectFile = (event) => {
    let files = event.target.files;
    if (files.length > 1) {
      setErrorFile({ msg: '1 seul fichier par post', display: 'block' });
      event.target.value = '';
      return false;
    }
    return true;
  };

  // verification du type du fichier
  const checkMimeType = (event) => {
    let files = event.target.files;
    const types = ['image/png', 'image/jpeg', 'image/gif'];
    if (types.every((type) => files[0].type !== type)) {
      setErrorFile({ msg: 'Type de fichier inccorect', display: 'block' });
      event.target.value = '';
      return false;
    }

    return true;
  };

  // verification du poids du fichier
  const checkFileSize = (event) => {
    const files = event.target.files;
    const size = 150000;
    if (files[0].size > size) {
      setErrorFile({ msg: 'Fichier trop lourd', display: 'block' });
      event.target.value = '';
      return false;
    }
    return true;
  };

  // fonction appelée directement au onChange du file qui va appeler les 3 autres fonctions de vérification du fichier (nombre, MIME et poids)
  const handleFile = (e) => {
    const file = e.target.files;
    setErrorFile({ msg: '', display: 'none' });
    if (maxSelectFile(e) && checkMimeType(e) && checkFileSize(e)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setAvatar(reader.result);
      });

      reader.readAsDataURL(file[0]);
      setFormFile(file);
    }
  };

  /* ======== verification de la description ======= */
  const handleBio = (e) => {
    if (e.target.value.length > 500) {
      setErrorBio({ display: 'block' });
    }
    else {
      setErrorBio(initErrorBio);
      setBio(e.target.value);
    }
  };

  /* ======== vérification du pseudo =============== */
  const handlePseudo = (e) => {
    const { value } = e.target;

    if (value.length > 20) {
      setErrorPseudo({ display: 'block', msg: 'Pas plus de 20 caractères' });
    }
    else if (value.length > 0 && !/^[A-Za-z0-9-]+$/.test(value)) {
      setErrorPseudo({ display: 'block', msg: 'Uniquement des lettres, des nombres, des tirets et sans espace' });
    }
    else {
      setErrorPseudo(initErrorPseudo);
      setPseudo(value);
    }

    if (value === '') {
      setErrorPseudo({ display: 'block', msg: 'Vous devez saisir un pseudo' });
    }
  };

  /* ========== soumission du forulaire =========== */
  const handleProfil = (e) => {
    e.preventDefault();

    dispatch({
      type: 'HANDLE_PROFIL',
      formFile,
      pseudo,
      bio,
      idUser,
      history,
    });

    setAvatar(infoUser.avatar);
    setErrorPseudo(initErrorPseudo);
    setErrorBio(initErrorBio);
  };

  return (
    <main>
      <section className="profilUser">
        <h2>Modifier mon profil</h2>

        <Form
          className="mb-5"
          onSubmit={handleProfil}
        >
          <Container className="mb-3">
            <Image src={avatar} roundedCircle className="maxAvatar" />
          </Container>
          <Form.Group className="inputFileContainer" controlId="avatar">
            <Button type="button" variant="info">Choisir l'image</Button>
            <Form.Control className="inputFile" type="file" onChange={handleFile} />
            <Form.Control.Feedback style={{ display: errorFile.display }} type="invalid">{errorFile.msg}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="pseudo">
            <Form.Label>Pseudo</Form.Label>
            <Form.Control type="text" value={pseudo} onChange={handlePseudo} required />
            <Form.Control.Feedback style={{ display: errorPseudo.display }} type="invalid">{errorPseudo.msg}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" value={bio} onChange={handleBio} />
            <Form.Control.Feedback style={{ display: errorBio.display }} type="invalid">500 caractères maximum</Form.Control.Feedback>
          </Form.Group>
          <Button variant="outline-info" type="submit" className="mt-2">Modifier</Button>
        </Form>
      </section>
    </main>
  );
};

export default Account;
