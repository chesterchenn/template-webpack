import React from 'react';
import webpack_png from 'assets/webpack.png';

const App = (): React.ReactNode => {
  return (
    <>
      <div className="text">
        <div>Hello, TypeScript.</div>
        <img src={webpack_png} />
      </div>
    </>
  );
};

export default App;
