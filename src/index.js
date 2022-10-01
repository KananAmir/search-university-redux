import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { searchUniversityReducer } from './redux/reducers/university.reducer';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(searchUniversityReducer, applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
