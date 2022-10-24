import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/navbar';
import NoteState from './Context/notes/noteState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar Mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}
