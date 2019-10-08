import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = preloadedState => {
  const loggerMiddleware = createLogger();
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') middlewares.push(loggerMiddleware);
  const middlewareEnhancers = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot)
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));

  return store;
};

export default configureStore;
