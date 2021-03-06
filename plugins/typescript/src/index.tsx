import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Greeting extends React.Component {
  render() {
    return (
      <>Hello, TypeScript.</>
    )
  }
}

const App = (): JSX.Element => (
  <div className="text">
    <Greeting />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
};