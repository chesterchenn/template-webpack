import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => (
  <div>
    Hello React.
  </div>
)

ReactDOM.render(<App />,document.getElementById('root'));

if(module.hot){
  // accept itself
  module.hot.accept()
}