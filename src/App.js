import React, { useState } from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import "./App.scss";

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { AnimatePresence } from 'framer-motion';



const App = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation()
  return (
    <>
      <Navbar  handleCreateAcc={() => setShowModal(true)}/>
       
       <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>

          <Route path="/"  element={<Home handleClick={() => setShowModal(true)} />} />

          <Route path="/login"  element={<Login />} /> 

          <Route path="/Dashboard/*"  element={<Dashboard />} /> 

        </Routes>
       </AnimatePresence>
          
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
      
    </>
  );
};


export default App;
