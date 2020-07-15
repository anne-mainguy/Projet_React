const initialState = {
  users: [{
    id: 1,
    pseudo: "john-doe",
    avatar: "http://localhost:8080/avatar/avatarUser.png",
    email: "john-doe@gmail.com",
    password: "password",
    registration_date: "28/10/2019",
    bio: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, sempre rutrum, nulla. Nunc purus."
  }, {
    id: 2,
    "pseudo": "mpevreal1",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=ShirtVNeck&clotheColor=Red&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Eating&skinColor=Black",
    "email": "pdaubney1@accuweather.com",
    password: "otKGxbAf",
    "registration_date": "11/05/2019",
    "bio": ""
  }, {
    id: 3,
    "pseudo": "irubrow2",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardMagestic&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Blue03&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=Tanned",
    "email": "tjacqueminot2@zimbio.com",
    password: "TBNGOYa",
    "registration_date": "04/06/2019",
    "bio": "Proin leo odio, id porttitor, conséquat in, conséquat ut, nulla. Sed accumsan felis. Ut at dolor quis odio conséquat varius. \ n \ nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
  }, {
    id: 4,
    "pseudo": "krounds3",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=PastelOrange&eyeType=Happy&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Light",
    "email": "gmarty3@japanpost.jp",
    password: "n8PF7CDuK4J",
    "registration_date": "25/07/2019",
    "bio": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
  }, {
    id: 5,
    "pseudo": "csparshott4",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Prescription01&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=DarkBrown",
    "email": "cmcgannon4@cdbaby.com",
    password: "N7BKNCrK",
    "registration_date": "14/03/2020",
    "bio": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
  }, {
    id: 6,
    "pseudo": "cgrattan5",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFrida&accessoriesType=Prescription02&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=Default&mouthType=Tongue&skinColor=Light",
    "email": "lmartinat5@examiner.com",
    password: "LRTe2gV2Zo",
    "registration_date": "24/07/2019",
    "bio": "Dans hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
  }, {
    id: 7,
    "pseudo": "aheaps6",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Kurt&hatColor=White&facialHairType=BeardMagestic&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Grimace&skinColor=Tanned",
    "email": "tchessill6@noaa.gov",
    password: "hwMixAWKkpp",
    "registration_date": "01/05/2019",
    "bio": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. "
  }, {
    id: 8,
    "pseudo": "gcradoc7",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue02&eyeType=Side&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Light",
    "email": "dwildsmith7@bloglovin.com",
    password: "R0qptrGPKFJM",
    "registration_date": "12/12/2019",
    "bio": "Nullam sit amet turpis elementum ligula vehicula conséquat. Morbi a ipsum. Integer a nibh. \ n \ nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. \ n \ nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. "
  }, {
    id: 9,
    "pseudo": "chibling8",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerShirt&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
    "email": "mpavia8@washingtonpost.com",
    password: "Ut6ivUa6",
    "registration_date": "03/08/2019",
    "bio": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, sempre rutrum, nulla. Nunc purus. \ n \ nPhasellus in felis. Donec sempre sapien a libero. Nam dui. \ n \ nProin leo odio , id porttitor, conséquat in, conséquat ut, nulla. Sed accumsan felis. Ut at dolor quis odio conséquat varius. "
  }, {
    id: 10,
    "pseudo": "mgooding9",
    "avatar": "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Red&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Brown",
    "email": "iguillart9@irs.gov",
    password: "VulSpzkZA",
    "registration_date": "24/12/2019",
    "bio": "Morbi porttitor lorem id ligula. Suspendisse ornare conséquat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. \ n \ nFusce conséquat. Nulla nisl. Nunc nisl. \ n \ nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, dans porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. "
  }],
  posts: [
    {
      id: 1,
      "id_user": 8,
      "title": "sociis natoque",
      "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. \ n \ nDuis conséquat dui nec nisi. volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. \ n \ nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Entier aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. ",
      "image": "1.jpg",
      "date": "15/11/2019",
      theme: "Alimentaire",
      "total_like": 67,
      "total_dislike": 2,
    },{
      id: 2,
      "id_user": 9,
      "title": "Morbi porttitor lorem ",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. \ n \ nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui . ",
      "image": "2.jpg",
      "date": "17/11/2019",
      theme: "Autre",
      "total_like": 75,
      "total_dislike": 66,
    },{
      id: 3,
      "id_user": 10,
      "title": "Nulla ac enim.",
      "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "3.jpg",
      "date": "31/01/2020",
      theme: "Autre",
      "total_like": 56,
      "total_dislike": 31,
    },{
      id: 4,
      "id_user": 7,
      "title": "",
      "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. \ n \ nDuis conséquat dui nec nisi. volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. \ n \ nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Entier aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. ",
      "image": "4.jpg",
      "date": "15/11/2019",
      theme: "Art",
      "total_like": 430,
      "total_dislike": 105,
    },{
      id: 5,
      "id_user": 2,
      "title": "Suspendisse ornare conséquat lectus.",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. \ n \ nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui . ",
      "image": "5.jpg",
      "date": "17/11/2019",
      theme: "Autre",
      "total_like": 18,
      "total_dislike": 7,
    },{
      id: 6,
      "id_user": 10,
      "title": "turpis adipiscing lorem.",
      "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "6.jpg",
      "date": "31/01/2020",
      theme: "Art",
      "total_like": 140,
      "total_dislike": 12,
    },{
      id: 7,
      "id_user": 3,
      "title": "Proic sem.",
      "description": "",
      "image": "18.jpg",
      "date": "31/11/2020",
      theme: "Alimentaire",
      "total_like": 78,
      "total_dislike": 2, 
    },{
      id: 8,
      "id_user": 8,
      "title": "ac enim",
      "description": "Aenean fermentum.id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec feugiat et, eros. ",
      "image": "15.jpg",
      "date": "31/01/2020",
      theme: "Nature",
      "total_like": 10,
      "total_dislike": 0,
    },{
      id: 9,
      "id_user": 4,
      "title": "",
      "description": "",
      "image": "9.jpg",
      "date": "10/05/2020",
      theme: "Nature",
      "total_like": 28,
      "total_dislike": 45,
    },{
      id: 10,
      "id_user": 4,
      "title": "Proin eu mi.",
      "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "20.jpg",
      "date": "07/02/2020",
      theme: "Autre",
      "total_like": 18,
      "total_dislike": 5,
    },{
      id: 11,
      "id_user": 3,
      "title": "turpis nec euismod scelerisque",
      "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. ",
      "image": "21.png",
      "date": "05/04/2020",
      theme: "Nature",
      "total_like": 207,
      "total_dislike": 93,
    },{
      id: 12,
      "id_user": 5,
      "title": "euismod scelerisque",
      "description": "",
      "image": "16.jpg",
      "date": "13/08/2020",
      theme: "Paranormal",
      "total_like": 840,
      "total_dislike": 28,
    },{
      id: 13,
      "id_user": 2,
      "title": "Kermit !",
      "description": "",
      "image": "17.jpg",
      "date": "01/01/2020",
      theme: "Autre",
      "total_like": 157,
      "total_dislike": 4,
    },{
      id: 14,
      "id_user": 6,
      "title": "adipiscing sem.",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "12.jpg",
      "date": "28/07/2020",
      theme: "Autre",
      "total_like": 375,
      "total_dislike": 7,
    },{
      id: 15,
      "id_user": 9,
      "title": "nec sem.",
      "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "8.jpg",
      "date": "31/01/2020",
      theme: "Architecture",
      "total_like": 140,
      "total_dislike": 12,
    },{
      id: 16,
      "id_user": 10,
      "title": "Nnibh ligula nec sem.",
      "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "13.jpg",
      "date": "14/10/2020",
      theme: "Autre",
      "total_like": 642,
      "total_dislike": 0,
    },{
      id: 17,
      "id_user": 1,
      "title": "Nulla ac enim",
      "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. \ n \ nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. ",
      "image": "7.jpg",
      "date": "30/08/2020",
      theme: "Nature",
      "total_like": 512,
      "total_dislike": 3,
    }, 
  ],
  comments: [{
    "id": 2,
    "id_user": 6,
    "id_post": 2,
    "date": "24/10/2019",
    "contenu": "Entier ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. \ n \ nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. \ N \ nCurabitur at ipsum ac tellus sempre interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. "
  }, {
    "id": 3,
    "id_user": 1,
    "id_post": 3,
    "date": "09/05/2019",
    "contenu": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Entier aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
  }, {
    "id": 4,
    "id_user": 4,
    "id_post": 4,
    "date": "15/08/2019",
    "contenu": "Maecenas tristique, est et tempus sempre, est quam pharetra magna, ac conséquat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potential. \ n \ nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. \ n \ nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. "
  }, {
    "id": 5,
    "id_user": 8,
    "id_post": 5,
    "date": "11/10/2019",
    "contenu": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. \ n \ nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. \ n \ nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amt lobortis sapien sapien non mi. Entier ac neque. "
  }, {
    "id": 6,
    "id_user": 7,
    "id_post": 6,
    "date": "24/06/2019",
    "contenu": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. \ n \ nSed sagittis. Nam congue, risus sempre porta volutpat, quam pede lobortis ligula ligula , asseoir amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. "
  }, {
    "id": 7,
    "id_user": 8,
    "id_post": 6,
    "date": "15/10/2019",
    "contenu": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Entier aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
  }, {
    "id": 8,
    "id_user": 9,
    "id_post": 7,
    "date": "24/09/2019",
    "contenu": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. \ n \ nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. "
  }, {
    "id": 9,
    "id_user": 7,
    "id_post": 8,
    "date": "07/09/2019",
    "contenu": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. \ n \ nDans hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. \ n \ nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. "
  }, {
    "id": 10,
    "id_user": 3,
    "id_post": 9,
    "date": "29/11/2019",
    "contenu": "Nullam sit amet turpis elementum ligula vehicula conséquat. Morbi a ipsum. Integer a nibh. \ n \ nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. \ n \ nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. "
  }, {
    "id": 11,
    "id_user": 8,
    "id_post": 10,
    "date": "14/07/2019",
    "contenu": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. \ n \ nLectus éénéen. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. "
  }, {
    "id": 12,
    "id_user": 7,
    "id_post": 11,
    "date": "04/03/2020",
    "contenu": "Fusce conséquat. Nulla nisl. Nunc nisl."
  }, {
    "id": 13,
    "id_user": 2,
    "id_post": 12,
    "date": "19/09/2019",
    "contenu": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Entier ac neque. "
  }, {
    "id": 14,
    "id_user": 10,
    "id_post": 13,
    "date": "09/11/2019",
    "contenu": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
  }, {
    "id": 15,
    "id_user": 4,
    "id_post": 14,
    "date": "16/04/2020",
    "contenu": "Pellentesque à nulla. Potentiel de suspendisse. Cras in purus eu magna vulputate luctus. \ n \ nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
  }, {
    "id": 16,
    "id_user": 3,
    "id_post": 15,
    "date": "11/02/2020",
    "contenu": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Entier aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. \ n \ nNullam sit amet turpis elementum ligula vehicula conséquat. Morbi a ipsum. Integer a nibh. "
  }, {
    "id": 17,
    "id_user": 5,
    "id_post": 16,
    "date": "29/02/2020",
    "contenu": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  }, {
    "id": 18,
    "id_user": 1,
    "id_post": 17,
    "date": "31/12/2019",
    "contenu": "Praesent blandit. Nam nulla. Entier pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
  }, {
    "id": 19,
    "id_user": 2,
    "id_post": 5,
    "date": "02/04/2020",
    "contenu": "Entier ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. \ n \ nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. \ N \ nCurabitur at ipsum ac tellus sempre interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. "
  }, {
    "id": 20,
    "id_user": 5,
    "id_post": 5,
    "date": "26/07/2019",
    "contenu": "Curabitur à ipsum ac tellus sempre interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
  }, {
    "id": 21,
    "id_user": 7,
    "id_post": 5,
    "date": "01/05/2019",
    "contenu": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. \ n \ nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. "
  }, {
    "id": 22,
    "id_user": 2,
    "id_post": 5,
    "date": "05/05/2019",
    "contenu": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. \ n \ nMaecenas tristique, est et tempus sempre, est quam pharetra magna, ac conséquat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. "
  }, {
    "id": 23,
    "id_user": 7,
    "id_post": 5,
    "date": "19/05/2019",
    "contenu": "Dans hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. \ n \ nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. \ N \ nSed ante. Vivamus tortor. Duis mattis egestas metus. "
  }, {
    "id": 24,
    "id_user": 10,
    "id_post": 3,
    "date": "26/04/2020",
    "contenu": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. \ n \ nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
  }, {
    "id": 25,
    "id_user": 8,
    "id_post": 3,
    "date": "29/11/2019",
    "contenu": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
  },{
    "id": 1,
    "id_user": 9,
    "id_post": 4,
    "date": "03/01/2020",
    "contenu": "Potentiel suspendisse. Dans eleifend quam a odio. Dans hac habitasse platea dictumst. \ n \ nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. \ n \ nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. "
  }],
  reportings: [{
    "id": 1,
    "id_post": 17,
    "id_comment": null,
    "id_user": 10
  }, {
    "id": 2,
    "id_post": 12,
    "id_comment": null,
    "id_user": 4
  }, {
    "id": 3,
    "id_post": 18,
    "id_comment": null,
    "id_user": 7
  }, {
    "id": 4,
    "id_post": 18,
    "id_comment": null,
    "id_user": 9
  }, {
    "id": 5,
    "id_post": 18,
    "id_comment": null,
    "id_user": 6
  }, {
    "id": 6,
    "id_post": 6,
    "id_comment": null,
    "id_user": 10
  }, {
    "id": 7,
    "id_post": 1,
    "id_comment": null,
    "id_user": 2
  }, {
    "id": 8,
    "id_post": 18,
    "id_comment": null,
    "id_user": 4
  }],
  like: [{
    "id": 1,
    "user_id": 2,
    "value": "like",
    "post_id": 2
  }, {
    "id": 2,
    "user_id": 10,
    "value": "like",
    "post_id": 1
  }, {
    "id": 3,
    "user_id": 10,
    "value": "dislike",
    "post_id": 2
  }, {
    "id": 4,
    "user_id": 2,
    "value": "like",
    "post_id": 2
  }, {
    "id": 5,
    "user_id": 10,
    "value": "dislike",
    "post_id": 4
  }, {
    "id": 6,
    "user_id": 6,
    "value": "like",
    "post_id": 3
  }, {
    "id": 7,
    "user_id": 7,
    "value": "like",
    "post_id": 2
  }, {
    "id": 8,
    "user_id": 6,
    "value": "like",
    "post_id": 1
  }, {
    "id": 9,
    "user_id": 10,
    "value": "like",
    "post_id": 10
  }, {
  }, {
    "id": 10,
    "user_id": 10,
    "value": "like",
    "post_id": 15
  }, {
  }, {
    "id": 11,
    "user_id": 10,
    "value": "like",
    "post_id": 17
  }, {
  }, {
    "id": 12,
    "user_id": 10,
    "value": "like",
    "post_id": 8
  }, {
  }, {
    "id": 13,
    "user_id": 8,
    "value": "like",
    "post_id": 1
  }, {
    "id": 14,
    "user_id": 10,
    "value": "dislike",
    "post_id": 8
  },{
    "id": 15,
    "user_id": 10,
    "value": "dislike",
    "post_id": 12
  },{
    "id": 16,
    "user_id": 1,
    "value": "dislike",
    "post_id": 1
  }],
  isAuth: false,
  msgErrorLogin: '',
  currentUser: {},
  changeProfil: false,
  
};


export default (state = initialState, action = {}) => {
  switch (action.type) {

    case 'ERROR_LOGIN': {
      return {
        ...state,
        msgErrorLogin: action.msgError,
      }
    }

    case 'HANDLE_AUTH': {
      return {
        ...state,
        isAuth: action.isAuth,
        msgErrorLogin: '',
      }
    }
      
    case 'CHANGE_VOTE': {
      //indexPost est l'index du post dans le tableau des posts (calculé dans middleware/posts )
      //indexLike est l'index du like qu'a déjà fait le user
      const {indexLike, indexPost } = action;
      // cible le vote correspondant parmi tous les votes
      const likedUser = state.like[indexLike];

      // cible le post dans lequel on veut modifier les valeurs total_like ou total_dislike
      let postTarget = state.posts[indexPost];

      // fait un return sous condition de la valeur du nouveau like (like / dislike)
      if( action.newValue === 'like') { // si la nouvelle valeur est like
        return {
          ...state,
          likedUser: likedUser.value = action.newValue,// remplace uniquement la valeur du vote dans like
          postTarget: postTarget.total_like += 1,// ajoute 1 a total_like dans posts
          postTarget: postTarget.total_dislike -= 1,// retir 1 a total_dislike dans posts
        }
      }
      else {
        return { // si la nouvelle valeur est dislike
          ...state,
          likedUser: likedUser.value = action.newValue,// remplace uniquement la valeur du vote dans like
          postTarget: postTarget.total_like -= 1,// retire 1 a total_like dans posts
          postTarget: postTarget.total_dislike += 1,// ajoute 1 a total_dislike dans posts
        }
      }
    }

    case 'NEW_VOTE': {
      const postAddVote = state.posts[action.indexPost];
      //indexPost est l'index du post dans le tableau des posts
      //typeVote est le type de vote effectué (like / dislike)
      const {indexPost, typeVote} = action;

      // cible le post dans lequel on veut modifier les valeurs total_like ou total_dislike
      let postTarget = state.posts[indexPost];
        
      // fait mon return sous condition
      if (typeVote === 'like'){ // si la valeur du vote est like
        return {
          ...state,
          like: [...state.like, action.newVote ],
          postTarget: postTarget.total_like += 1,// cible le post puis la valeur (ici total_like) et j'ajoute 1
        };
      }
      else { // si la valeur du vote est dislike
        return {
          ...state,
          like: [...state.like, action.newVote ],
          postTarget: postTarget.total_dislike += 1,// cible le post puis la valeur (ici total_dislike) et j'ajoute 1
        }
      }
    }
    
    case 'NEW_POST': {
      return {
        ...state,
        posts: [...state.posts, action.newPost],
      }
    }

    case 'ADD_NEW_USER': {
      return {
        ...state,
        users: [...state.users, action.newUser],
      }
    }

    case 'CHANGE_PROFIL': {
      const {userTarget, pathFile, pseudo, bio} = action;

      return {
        ...state,
        userTarget: userTarget.avatar = pathFile,
        userTarget: userTarget.pseudo = pseudo,
        userTarget: userTarget.bio = bio,
        changeProfil: true,
      }
    }

    case 'PROFIL_CHANGE_MADE': {
      return {
        ...state,
        changeProfil: false,
      }
    }

    case 'NEW_COMMENT': {
        return {
          ...state,
          comments: [...state.comments,action.newComment],
        }
    }

    case 'CONNECTED': {
      return {
        ...state,
        isAuth: action.isAuth,
      }
    }

    default: {
      return state;
    }
  }
};
