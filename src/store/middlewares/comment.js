
export default (store) => (next) => (action) => {
  switch (action.type) {
    case 'HANDLE_COMMENT': {

      const { id_user, id_post, contenu } = action;

      const { comments } = store.getState();
      const ids = Math.max(...comments.map((comment) => comment.id));
      let id = ids + 1;
      id = parseInt(id, 10);


      const newComment = {
        id,
        id_user,
        id_post,
        contenu,
      };

      store.dispatch({
        type: 'NEW_COMMENT',
        newComment,
      });


      break;
    }

    default: {
      next(action);
    }
  }
};
