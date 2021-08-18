import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import _rootReducer from './reducer/reducer';
import "./styles.css";

const store = createStore(_rootReducer);
ReactDOM.render(
  <React.StrictMode>
     <Provider store = {store}>
       <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


