import React from 'react';
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institucional from '../components/Institutional';
import Faq from '../components/Faq';

import posts from '../data/Posts'

  const Home = ({ handleClickAcc }) => (

        <>  
          <Hero />

          <CreditCard />
          <CardList Posts={posts} />
          <CenteredButton onClick={handleClickAcc}>
            Abra sua conta
          </CenteredButton>

          <Institucional />
          <Faq /> 
        </>
);
  

export default Home;
