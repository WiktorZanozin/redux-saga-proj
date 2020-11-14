import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import App from './App';
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { forbiddenWordsMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

saga.run(sagaWatcher)

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
