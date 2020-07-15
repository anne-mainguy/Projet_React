import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import './styles.css';


const Inscription = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState({ display: 'none', msg: '' });
  const [errorPseudo, setErrorPseudo] = useState({ display: 'none', msg: '' });
  const [errorPass, setErrorPass] = useState({ display: 'none', msg: '' });
  const [errorConfirmPass, setErrorConfirmPass] = useState({ display: 'none', msg: '' });

  const checkEmail = (e) => {
    const emailVal = e.target.value;
    const regexEmail = /^[^\W][a-zA-Z0-9]+([._-][a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(emailVal)) {
      setErrorEmail({ display: 'block', msg: 'Email invalide' });
      e.target.setCustomValidity('invalide');
    }
    else {
      setErrorEmail({ display: 'none', msg: '' });
      e.target.setCustomValidity('');
    }
  };

  const checkInput = (e) => {
    const pseudoVal = e.target.value;
    if (pseudoVal.length >= 20) {
      setErrorPseudo({ display: 'block', msg: 'Vous avez atteint le maximum' });
      e.target.setCustomValidity('invalide');
    }
    else {
      setErrorPseudo({ display: 'none', msg: '' });
      e.target.setCustomValidity('');
    }

    if (pseudoVal.length > 0 && !/^[A-Za-z0-9-]+$/.test(pseudoVal)) {
      setErrorPseudo({ display: 'block', msg: 'Caractère invalide' });
      e.target.setCustomValidity('invalide');
    }
    setPseudo(pseudoVal);
  };

  const checkPassword = (e) => {
    const passVal = e.target.value;

    if (passVal.length < 8 || passVal.length > 12) {
      setErrorPass({ display: 'block', msg: 'Entre 8 et 12 caractères' });
      e.target.setCustomValidity('invalide');
    }
    else {
      setErrorPass({ display: 'none', msg: '' });
      e.target.setCustomValidity('');
    }

    if (passVal.length > 0 && /[\s]+/.test(passVal)) {
      setErrorPass({ display: 'block', msg: 'Pas d\'espace' });
      e.target.setCustomValidity('invalide');
    }
    setPassword(passVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorConfirmPass({ display: 'block', msg: 'Confirmation inexact' });
      return false;
    }

    dispatch({
      type: 'HANDLE_INSCRIPTION',
      payload: {
        email,
        password,
        pseudo,
        history,
      },
    });
  };

  return (
    <main className="inscriptionContainer">

      <Form
        className="formWrapper"
        onSubmit={handleSubmit}
      >
        <h2>Création d'un compte </h2>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email<span>*</span></Form.Label>
          <Form.Control required type="email" placeholder="jean-roger@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} />
          <Form.Control.Feedback style={{ display: errorEmail.display }} type="invalid">{errorEmail.msg}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="pseudo">
          <Form.Label>Pseudo<span>*</span></Form.Label>
          <Form.Text className="text-muted">20 caractères max (lettres, nombres et tiret)</Form.Text>
          <Form.Control required type="text" placeholder="jojo" value={pseudo} onChange={checkInput} />
          <Form.Control.Feedback style={{ display: errorPseudo.display }} type="invalid">{errorPseudo.msg}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password<span>*</span></Form.Label>
          <Form.Text className="text-muted">8 a 12 caractères</Form.Text>
          <Form.Control required type="password" placeholder="complexe545" value={password} onChange={checkPassword} />
          <Form.Control.Feedback style={{ display: errorPass.display }} type="invalid">{errorPass.msg}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirmation password<span>*</span></Form.Label>
          <Form.Control required type="password" placeholder="complexe545" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Form.Control.Feedback style={{ display: errorConfirmPass.display }} type="invalid">{errorConfirmPass.msg}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
};


export default Inscription;
