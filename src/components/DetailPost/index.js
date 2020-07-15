import React from 'react';
import { useSelector } from 'react-redux'; 
import { useParams, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Card, Figure } from 'react-bootstrap';

import Votes from 'src/components/Votes';
import Comment from 'src/components/Comment';
import FormComments from 'src/components/FormComments';

import './styles.css';

/**
 * Affiche le detail d'un post, ses likes, ses commentaires et lien vers le profil de auteur
 *
 * parametre dans l'url : id du post
 */
const DetailPost = () => {
  let { id } = useParams(); // récupère le paramètre de l'url ici nommé id
  id = Number(id);
  let isAuth = sessionStorage.idUser;
  isAuth = parseInt(isAuth);

  // récupère toutes les données du post par son id (récupéré dans l'URL)
  const dataPost = useSelector((state) => state.posts).find((post) => post.id === id);

  // si le post n'existe pas on redirige vers une page d'erreur
  if (!dataPost) {
    return (
      <Redirect to="/no_existence/post" />
    );
  }

  // récupére les infos de l'auteur du post en cour, boucle sur tous les users et demande a récupèrer celui dont l'id correspond à l'id de l'auteur du post
  const author = useSelector((state) => state.users).find((user) => user.id === dataPost.id_user);

  // récupère tous les commentaires associés a ce post
  const comments = useSelector((state) => state.comments).filter((comment) => comment.id_post === id);

  const ShowComment = () => {
    return (
      <Card>
        {
          comments.map((item) => {
            return (
              <Comment id={item.id} key={item.id} />
            );
          })
        }
      </Card>
    );
  };

  return (
    <main>
      <section id="detailPost">
        <h2>{dataPost.title}</h2>

        <Figure id="imgDetail">
          <Figure.Image
            alt="Image paréidolique"
            src={`http://localhost:8080/imgPosts/${dataPost.image}`}
          />
          <Figure.Caption>
            <Link to={`/profil/${author.id}`}>{author.pseudo}</Link>
            <span>{dataPost.date}</span>
          </Figure.Caption>
        </Figure>
        {/* récupère la partie 'like' de l'affichage */}
        <Votes {...dataPost} />
        <article className="my-5">
          {dataPost.description}
        </article>

      </section>
      <section id="comments">
        <h3>Vos Commentaires :</h3>
        {(comments.length > 0) ? <ShowComment /> : <p>Cette publication n'a pas encore de commentaire...</p>}
        {/* seulement si l'utilisateur est connecté, on affiche le formulaire pour ajouter un commentaire */}
        {isAuth ? <FormComments id_post={dataPost.id} /> : false}
      </section>

    </main>
  );
};


export default DetailPost;
