import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = (): JSX.Element => (
  <div>
    Hello React.
  </div>
)

ReactDOM.render(<App />,document.getElementById('root'));