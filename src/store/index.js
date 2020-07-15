import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';

import loggerMW from './middlewares/logger';
import inscriptionMW from './middlewares/inscription';
import profilMW from './middlewares/profil';
import postsMW from './middlewares/posts';
import newPostMW from './middlewares/newPost';
import comment from './middlewares/comment';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(loggerMW, inscriptionMW, profilMW, newPostMW, postsMW, comment);

const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
