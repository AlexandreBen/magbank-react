import React, { Redirect, useState } from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import "./App.scss";



import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { AnimatePresence } from 'framer-motion';

const PrivateRoute = ({ children, logged, ...rest }) => (
  <Route
      {...rest}
      render={() => logged ? children : <Redirect to="/login" />}
  />
);

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;
  const location = useLocation();

  const fakeAuth = {
      login(name, account, cb) {
          setName(name);
          setAccount(account);
          setTimeout(cb, 100);
      },

      logout(cb) {
        setName();
        setAccount();
        setTimeout(cb, 100);
      }
  }

  return (
    <>
      <Navbar  handleCreateAcc={() => setShowModal(true)} logged={isLogged} auth={fakeAuth}/>
       
       <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>

          <Route path="/"  element={<Home handleClick={() => setShowModal(true)} />} />

          <Route path="/login"  element={<Login auth={fakeAuth}  name={name} Account={account}/>} /> 

          <Route path="/Dashboard/*"  element={<Dashboard logged={isLogged} name={name} Account={account}/>} /> 

        </Routes>
       </AnimatePresence>
          
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} auth={fakeAuth} />
      
    </>
  );
};


export default App;
