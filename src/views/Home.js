import React from 'react';
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institucional from '../components/Institutional';
import Faq from '../components/Faq';
import { motion } from 'framer-motion';

import posts from '../data/Posts'

  const Home = ({ handleClickAcc }) => (

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{scale: 0 }}
        >  
          <Hero />

          <CreditCard />
          <CardList Posts={posts} />
          <CenteredButton onClick={handleClickAcc}>
            Abra sua conta
          </CenteredButton>

          <Institucional />
          <Faq /> 
        </motion.div>
);
  

export default Home;
