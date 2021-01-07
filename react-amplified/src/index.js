import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

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

await DataStore.save(
  new Todo({
  "name": "Lorem ipsum dolor sit amet",
  "description": "Lorem ipsum dolor sit amet"
})
);