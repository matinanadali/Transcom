import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/source/Home';
import Upload from './pages/source/Upload';
import Translate from './pages/source/Translate';
import Contact from './pages/source/Contact';
import './App.css';
import ResponsiveAppBar from './General/source/ResponsiveAppBar';

import { FileContextProvider } from './FileContext';

const App = () => {
    return (
    <BrowserRouter>
      <FileContextProvider>
        <div className="App">

          <ResponsiveAppBar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="upload" element={<Upload />} />
              <Route path="translate" element={<Translate />} />
              <Route path="contact" element={<Contact />} />
          </Routes>
          
        </div>
      </FileContextProvider>
    </BrowserRouter>
    )
}

export default App;