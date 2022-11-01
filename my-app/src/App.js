import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from "./components/Home"
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;