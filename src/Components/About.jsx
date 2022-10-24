import React, { useContext } from 'react';
import NoteContext from '../Context/notes/noteContext';

export default function About() {
  const X = useContext(NoteContext);
  return <div>This is About {X.name} </div>;
}
