import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
