import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import {render} from 'mirrorx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
