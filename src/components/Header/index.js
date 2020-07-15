import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image, Figure } from 'react-bootstrap';

import brain from '../../assets/img/brain.png';
import './styles.css';

const Header = () => {
  const dispatch = useDispatch();
  const connected = useSelector((state) => state.isAuth);
  const [isConnect, setIsConnect] = useState(connected);

  const changeProfil = useSelector((state) => state.changeProfil);

  useEffect(() => {
    if (connected) {
      setIsConnect(true);
    }
    else {
      setIsConnect(false);
    }
  }, [connected]);

  // pour la gestion de l'actualisation de l'affichage des éléments user (pseudo et avatar) en cas de modification de profil
  useEffect(() => {
    if (changeProfil) {
      dispatch({
        type: 'PROFIL_CHANGE_MADE',
      });
    }
  }, [changeProfil]);

  const disconnected = () => {
    sessionStorage.clear();
    dispatch({
      type: 'CONNECTED',
      isAuth: false,
    });
  };

  const IdentifiedUser = () => {
    if (sessionStorage.idUser) {
      let userCurrent = sessionStorage.idUser;
      userCurrent = parseInt(userCurrent);
      const user = useSelector((store) => store.users).find((item) => item.id === userCurrent);

      return (
        <div className="row mr-md-1 justify-content-center">
          <Figure className="mb-0 align-items-center">
            <Figure.Image
              className="minAvatar"
              width={30}
              height={30}
              alt="Avatar de l'utilisateur"
              roundedCircle
              src={user.avatar}
            />
          </Figure>
          <NavDropdown title={user.pseudo} id="basic-nav-dropdown" className="md-right-4 pl-2">
            <Link className="dropdown-item" to={`/profil/${user.id}`}>Mon profil</Link>
            <Link className="dropdown-item" to="/account">Modifier mon profil</Link>
            <Link className="dropdown-item" to="/newpost">Créer un post</Link>
            <NavDropdown.Divider />
            <Link
              className="dropdown-item"
              onClick={disconnected}
              to="/"
            >
              Déconnexion
            </Link>
          </NavDropdown>
        </div>
      );
    }

    return false;
  };

  const NotIdentifiedUser = () => {
    return (
      <div className="row mr-md-1">
        <NavLink className="col-md-6 nav-link" to="/login">Connexion</NavLink>
        <NavLink to="/inscription" className="col-md-6 nav-link">Inscription</NavLink>
      </div>
    );
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" className="align-items-md-stretch">
        <NavLink className="navbar-brand" to="/">
          <Image src={brain} roundedCircle alt="logo" className="d-block mx-auto logo" />
          KESTUVOI
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="align-items-md-stretch" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-md-stretch">
          <Nav className="mr-auto align-items-md-end">
            <NavLink className="col-md-6 nav-link" to="/">Accueil</NavLink>
            <NavLink className="col-md-6 nav-link" to="/posts">Publications</NavLink>
          </Nav>
          <Nav className="ml-0 align-items-md-start">
            {/* les liens affichés seront différents si l'utilisateur est connecté ou non */}
            {isConnect ? <IdentifiedUser /> : <NotIdentifiedUser /> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
