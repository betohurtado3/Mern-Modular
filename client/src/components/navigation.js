import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap';
import * as library from 'react-bootstrap';

import './app.css';

const navigation = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <library.Button onClick={() => toggleShow(true)}>Show Toast</library.Button>}
      <library.Toast show={show} onClose={() => toggleShow(false)}>
        <library.Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </library.Toast.Header>
        <library.Toast.Body>{children}</library.Toast.Body>
      </library.Toast>
    </>
  );
};

const App = () => (
  <library.Container className="p-3">
    <library.Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <navigation>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </navigation>
    </library.Jumbotron>
  </library.Container>
);

export default App;
