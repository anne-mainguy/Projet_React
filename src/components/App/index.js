import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import HomePage from 'src/components/HomePage';
import Login from 'src/components/Login';
import Inscription from 'src/components/Inscription';
import Posts from 'src/components/Posts';
import DetailPost from 'src/components/DetailPost';
import Account from 'src/components/Account';
import Profil from 'src/components/Profil';
import NewPost from 'src/components/NewPost';
import ErrorPage from 'src/components/ErrorPage';
import NoExistence from 'src/components/NoExistence';

// === Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCaretUp, faCaretDown, faRandom } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCaretUp, faCaretDown, faRandom);


const App = () => {

  const dispatch = useDispatch();

  /**
   * En cas de refresh, si des données sont contenu dans la sessionStorage, alors c'est que l'utilisateur est connecté a son compte.
   * ! dans la version avec un vrai back je prévois de stocker un token et non juste l'id comme je l'ai fait ici pour simplifier
   */
  useEffect(() => {
    if (sessionStorage.idUser) {
      dispatch({
        type: 'CONNECTED',
        isAuth: true,
      });
    }
  }, []);


  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/detail_post/:id" component={DetailPost} />
        <Route path="/account" component={Account} />
        <Route path="/profil/:id" component={Profil} />
        <Route path="/newpost" component={NewPost} />
        <Route path="/no_existence/:wanted" component={NoExistence} />

        <Route component={ErrorPage} />

      </Switch>
      <Footer />
    </div>
  );
};

export default App;
