import React from 'react';
import ReactDOM from 'react-dom';
import './app/global.css';
import { App } from './app/App';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en';
import reportWebVitals from './reportWebVitals';


i18n.use(locale);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
