import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => (
  <div>
    Hello JavaScript.
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}