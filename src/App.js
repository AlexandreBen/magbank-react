import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import "./App.scss";

import posts from './data/Posts'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <CreditCard />
      <CardList Posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
    </div>
  );
}


export default App;
