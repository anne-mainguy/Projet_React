export default (store) => (next) => (action) => {
  switch (action.type){
    case 'HANDLE_LOGIN': {

      const errorLogin = () => {
        store.dispatch({
          type: 'ERROR_LOGIN',
          msgError: 'Identifiant ou mot de passe incorrect.',
        });
      };
      // Va chercher dans le store tous les users
      const users = store.getState().users
      const { email, password, history } = action;

      if (email !== '' || password !== '') {
      // On verifie que le user existe dans la liste des users
        const userExist = users.filter((user) => user.email === email);
        // Si l'utilisateur existe alors on continue la verification, si non on envoie un message d'erreur
        if (userExist.length === 1) {
          if (userExist[0].password === password) {
            store.dispatch({
              type: 'HANDLE_AUTH',
              isAuth: true,
            });

            // ! dans la version avec un vrai back, on stockera un token et non juste l'id comme on l'a fait ici pour simplifier
            sessionStorage.idUser = userExist[0].id;

            history.push('/posts');

          }
          else {// pseudo non enregistré
            errorLogin();
          }
        }
        else {// mail invalide
          errorLogin();
        }
      } else { // l'email ou le password sont vides
        store.dispatch({
          type: 'ERROR_LOGIN',
          msgError: 'Vous devez saisir votre identifiant et votre mot de passe.',
        });
      }
      break;
    }
    default: {
      next(action);
    }
  }
};
