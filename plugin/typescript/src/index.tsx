import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/common.scss';
import './style.scss';

const App = (): JSX.Element => (
  <div>
    Hello TypeScript.
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
};