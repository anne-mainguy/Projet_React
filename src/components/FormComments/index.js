import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const FormComments = ({ id_post }) => {
  const dispatch = useDispatch();
  const [contentComment, setContentComment] = useState('');
  const [maxLength, setMaxLength] = useState({ count: 500, style: 'valide' });


  /* ======== verification du commentaire ======= */
  const handleComment = (e) => {
    if (e.target.value.length >= 500) {
      setMaxLength({ count: 'Vous avez atteint le maximum.', style: 'invalid' });
    }
    else {
      setContentComment(e.target.value);
      setMaxLength({ count: 500 - e.target.value.length, style: 'valide' });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (contentComment !== '') {
      const idUser = parseInt(sessionStorage.idUser);
      dispatch({
        type: 'HANDLE_COMMENT',
        id_user: idUser,
        id_post,
        contenu: contentComment,
      });

      setContentComment('');
      setMaxLength({ count: 500, style: 'valide' });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="my-5"
    >
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Text className="text-muted">500 caractères maximum</Form.Text>
        <Form.Control
          as="textarea"
          // maxLength="500"
          rows="3"
          placeholder="Saisissez votre commentaire..."
          value={contentComment}
          onChange={handleComment}
        />
        <Form.Control.Feedback style={{ display: 'block' }} type={maxLength.style}>{maxLength.count}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="secondary" type="submit">
        Valider
      </Button>
    </Form>
  );
};

FormComments.propTypes = {
  id_post: PropTypes.number.isRequired,
};

export default FormComments;
