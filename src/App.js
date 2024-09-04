import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/source/Home';
import Upload from './pages/source/Upload';
import Translate from './pages/source/Translate';
import './App.css';
import ResponsiveAppBar from './General/source/ResponsiveAppBar';
import { ContentContext } from './ContentContext';

const App = () => {
    const [file, setFile] = useState({});

    return (
    <BrowserRouter>
      <ContentContext.Provider value={{file, setFile}}>
        <div className="App">

          <ResponsiveAppBar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="upload" element={<Upload />} />
              <Route path="translate" element={<Translate />} />
          </Routes>
          
        </div>
      </ContentContext.Provider>
    </BrowserRouter>
    )
}

export default App;