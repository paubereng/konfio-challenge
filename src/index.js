import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div><h1>konfio-App reload</h1></div>;

ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}
