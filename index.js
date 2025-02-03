import { createRoot } from 'react-dom/client';
import React from 'react';
import { Welcome } from './Welcome';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>My React Project with ES6 Modules</h1>
    <Welcome />{' '}
  </>
);
