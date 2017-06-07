import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

let myMiddleware = [
  thunkMiddleware,
  createLogger({ collapsed: true })
];

if (process.env.NODE_ENV === 'production') {
  myMiddleware = [thunkMiddleware];
};

export default createStore(
  rootReducer,
  applyMiddleware(
    ...myMiddleware
  )
);