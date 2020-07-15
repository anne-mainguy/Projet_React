export default (store) => (next) => (action) => {
  switch (action.type){
    case 'HANDLE_NEW_POST': {
      const { posts} = store.getState();
      // récupère l'id le plus élevé des posts
      const ids = Math.max(...posts.map((item) => item.id));
      // rajoute 1 au chiffre optenu par ids pour avoir un nouvel id unique
      const newId = ids + 1;
      const pathFile = 'jo_la_carotte.jpg'; // donne un chemin défini pour simuler un véritable upload.

      const id_user = parseInt(sessionStorage.idUser);

      const newPost = {
        id: newId,
        id_user,
        image: pathFile,
        theme: action.formTheme,
        title: action.formTitle,
        description: action.formDescription,
        total_like: 0,
        total_dislike: 0,
      };

      store.dispatch({
        type: 'NEW_POST',
        newPost,
      });

      action.history.push('/posts');

      break;
    }

    default: {
      next(action);
    }
  }
};
