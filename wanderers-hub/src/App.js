import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './components/Destinations'; // Adjust path if necessary
import PackageDetail from './components/PackageDetail'; // Adjust path if necessary
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/package-detail/:destId" element={<PackageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
