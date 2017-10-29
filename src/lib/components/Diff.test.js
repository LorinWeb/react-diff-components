import React from 'react';
import ReactDOM from 'react-dom';
import Diff from './Diff';

it('Diff renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Diff />, div);
});
