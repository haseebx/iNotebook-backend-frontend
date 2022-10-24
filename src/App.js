import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar Mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
