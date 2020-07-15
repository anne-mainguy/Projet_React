import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('john-doe@gmail.com');
  const [password, setPassword] = useState('password');

  const msgErrorLogin = useSelector((state) => state.msgErrorLogin);

  const isAuth = useSelector((state) => state.isAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'HANDLE_LOGIN',
      email,
      password,
      history,
    });
  };

  return (
    <section className="inscriptionContainer">
      <Form
        className="formWrapper"
        onSubmit={handleSubmit}
      >
        <h2>Connexion</h2>
        <p className="text-danger"> {msgErrorLogin}</p>
        {/* si le user est authentifié (isAuth === true) alors il est redirigé sur la homePage */}
        {isAuth && <Redirect to="/" />}
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Connexion
        </Button>
      </Form>
    </section>

  );
};


export default Login;
