export default (store) => (next) => (action) => {
  switch (action.type) {
    case 'HANDLE_LIKE': {
      const { posts, like } = store.getState();

      // cible le post pour pouvoir gérer ses total_like et total_dislike
      const post = posts.find((item) => (item.id === action.idPost));
      // récupère l'index du post dans le tableau posts
      const indexPost = posts.indexOf(post);

      // cherche si il n'y a pas déja un vote correspondant à l'id l'utilisateur associé au post. Sera undefined si il n'a pas encore voté sinon ce sera un object
      const voteExist = like.find((item) => (item.post_id === action.idPost) && (item.user_id === action.idUser));
      // récupère l'index dans le tableau like
      const indexLike = like.indexOf(voteExist);

      if (action.currentValue === 'none') { // l'user n'a pas encore voté pour ce post
        // récupère tous les ids des likes, sélectionne le plus grand
        const ids = Math.max(...like.map((item) => item.id));
        // rajoute 1 au chiffre obtenu par ids pour avoir un nouvel id unique
        const newId = ids + 1;

        // crée le nouvel objet
        const newVote = {
          id: newId,
          user_id: action.idUser,
          value: action.newValue,
          post_id: action.idPost,
        };

        store.dispatch({
          type: 'NEW_VOTE',
          newVote, // l'objet contenant les informations sur le vote (id du user, id du post...)
          indexPost,
          typeVote: action.newValue, // valeur du vote (like / dislike)
        });
      }
      else { // l'user a déja voté pour ce post
        // vérifie si l'utilisateur ne vote pas 2 fois la même valeur
        if (action.currentValue === action.newValue) {
          return;
        }

        // ! stockage dans le store via un dispatch, mais devrait être géré par le back
        store.dispatch({
          type: 'CHANGE_VOTE',
          indexLike, // id du like déjà existant dans like
          newValue: action.newValue, // nouvelle valeur du vote (like / dislike)
          indexPost, // index du post
        });
      }

      return;
    }

    default: {
      next(action);
    }
  }


};
