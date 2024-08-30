import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/source/Home';
import Upload from './pages/source/Upload';

const App = () => {
    return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;