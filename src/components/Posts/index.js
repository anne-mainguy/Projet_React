import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardDeck, Form, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';

import Post from 'src/components/Post';

import './navChoice.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Posts = () => {

  // récupère tous les posts sans critères spécifiques pour l'affichage de base (serra aussi utiliser comme valeur pour remettre l'affichage a 0)
  const initPosts = useSelector((state) => state.posts);
  const [postsSelection, setPostsSelection] = useState(initPosts);
  const [date, setDate] = useState('DESC');
  const [like, setLike] = useState('random');
  const [theme, setTheme] = useState('Tous');

  const getTheme = (name) => {
    if (name === 'Tous') {
      setPostsSelection(initPosts);
    }
    else {
      const sortPostsByTheme = initPosts.filter((item) => item.theme === name);
      setPostsSelection(sortPostsByTheme);
    }
  };

  const getDate = (order) => {
    // met like en random parce que ce n'est pas compatible avec date
    setLike('random');

    // récupère la liste des posts sans critères particuliers et le copie dans currentPosts
    let currentPosts = [...initPosts];
    if (theme !== 'Tous') {
      // remplace la liste de currentPosts par la liste des posts ayant le thème sélectionné
      currentPosts = initPosts.filter((item) => item.theme === theme);
    }

    if (order === 'ASC') {
      // remplace la liste de currentPosts par la liste des poste ayant le thème sélectionné (ou tous) en sens inverse
      const reverse = currentPosts.reverse();
      setPostsSelection(reverse);
    }
    else {
      // si la valeur de date n'est pas ASC alors on prend la valeur de currentPost de 'base' avec ou sans thème (tous)
      setPostsSelection(currentPosts);
    }
  };

  const getLike = (order) => {
    let currentPosts = initPosts;
    // remets date a sa valeur de base parce que ce n'est pas compatible avec les likes
    setDate('DESC');
    if (theme !== 'Tous') {
      // remplace la liste de currentPosts par la liste des posts ayant le thème sélectionné
      currentPosts = initPosts.filter((item) => item.theme === theme);
    }

    if (order === 'random') {
      const random = (tab) => {
        const newTab = [];
        const tabItem = [];
        // je crée un tableau avec autant d'item que le tableau de données, en donnant a chaques éléments la valeur numérique correspondant son item 0:0, 1:1...etc
        for (let i = 0; i < tab.length; i++ ) {
          tabItem.push(i);
        }

        for (let i = 0; i < tab.length; i++ ) {
          // récupère un élement aléatoirement dans le tableau tabItem (donc un nouvel item)
          const nbRandom = Math.floor(Math.random() * tabItem.length);

          // récupère la valeur correspondante a l'item du tableau tabItem
          const item = tabItem[nbRandom];

          // attribut cet item a l'index de l'élément du tableau envoyé a la fonction en cours de lecture
          newTab.push(tab[item]);

          // supprime l'élément utilisé du tableau de tabItem pour qu'il ne soit pas réutilisé
          tabItem.splice(nbRandom, 1);
        }
        // et paf! Ca fait des chocapic
        return newTab;
      };

      const likeRandom = random(currentPosts);
      setPostsSelection(likeRandom);
    }
    else {
      const likeDESC = [...currentPosts].sort((a, b) => {
        if (a.total_like > b.total_like) {
          return -1;
        }
        if (a.total_like < b.total_like) {
          return 1;
        }
        return 0;
      });

      setPostsSelection(likeDESC);
    }
  };

  return (
    <main>
      <h2>VOS PAREIDOS</h2>
      <section>
        <h3>Afficher par : </h3>
        <div className="nav-choice justify-content-around mt-5">
          <div>
            <span>Date</span>
            <ButtonGroup
              toggle
              className="ml-2"
              data-type="date"
              onChange={(e) => {
                setDate(e.target.value);
                getDate(e.target.value);
              }}
            >
              <ToggleButton
                className="btn-dark"
                size="sm"
                type="radio"
                name="date"
                defaultChecked
                value="DESC"
              >
                <FontAwesomeIcon icon="caret-down" />
              </ToggleButton>
              <ToggleButton
                className="btn-dark"
                size="sm"
                type="radio"
                name="date"
                value="ASC"
              >
                <FontAwesomeIcon icon="caret-up" />
              </ToggleButton>
            </ButtonGroup>
          </div>
          <div>
            <span>Likes</span>
            <ButtonGroup
              toggle
              className="ml-2"
              data-type="like"
              onChange={(e) => {
                setLike(e.target.value);
                getLike(e.target.value);
              }}
            >
              <ToggleButton
                className="btn-dark"
                size="sm"
                type="radio"
                name="like"
                defaultChecked
                value="DESC"
              >
                <FontAwesomeIcon icon="caret-down" />
              </ToggleButton>
              <ToggleButton
                className="btn-dark"
                size="sm"
                type="radio"
                name="like"
                defaultChecked
                value="random"
              >
                <FontAwesomeIcon icon="random" />
              </ToggleButton>
            </ButtonGroup>
          </div>
          <Form
            id="formTheme"
            className=""
            onSubmit={(e) => e.preventDefault()}
          >
            <Form.Row>
              <Form.Group as={Row} controlId="formTheme">
                <span className="col-4 pr-5">Themes</span>
                <Form.Control
                  onChange={(e) => {
                    setTheme(e.target.value);
                    getTheme(e.target.value);
                  }}
                  data-type="theme"
                  className="col-8 pl-1"
                  size="sm"
                  as="select"
                  defaultValue="Tous"
                >
                  <option value="Tous">Tous</option>
                  <option value="Nature">Nature</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Alimentaire">Alimentaire</option>
                  <option value="Art">Art</option>
                  <option value="Autre">Autre</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </section>

      <CardDeck className="py-5">
        {
          postsSelection.map((item) => {
            return (
              <Post postId={item.id} key={item.id} />

            );
          })
        }

      </CardDeck>
    </main>
  );
};

export default Posts;
