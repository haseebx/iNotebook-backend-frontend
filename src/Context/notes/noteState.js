import React from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const state = {
    name: 'Haseeb',
    class: '10B',
  };
  return (
    <noteContext.Provider value={state}>{props.children}</noteContext.Provider>
  );
};
export default NoteState;
