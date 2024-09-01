import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/source/Home';
import Upload from './pages/source/Upload';
import Translate from './pages/source/Translate';
import './App.css';
import ResponsiveAppBar from './General/source/ResponsiveAppBar';

const App = () => {
    return (
    <BrowserRouter>
    <div className="App">
    <ResponsiveAppBar />
    
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="translate" element={<Translate />} />
      </Routes>
      </div>
    </BrowserRouter>
    )
}

export default App;