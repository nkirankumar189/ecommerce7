import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { productreducer } from './reducer/productreducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { DetailsReducers } from './reducer/DetailsReducers';
import { CartReducer } from './reducer/CartReducer';

const rootReducer = combineReducers({
  "products": productreducer,
  "details": DetailsReducers,
  "cart": CartReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store)
// console.log(rootReducer.details)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
