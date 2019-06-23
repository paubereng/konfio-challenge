import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';

const App = () => <div><h1>konfio-App</h1></div>;

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
