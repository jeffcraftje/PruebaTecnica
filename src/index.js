import React from 'react';
import ReactDOM from 'react-dom';
import "./Style/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Route/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);