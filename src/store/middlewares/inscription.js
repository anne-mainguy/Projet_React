export default (store) => (next) => (action) => {
  switch (action.type){
    case 'HANDLE_INSCRIPTION': {
      const { email, password, pseudo, history } = action.payload;

      if (email !== '' || password !== '' || pseudo !== '') {
        const { users } = store.getState();
        const ids = Math.max(...users.map((user) => user.id));
        const id = ids + 1;
        const newUser = {
          id,
          email,
          pseudo,
          password,
          avatar: 'http://localhost:8080/avatar/avatarUser.png',
        };

        store.dispatch({
          type: 'ADD_NEW_USER',
          newUser,
        });

        history.push('/login');
      }

      break;
    }
    default: {
      next(action);
    }
  }
};
