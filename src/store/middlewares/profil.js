export default (store) => (next) => (action) => {
  switch (action.type) {
    case 'HANDLE_PROFIL': {
      const { users } = store.getState();
      const { bio, pseudo, formFile, idUser, history } = action;
      let pathFile = '';

      // cible les données du user dans le state
      const dataUser = users.find((item) => item.id === idUser);
      // récupére l'index du user dans le tableau users du state
      const userIndex = users.indexOf(dataUser);
      // cible l'user par son index dans state.users
      const userTarget = users[userIndex];


      // si un fichier a été transmis c'est que l'utilisateur veut remplacer celui déja présent
      if (formFile !== '') {
        // comme un véritable upload n'est pas possible sans back, ici on récupére un avatar d'un site tiers
        pathFile = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Brown';
      }
      else {
        pathFile = dataUser.avatar;
      }

      store.dispatch({
        type: 'CHANGE_PROFIL',
        userTarget,
        pseudo,
        bio,
        pathFile,
      });

      sessionStorage.changeProfil = 'true';
      history.push(`/profil/${idUser}`);

      return;
    }

    default: {
      next(action);
    }
  }
};
