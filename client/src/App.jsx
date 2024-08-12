import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
>>>>>>> 1047610fc564d912fbed8b2caf93ffc965b26976

function App() {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
