import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
