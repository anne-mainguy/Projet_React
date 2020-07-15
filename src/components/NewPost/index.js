import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Form, Button, Container, Image } from 'react-bootstrap';

import backBrain from '../../assets/img/back_brain.jpg';
import './styles.css';

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formFile, setFormFile] = useState('');
  const [imgPost, setImgPost] = useState(backBrain);
  const [formTheme, setFormTheme] = useState('Tous');
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [errorFile, setErrorFile] = useState({ msg: 'Le fichier est incorrect', display: 'none' });
  const [errorTitle, setErrorTitle] = useState('none');
  const [errorDescription, setErrorDescription] = useState('none');

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
        setImgPost(reader.result);
      });
      reader.readAsDataURL(file[0]);

      setFormFile(file);
    }
    else {
      setImgPost(backBrain);
    }
  };

  /* ======== verification du titre ======= */
  const handleTitle = (e) => {
    if (e.target.value.length > 40) {
      setErrorTitle('block');
    }
    else {
      setErrorTitle('');
      setFormTitle(e.target.value);
    }
  };

  /* ======== verification de la description ======= */
  const handleDescription = (e) => {
    if (e.target.value.length > 500) {
      setErrorDescription('block');
    }
    else {
      setErrorDescription('');
      setFormDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formFile !== '') {
      dispatch({
        type: 'HANDLE_NEW_POST',
        formTheme,
        formFile,
        formDescription,
        history,
      });
    }
    else {
      setErrorFile({ display: 'block', msg: 'Vous devez selectionner une image' });
    }
  };


  return (
    <main className="mt-5">
      <h2>Créer un nouveau post</h2>
      <Form
        className="newPost"
        onSubmit={handleSubmit}
      >
        <Container className="mb-3">
          <Image src={imgPost} rounded />
        </Container>
        <Form.Group className="inputFileContainer" controlId="image">
          <Form.Label>Image<span>*</span></Form.Label>
          <Button type="button" variant="info">Choisir l'image</Button>
          <Form.Control
            className="inputFile"
            type="file"
            placeholder="Selectionner votre image"
            onChange={handleFile}
          />
          <Form.Control.Feedback style={{ display: errorFile.display }} type="invalid">{errorFile.msg}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formTheme">
          <Form.Label className="">Themes</Form.Label>
          <Form.Control
            onChange={(e) => {
              setFormTheme(e.target.value);
            }}
            data-type="theme"
            required
            size="sm"
            as="select"
            defaultValue="Autre"
          >
            <option value="Nature">Nature</option>
            <option value="Architecture">Architecture</option>
            <option value="Alimentaire">Alimentaire</option>
            <option value="Art">Art</option>
            <option value="Autre">Autre</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formTitre">
          <Form.Label>Titre</Form.Label>
          <Form.Text className="text-muted">20 caractères maximum</Form.Text>
          <Form.Control
            type="text"
            placeholder="Donnez un titre a votre paréido"
            value={formTitle}
            onChange={handleTitle}
          />
          <Form.Control.Feedback style={{ display: errorTitle }} type="invalid">Vous avez atteint le maximum.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Text className="text-muted">500 caractères maximum</Form.Text>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Racontez son histoire..."
            value={formDescription}
            onChange={handleDescription}
          />
          <Form.Control.Feedback style={{ display: errorDescription }} type="invalid">Vous avez atteint le maximum.</Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-info" type="submit">
          Valider
        </Button>
      </Form>
    </main>
  );
};


export default NewPost;
