import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormUser from './components/Form/FormUser';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   
    <FormUser/>
  </React.StrictMode>,
  document.getElementById('root')
);